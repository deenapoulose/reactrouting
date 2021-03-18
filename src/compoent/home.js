import React,{Component} from "react"; 
import './home.css'
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			ar:[],
			name:'',
			email:'',
			place:''

		}
	}
handlername = (event) =>{
	this.setState({
		name:event.target.value
	})

	}
handleremail= (event) =>{
	this.setState({
		email:event.target.value
	})
	
	}
handlerplace= (event) =>{
	this.setState({
		place:event.target.value
	})
		
	}

handlersub = (e) =>{
	e.preventDefault();
	//alert(this.state.email);
	//const arry1=this.state.arr;
	var str=localStorage.getItem("localData");
	var arr;
    if(str != null){
		arr=JSON.parse(str);
	}
	else{
		arr=this.state.ar;
	}
	this.setState({ar:arr});
	// //stroing the collected datas to variables
	var n= this.state.name;
	var p = this.state.place;
	var e=this.state.email
	// //pushing the collected data to array
	if(n == "" || p == "" || e==""){
		alert("please fill all ")
	}
	else if(! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(e)){
		alert("give proper mail");
	}
	else{
	 arr.push({
		 name:n,
		 email:e,
		 place:p,
		 id:Math.random() * 1000  
	 })
	
	 this.setState({ar: arr});
	console.log(this.state.arr);
	localStorage.setItem("localData", JSON.stringify(arr));
	console.log(n);
	console.log(p);
	console.log(e);
	this.setState({ name: "",email: "",place: ""});
	}
}


render() {
	return(
		<div>
		<h1>User Details</h1> 
			
			<div className="main-agileinfo">
			 <div className="agileits-top">
			 <form >
					 <input className="text" value={this.state.name} onChange={this.handlername} type="text"  placeholder="Username" required></input>
					 <input className="text"  type="text"  value={this.state.email} onChange={this.handleremail} placeholder="Email" required></input>
 
					 <input className="text"  type="text" value={this.state.place} onChange={this.handlerplace} placeholder="Place"required ></input>
 
		               <button onClick={this.handlersub}  type="submit">REGISTER</button>	
				 </form>
			 
 			</div>
	 </div>
		</div>
	)
}
}
export default Home;



