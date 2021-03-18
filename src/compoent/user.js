import React,{Component } from "react"; 
import './user.css';

class User extends Component{
constructor(props){
	super(props)
	this.state={
		list:[]
	}


	
}
async componentDidMount(){
	const  list = await window.localStorage.getItem('localData');
	const parsedlist= JSON.parse(list);
	if(list == null){
		return false;
	}
	else{
		this.setState({list:parsedlist})
	}
	console.log(this.state.list);
	console.log(parsedlist)

}

handsub = (e) =>{
	//alert(e);
	var str=JSON.parse(localStorage.getItem("localData"));
	let newData = str.filter(function (id,index) {
		return index == e;
	   
	   });
	   console.log(newData)
	   localStorage.setItem("detdata", JSON.stringify(newData));

	
}

render() {
	return(
		<div>
		<h1>User Details</h1> 
		
			
		
			<table>
				<thead>
					<th>name</th>
					<th>view</th>
				</thead>
				<tbody>
				{ this.state.list.map((item,index )=>{

					return(<tr id={index}>
						<td>{item.name}</td>
						<td><button onClick={()=> {this.handsub(index)}}>view</button></td>
					</tr>)
				})
				}
				</tbody>

		</table>
				
		
		</div>
	)
}
}
export default User;




