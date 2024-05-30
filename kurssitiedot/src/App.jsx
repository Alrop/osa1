/** @format */

const Header = (prop) => {
	// console.log(prop.course);
	return <h1>{prop.course}</h1>;
};

const Content = (props) => {
	// console.log(props.parts[0].part + props.parts[0].exercises);
	return (
		<>
			<Part
				name={props.parts[0].part}
				exercises={props.parts[0].exercises}
			/>
			<Part
				name={props.parts[1].part}
				exercises={props.parts[1].exercises}
			/>
			<Part
				name={props.parts[2].part}
				exercises={props.parts[2].exercises}
			/>
		</>
	);
};

const Part = (props) => {
	console.log(props.name, props.exercises);
	return (
		<p>
			{props.name}: {props.exercises}
		</p>
	);
};

const Total = (props) => {
	// console.log(props);
	const sum = props.total.reduce((a, { exercises }) => a + exercises, 0);
	// console.log(sum);
	return <>Total exercises: {sum}</>;
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				part: 'Fundamentals of React',
				exercises: 10,
			},
			{
				part: 'Using props to pass data',
				exercises: 7,
			},
			{
				part: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total total={course.parts} />
		</div>
	);
};

export default App;
