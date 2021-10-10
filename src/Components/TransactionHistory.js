import React,{useContext} from 'react'
import { Transactions } from './Transactions'
import {GlobalContext} from '../Context-Reducer/AppContext'
export const TransactionHistory = () => {
    let {transaction}= useContext(GlobalContext)
    // console.log('Context  ---->',transaction)
    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <hr/>
            <ul className="list">
                {transaction.map(transaction=>(
                    <Transactions key={transaction.id} transaction={transaction} />
                
                ))}
                
            </ul>
        </div>
    )
}
