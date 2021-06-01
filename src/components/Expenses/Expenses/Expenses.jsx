import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import './Expenses.css';

function Expenses(props) {
	const [filterYear, setFilterYear] = useState('2021');

	const onYearChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((item) => {
		return item.date.getFullYear().toString() === filterYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					preSelectedYear={filterYear}
					onYearChange={onYearChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
