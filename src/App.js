import React,{Component} from 'react';
import './App.css';
import Button from './button-component/button';
import Card from './cards/simple-card';
class App extends Component {
  state = {
    array : [
      {name : 'shahul' , age : 22},
      {name : 'fargan' , age : 1},
      {name : 'naz' , age : 3},
    ]
  }

  ButtonHandler = () => {
    console.log('button was clicked!');
  }

 render(){
  return (
    <div className="App">

    <h3 className='primary-heading'>First react component</h3>

     <Button onClick={this.ButtonHandler}> ok </Button>
     <Button name='Cancel'/>

     <Button onClick={this.btn}>I am the  text Content</Button>

     <h3 className='primary-heading'>Dynamic Content using state:</h3>
     <Card cardTitle={this.state.array[0].name} cardDesc={this.state.array[0].age}/>
     <Card cardTitle={this.state.array[1].name} cardDesc={this.state.array[1].age}/>
     <Card cardTitle={this.state.array[2].name} cardDesc={this.state.array[2].age}/>
    </div>
  );
  }
}
export default App;
