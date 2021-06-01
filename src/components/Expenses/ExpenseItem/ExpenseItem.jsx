import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		console.log('clicked');
		setTitle('Updated!');
	};

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />

				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">{props.amount}</div>
					<button onClick={clickHandler}>Change Title</button>
				</div>
			</Card>
		</li>
	);
}

export default ExpenseItem;
