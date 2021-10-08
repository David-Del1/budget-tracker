import React from 'react';

const isIncome = Math.round(Math.random());

function InfoCard() {
  return (
    <div style={{ textAlign: 'center', padding: '0 10%' }}>
      Try Saying: <br /> 
      Add { isIncome ? 'Income ' : 'Expense ' }
       for { isIncome ? '$75 ' : '$150 ' }
       in Category { isIncome ? 'Salary ' : 'Bills ' }
       for { isIncome ? 'Friday' : 'Tuesday' }
    </div>
  )
}

export default InfoCard
