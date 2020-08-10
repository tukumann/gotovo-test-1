import React, { Component } from 'react';
import "./CategoryName.css";


const CategoryName = (props) => {
	return (
		<div className="CategoryName">
				<h1>{props.name}</h1>
		</div>
	);
}

export default CategoryName;

