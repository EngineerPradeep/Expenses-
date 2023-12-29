import React from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


const Expenses = (props) => {
   return(
    <Card className='expenses'>
     <ExpenseItem 
   date={props.item[0].date } 
   title={props.item[0].title} 
   amount={props.item[0].amount}/>
 
   
   <ExpenseItem 
   date={props.item[1].date } 
   title={props.item[1].title} 
   amount={props.item[1].amount}/>
   
  
   <ExpenseItem 
   date={props.item[2].date } 
   title={props.item[2].title} 
   amount={props.item[2].amount}/>

   <ExpenseItem 
   date={props.item[3].date } 
   title={props.item[3].title} 
   amount={props.item[3].amount}/>

   <ExpenseItem 
   date={props.item[4].date} 
   title={props.item[4].title} 
   amount={props.item[4].amount}/>
  
   <ExpenseItem 
   date={props.item[5].date } 
   title={props.item[5].title} 
   amount={props.item[5].amount}/>

    
    </Card>
   
   );


}

export default Expenses;