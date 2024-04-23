import React from "react";
import { Table } from "antd";
import { title } from "process";
const test1 = ()=>{
    const columns=[{title:'Student Code', dataIndex:'studentCode',key:'studentCode'},
        {title:'Student Name',dataIndex:'studentName',key:'studentName'},
        {title:'Final Test',dataIndex:'result',key:'result'},
        {title:'Home Town',dataIndex:'hometown',key:'hometown'}]
    const data=[
        {studentCode:'0909001',studentName:'Lê Văn Thắng',result:8,hometown:'TPHCM'},
        {studentCode:'0909003',studentName:'Trần Minh Tâm',result:7.5,hometown:'Đồng Nai'},
        {studentCode:'0909002',studentName:'Lý Uyển Nhi',result:8.6,hometown:'TPHCM'},
        {studentCode:'0909004',studentName:'Trịnh Thị Thu Thảo',result:6,hometown:'Tiền Giang'},
        {studentCode:'0909005',studentName:'Lê Văn Thắng',result:8,hometown:'Khánh Hòa'},
        ]
    const myProvinces =['TPHCM','Đồng Nai'];
    return(
        <Table columns={columns}
        dataSource={data.filter(x=>x.studentName.includes('Thu'))}/>
    )
}    
    export default test1;
