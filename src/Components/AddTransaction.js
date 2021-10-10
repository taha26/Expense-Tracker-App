import React, { useState,useContext } from 'react'
import {GlobalContext} from '../Context-Reducer/AppContext'
export const AddTransaction = () => {

    const {addBtn} = useContext(GlobalContext);

    let [description, setDescription] = useState('');
    let [amount, setAmount] = useState(0);

const onSubmit = e=>{
    e.preventDefault();

    const new_transaction = {
        id: Math.floor(Math.random()*100000000),
        description,
        amount: +amount
    }

    addBtn(new_transaction)
}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>
                    Add Transaction
                </h3>
                <hr />
                <label htmlFor="description">
                    <p className="des-trans">
                        Description
                    </p>
                    <input type="text"
                        id="description"
                        value={description}
                        placeholder="Description Of Transaction"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="amount">
                    <p className="des-trans">
                        Transaction Ammount
                    </p>
                    <p className="example">Negetive -Expense, Positive +Income</p>
                    <input type="number"
                        id="amount"
                        value={amount}
                        placeholder="Enter Amount"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <br />
                <button className="add-transaction">Add Transaction</button>
            </form>
        </div>
    )
}
