import React, { Component } from 'react';
import "./FoodCard.css";

const FoodCard = (props) => {
	return (
		<div className="FoodCard">
			<div className="img">
				<img src={props.image} alt="здесь могла быть наша картинка" />
			</div>
			<div className="TextFields">
				<h1>{props.title}</h1>
				<h3 className="Price">{props.price}₽</h3>
				<h1>{props.name}</h1>
			</div>
		</div>
	);
}

export default FoodCard;