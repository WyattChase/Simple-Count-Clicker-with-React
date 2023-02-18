import React, { useEffect, useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

	const Home = () => {
		//add the useState hook here
		const [count, setCount] = useState(23);
		const [time, setTime] =useState(new Date().toLocaleTimeString());
		// add the useEffect here
		useEffect(() => {
			const interval = setInterval(() => {
				setTimeout(new Date().toLocaleTimeString())
			}, 1000);
			return () => clearInterval(interval);

		}, []);
		//the above bracket is called the dependecy array
		// the dependecy array prevents the useEffect hook from running again.











	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>The count is ${count}</p>
			<button onClick={() => setCount(count + 1)}>Click me to add to the count</button>
			<button onClick={() => setCount(count - 1)}>Click me to subtract to the count</button>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<p>{time}</p>
		</div>
	);
};

export default Home;
