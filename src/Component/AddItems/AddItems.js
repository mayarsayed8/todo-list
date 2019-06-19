import React,{Component} from 'react'

class AddItems extends Component{
    state={
        name:"",
        age:""
    }
    handleChange = (e)=>{
        this.setState ({
            [e.target.id]:e.target.value       
        })
    }

        handleSubmit=(e)=>{
            e.preventDefault();
            if(e.target.name.value === ''){
                return false
            }else{
                this.props.addItem(this.state)
                this.setState({
                    name:'',
                    age:''
            })
        } 
       
        } 
    render(){
        return(
         <div>
             <form onSubmit = {this.handleSubmit}>
             <input className="inputname" type="text" placeholder="Enter your Name ..." id="name" onChange={this.handleChange} value={this.state.name}/>
             <input className="inputage"  type="number" placeholder="Enter your Age ..." id="age" onChange={this.handleChange} value={this.state.age}/>
             <input className="inputadd" type="submit" value="Add"/>
             </form>
         </div>
     )
   }
}

export default AddItems