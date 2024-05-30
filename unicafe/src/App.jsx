/** @format */

import { useState } from 'react';

const Statistics = (good, neutral, bad) => {
	let positive = 1 * good;
	let negative = -1 * bad;
	let total = good + neutral + bad;
	// console.log(good, neutral, bad);
	// console.log(positive, negative);

	if (total > 0) {
		return (
			<>
				<tbody>
					<StatisticLine text="Good:" value={good} />
					<StatisticLine text="Neutral:" value={neutral} />
					<StatisticLine text="Bad:" value={bad} />
					<StatisticLine text="Total:" value={total} />
					<StatisticLine
						text="Average:"
						value={(positive + negative) / total}
					/>
					<StatisticLine text="Positive:" value={~~good / total} />
				</tbody>
			</>
		);
	} else {
		return (
			<tbody>
				<tr>
					<td>No feedback given</td>
				</tr>
			</tbody>
		);
	}
};

const StatisticLine = (prop) => {
	return (
		<tr>
			<td>{prop.text}</td>
			<td>{prop.value}</td>
		</tr>
	);
};

const App = () => {
	// tallenna napit omaan tilaansa
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Please leave feedback</h1>
			<button onClick={() => setGood(good + 1)}>Good</button>
			<button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
			<button onClick={() => setBad(bad + 1)}>Bad</button>
			<h2>Statistics:</h2>
			<table>{Statistics(good, neutral, bad)}</table>
		</div>
	);
};

export default App;
