import React, {useState} from "react";
import {Table} from "antd";

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
        key: '3',
        name: 'Peter',
        age: 52,
        address: '10 Downing Street',
      },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  <Table dataSource={dataSource} columns={columns} />;

const Demo2103: React.FC = () => {
    const [searchData, setSearchData] = useState(dataSource);
    return (
        <div>
            <select onChange={(e) => {
                setSearchData(dataSource.filter(x=>x.age < Number(e.currentTarget.value)))
            }}>
                <option value={30}>Under 30</option>
                <option value={40}>Under 40</option>
                <option value={50}>Under 50</option>
            </select>

            <Table columns = {columns} dataSource={searchData}></Table>
            <button onClick={() => {
                localStorage.clear();
                window.location.reload();
            }}>Logout</button>
        </div>
    )
}
export default Demo2103;