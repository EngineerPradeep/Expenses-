
// import ExpenseItem from "./components/ExpenseItem";
import React,{useState} from 'react';
 import NewExpense from './components/NewExpenses/NewExpense';
// import Expenses from "./components/Expenses/Expeenses";
 import Expenses from './components/Expeenses/Expenses';
 
 let DUMMY_EXPENSE = [
  {
   id: 'e1',
   title: 'school Fee',
   amount: 250,
   date: new Date(2021,5,12)
   
  },
  {
   id: 'e2',
   title: 'Hotel',
   amount: 270,
   date: new Date(2021,8,12)
   
  },
  {
   id: 'e3',
   title: 'College',
   amount: 300,
   date: new Date(2021,1,12)
   
  },
  {
   id: 'e4',
   title: 'Book',
   amount: 350,
   date: new Date(2021,2,12)
   
  },
  {
   id: 'e5',
   title: 'House',
   amount: 400,
   date: new Date(2021,6,12)
   
  },
  {
   id: 'e6',
   title: 'Oyo',
   amount: 500,
   date: new Date(2021,6,12)
   
  }


];

const App = () =>{

const [ expenses, setExpenses ]= useState(DUMMY_EXPENSE);


  // fetch('http://localhost/sample-api/api/read.php').then(
  //  response =>{
  //   return response.json();
  //  }
   
  // ).then(
  //   data => {
  //    console.log(data);
  //    setExpenses(data);
  //   }
  // )
 
   
   const addExpenseHandler = (expense) =>{
   
   const updatedExpense = [expense, ...expenses];
   setExpenses(updatedExpense);
   
  //  console.log(expense);
   };


  // let expenseDate = new Date(2021,3,28);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;
  
  
 return  (
  
 <div>
 <NewExpense  onAddExpense={addExpenseHandler}/>
  <Expenses item={expenses}/>
   </div>
 
 );

}

export default App;