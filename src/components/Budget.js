import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);

        if (updatedBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the current spending which is " + totalExpenses);
        } else if (updatedBudget > 20000) {
            alert('Budget cannot exceed £20,000');
        } else {
            setNewBudget(updatedBudget);
            setBudget(updatedBudget);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} /></span>
        </div>
    );
};

export default Budget;
