import React, { useState } from 'react';
import { post } from 'axios';

const CustomerAdd = () => {
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const [fileName, setFileName] = useState('');

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
    addCustomer().then((res) => console.log(res.data));
    setFile(null);
    setFileName('');
    setUserName('');
    setBirthday('');
    setGender('');
    setJob('');
    window.location.reload();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1> 고객 추가 </h1>
      <br />
      프로필 이미지 :
      <input
        type="file"
        name="file"
        file={file}
        value={fileName}
        onChange={(e) => {
          setFile(e.target.files[0]);
          setFileName(e.target.value);
        }}
      />
      <br />
      이름 :
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      생년월일 :
      <input
        type="text"
        name="birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <br />
      성별
      <input
        type="text"
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      직업 :
      <input
        type="text"
        name="job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <br />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default CustomerAdd;
