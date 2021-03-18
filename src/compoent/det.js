import React,{Component } from "react"; 

class Det extends Component  { 
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	
	
		
	}
async componentDidMount(){
		const  list = await window.localStorage.getItem('detdata');
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
	render() {
		return(
			<div>
			<h1>User Details</h1> 
				
				<div className="main-agileinfo">
				 <div className="agileits-top">
				 <form >
				 { this.state.list.map((item,index )=>{

return(
	<div>
		<label>Name</label>
	<input type="text" value={item.name}></input><br></br>
	
	<label>Email</label>
	<input type="text" value={item.email}></input><br></br>
	<label>place</label>
	<input type="text" value={item.place}></input><br></br>
	</div>
)
})
}
						
						
	 
					 </form>
				 
				 </div>
		 </div>
			</div>
		)
	}
} 
export default Det; 
