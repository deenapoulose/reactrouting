import React,{Component } from "react"; 

class Det extends Component  { 
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	
	
		
	}

async componentDidMount(){

		var id1=this.props.match.params.id;
		//const  list = await window.localStorage.getItem('detdata');
		// const parsedlist= JSON.parse(list);
		// if(list == null){
		// 	return false;
		// }
		// else{
		// 	this.setState({list:parsedlist})
		// }
		var str=JSON.parse(localStorage.getItem("localData"));
		let newData = str.filter(function (id,index) {
			return index.toString() === id1 ;
	   
	   });
	   localStorage.setItem("detdata", JSON.stringify(newData));
	   this.setState({list:newData})
	
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
	<input type="text" value={item.name} readOnly></input><br></br>
	<label>Email</label>
	<input type="text" value={item.email} readOnly></input><br></br>
	<label>Place</label>
	<input type="text" value={item.place}readOnly></input><br></br>
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
