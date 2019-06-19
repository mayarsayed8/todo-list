import React  from 'react';
import AddItems from './Component/AddItems/AddItems'
import TodoItems from './Component/TodoItems/TodoItems'

class App extends React.Component {
 state = {
   items:[
     {id:1 ,name:"mayar",age:32},
     {id:2 ,name:"sayed",age:33},
     {id:3 ,name:"amany",age:23},
     {id:4 ,name:"ahmed",age:22},
   ]
 }

 deleteItem = (id)=> { 
   let items = this.state.items.filter(item =>{
     return item.id !== id
   })
   this.setState({items})
 }
 addItem=(item)=>{
   item.id = Math.random();
   let items =this.state.items;
   items.push(item);
   this.setState({items})
 }

 render(){
  return(
   <div className="App Container">
     <h1 className="text-cente"> Todo List</h1>
   < TodoItems items={this.state.items} deleteItem={this.deleteItem} />
   < AddItems addItem={this.addItem}/>
    </div>
  );
}
}
 
export default App;
