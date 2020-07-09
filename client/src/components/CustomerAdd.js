import React, { useState } from 'react';
import { post } from 'axios';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hidden: {
    display: 'none',
  },
});

const CustomerAdd = ({ stateRefresh }) => {
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const [fileName, setFileName] = useState('');
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const addCustomer = () => {
    const url = '/api/customers';
    const formData = new FormData();

    formData.append('image', file);
    formData.append('name', userName);
    formData.append('birthday', birthday);
    formData.append('gender', gender);
    formData.append('job', job);
    /// 파일을 보낼 시엔 아래와 같은 헤더를 추가해줘야함
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return post(url, formData, config);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer().then((res) => {
      console.log(res.data);
      stateRefresh();
    });
    setFile(null);
    setFileName('');
    setUserName('');
    setBirthday('');
    setGender('');
    setJob('');
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setFile(null);
    setFileName('');
    setUserName('');
    setBirthday('');
    setGender('');
    setJob('');
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Customer
      </Button>
      <Dialog open={open} color="primary" onClose={handleClose}>
        <DialogTitle>Add Customer</DialogTitle>
        <DialogContent>
          <input
            className={classes.hidden}
            accept="image/*"
            id="raised-button-file"
            type="file"
            file={file}
            value={fileName}
            onChange={(e) => {
              setFile(e.target.files[0]);
              setFileName(e.target.value);
            }}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              name="file"
            >
              {fileName === '' ? '프로필 이미지 선택' : fileName}
            </Button>
          </label>
          <br />
          <TextField
            label="이름"
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <TextField
            label="생일"
            type="text"
            name="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <br />
          <TextField
            label="성별"
            type="text"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <TextField
            label="직업"
            type="text"
            name="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <br />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Add
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerAdd;
