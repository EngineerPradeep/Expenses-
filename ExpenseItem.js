import React from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';


const ExpenseItem = (props) =>{
//   const [newTitle, setNewTitle] =  useState("hello");
  

//    const [title, setTitle] =  useState(props.title);
 
//  const clickHandler = () => {
//    setTitle(newTitle);
      
//       // alert("clicked");
//  }
 
//   const changeHandler = (event) => {
//      setNewTitle(event.target.value);
//   }
  
 return(
   <Card className='expense-item'>
     {/* <p className='red'>this is paragraph</p> */}
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
       <h1>{props.title}</h1>
       {/* <h2>Car Insurance</h2> */}
       <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button  onClick={clickHandler}>Chnage Title</button> */}
   
   </Card>
 
 )
 
}

export default ExpenseItem;