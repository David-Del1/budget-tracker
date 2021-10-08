import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Bills","type":"Expense","date":"2021-10-07","id":"20433ecf-c9b9-479a-8389-a5fe544a06ea"},{"amount":60,"category":"Pets","type":"Expense","date":"2021-10-07","id":"3f807b0b-8cf8-4c12-b785-0e06e42207aa"},{"amount":200,"category":"Investments","type":"Income","date":"2021-10-07","id":"14cae816-8a7e-4842-a990-f99d2d81834b"},{"amount":100,"category":"Salary","type":"Income","date":"2021-10-07","id":"362e6317-1e22-49ca-ae1a-632f4a4b9ea5"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction});

  const balance = transactions.reduce((acc, currentVal) => {
    return (currentVal.type === 'Expense' ? acc - currentVal.amount : acc + currentVal.amount)
  }, 0)

  return (
    <ExpenseTrackerContext.Provider value={{ 
      deleteTransaction,
      addTransaction,
      transactions,
      balance
     }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}