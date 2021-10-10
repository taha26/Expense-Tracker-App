import React,{useContext} from 'react'
import {GlobalContext} from '../Context-Reducer/AppContext'

export const CurrentBalance = () => {
    let {transaction}= useContext(GlobalContext)

    const amount = transaction.map(transaction=>transaction.amount);
    const current_balance = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return (
        <div className="current-balance-container">
            <h3 className="current-balance-heading">
                Current Balance
            </h3>
            <h4 className="current-balance">
                ${current_balance}
            </h4>
        </div>
    )
}
