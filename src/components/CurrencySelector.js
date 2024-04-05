import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '/home/project/ejtos-react_budget_app/src/App.css';

const CurrencySelector = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
            <div className='alert alert-info'>
                <span>Currency:</span>
                <select className='currency-select' value={currency} onChange={handleCurrencyChange}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </div>
    );
};

export default CurrencySelector;
