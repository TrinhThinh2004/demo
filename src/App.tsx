

// import React from 'react';
// import logo from './logo.svg';
// import Demo2103 from './components/demo2103';
// //import demo1104 from './components/demo1104';
// import './App.css';
// import LoginComponent from './components/demo2803';

// function App() {
//   return (
//     <div>
//       {localStorage.getItem('userName') === 'admin'?
//       <Demo2103 /> : null} 
//       <LoginComponent />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Table, Input } from "antd";

const Demo1104 = () => {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState<Array<{ id: number; studentCode: string; studentName: string; result: number; hometown: string; }>>([]);

  const columns = [
    { title: 'Student Code', dataIndex: 'studentCode', key: 'studentCode' },
    { title: 'Student Name', dataIndex: 'studentName', key: 'studentName' },
    { title: 'Final Test', dataIndex: 'result', key: 'result' },
    { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' }
  ];

  const data = [
    { id: 1, studentCode: '0909001', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM' },
    { id: 2, studentCode: '0909003', studentName: 'Trần Minh Tâm', result: 7.5, hometown: 'Đồng Nai' },
    { id: 3, studentCode: '0909002', studentName: 'Lý Uyển Nhi', result: 8.6, hometown: 'TPHCM' },
    { id: 4, studentCode: '0909004', studentName: 'Trịnh Thị Thu Thảo', result: 6, hometown: 'Tiền Giang' },
    { id: 5, studentCode: '0909005', studentName: 'Lê Văn Thắng', result: 8, hometown: 'Khánh Hòa' }
  ];

  const handleSearch = () => {
    const trimmedSearchText = searchText.trim().toLowerCase();
    const filteredData = data.filter(item =>
      item.studentName.toLowerCase().includes(trimmedSearchText)
    );
    setSearchData(filteredData);
  };

  return (
    <div>
      <p>Find student by name:</p>
      <Input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      /> 
      <input type="checkbox"/> TPHCM 
      <input type="checkbox"/> Đồng Nai 
      <input type="checkbox"/> Tiền Giang 
      <input type="checkbox"/> Khánh Hòa 
      <Table columns={columns} dataSource={searchData.length > 0 ? searchData : data} />
    </div>
  );
};

export default Demo1104;

  
  

