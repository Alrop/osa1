/** @format */

import { useState } from 'react';

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
		'The only way to go fast, is to go well.',
	];
	// console.log(anecdotes.length, votes.length);

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
	const mostVotes = anecdotes[votes.indexOf(Math.max(...votes))];

	const newAnecdote = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	};

	const addVote = () => {
		// console.log(anecdotes[votes.indexOf(Math.max(...votes))]);
		// console.log(...votes);
		// console.log(selected);
		let nuVotes = [...votes];
		nuVotes[selected] += 1;
		setVotes(nuVotes);
	};

	return (
		<div>
			<h2>Your anecdote:</h2>
			{anecdotes[selected]}
			<br />
			<br />
			This anecdote has {votes[selected]} votes
			<br />
			<button onClick={newAnecdote}>New anecdote</button>
			<button onClick={addVote}>Vote</button>
			<h2>Anecdote of the day with {Math.max(...votes)} votes:</h2>
			{mostVotes}
		</div>
	);
};

export default App;
