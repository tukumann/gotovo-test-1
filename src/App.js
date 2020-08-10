import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { Widget } from "@uploadcare/react-widget";
import { FirebaseDatabaseProvider, FirebaseDatabaseMutation } from "@react-firebase/database";
import FoodCard from "./FoodCard";
import FoodList from "./FoodList";
import CategoryName from "./CategoryName";

//import AuthForm from "./AuthForm";
// 30506db15e8554c1cad3

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        url: "",
        isLoggedIn: false,
      }
      this.uploadedPhoto = this.uploadedPhoto.bind(this)
    }

    // let changeAuthStatus = changeAuthStatus() {
    //     this.setState({isLoggedIn: !this.state.isLoggedIn});
    // }

// readFromDB() {
//   firebase.database().ref().once("value").then((snapshot) => {console.log(snapshot.val())})
// }

// saveToDB() {
//   firebase.database().ref().update({"name": "Vitalii", "email": "dart@gmail.com"});
// } 
    componentDidMount() {
        const db = firebase.database();
        console.log(db)
    }

    handleChange = ({ target: {value, id }}) => {
        console.log(value)
    }; 

    uploadedPhoto = (value) => {
      console.log(value)
      this.setState({url : value.cdnUrl})
    }


    render() {
      return (
          <div>
            <Widget onChange={this.uploadedPhoto} id="gotovofoto" publicKey="30506db15e8554c1cad3" />
            <p>{this.state.url}</p>
                <CategoryName />
                <FoodList />
          </div>
        )}; 
};
 // {/* <button onClick={this.saveToDB}>Save To DB */}
 //                </button>
 //                <button onClick={this.readFromDB}>Read From DB
 //                </button>