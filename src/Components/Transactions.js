import React,{useContext} from "react";
import {GlobalContext} from '../Context-Reducer/AppContext'

export const Transactions =({transaction})=>{

    const {deleteBtn} = useContext(GlobalContext);
    
    const sign = transaction.amount >0 ?'+':'-';
    return(
        <li className={transaction.amount <0?'minus':'plus'}>
                    {transaction.description}
                    <span>
                        {sign}${Math.abs(transaction.amount)}
                    </span>
                    <button onClick={()=>deleteBtn(transaction.id)} className="delete-btn">X</button>
                </li>
    )
}