import React, { Component, useState, useEffect } from 'react';
import "./FoodList.css";
import FoodCard from "./FoodCard";
import "./FoodCard.css";
import firebase from "./firebaseConfig";
import CategoryName from "./CategoryName";

function FoodList(props) {
	const[items, setItems] = useState([]);

	async function getItemsFromBD() {
		var dataObject = await firebase.database().ref().once("value");
		let itemsArray = dataObject.val();
		let newItems = [];
		for (let key in itemsArray) {
			newItems.push(<CategoryName name={key} />);
			let category = itemsArray[key];
			category.map((product) => {
			newItems.push(<FoodCard title={product.name} price={product.price}  key={product.name} image={product.image} />);
			}
			);
		}
		setItems(newItems);
	}

	useEffect( () => {getItemsFromBD()},[]);

	return (
		<div>
				{items}
		</div>
	)
}

export default FoodList;