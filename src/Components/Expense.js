import React,{useContext} from 'react'
import {GlobalContext} from '../Context-Reducer/AppContext'

export const Expense = () => {
    let {transaction}= useContext(GlobalContext)

    const amount = transaction.map(transaction=>transaction.amount);

    const income = amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);

    const expense = (amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0) * -1).toFixed(2);

    return (
        <div className="expense">
            <div className='income-expense'>

            <h3>
                Income
            </h3>
            <p className="plus-expense">
                ${income}
            </p>
            </div>
            <div className='expense-expense'>

            <h3>
                Expense
            </h3>
            <p className="minus-expense">
                ${expense}
            </p>
            </div>
        </div>
    )
}
