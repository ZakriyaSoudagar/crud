import React from "react";
import MaterialTable from "material-table";
import './Style.css';
import { Link } from "react-router-dom";

export const Student = ()=>
{
    const data =[
        {
            Name: 'Ravi',
            Stack:'MERN',
            Batch:'September',
            Update: <Link to='ravi'>Edit</Link>
          
        
        },
        {
            Name: 'Sham',
            Stack:'MEAN',
            Batch:'October',
            Update: <Link to='sham'>Edit</Link>
        },
        {
            Name: 'Kishan',
            Stack:'MERN',
            Batch:'November',
            Update: <Link to='kishan'>Edit</Link>
        },
        {
            Name: 'Rahul',
            Stack:'MEVN',
            Batch:'December',
            Update: <Link to='rahul'>Edit</Link>
        },
        {
            Name: 'Rajesh',
            Stack:'MERN',
            Batch:'January',
            Update: <Link to='rajesh'>Edit</Link>
        },
        {
            Name: 'Rohit',
            Stack:'MEAN',
            Batch:'August',
            Update: <Link to='rohit'>Edit</Link>
        }
        
    ]

    const columns =[
        {
            title: 'Name',
            field:'Name'
    },
    {
        title: 'Stack',
        field:'Stack'
},
{
    title: 'Batch',
    field:'Batch'
},
{
    title: 'Update',
    field:'Update'
}   ]
    return(
        <div>
            <div>
                <li><h1>Students Data</h1></li>
                <li><button className="btn">Add Student</button></li>
            </div>
            <MaterialTable title='student data' data={data} columns={columns}/> 
            
        </div>
    )
}