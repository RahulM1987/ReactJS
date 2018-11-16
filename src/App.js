import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar'
import Card from './CardView';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then((json) => {
        
      this.setState({
        data:[...json]
      })
      
      })
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <div>
      <AppBar
      title="AppTitle"
      />
      {
        (this.state.data)&&
          this.state.data.map((val)=>{
            return <div className="card-parent"><Card title={val.title} /></div>
          })
        
      }
      
      </div>
      <p>
      
      </p>
      
      </header>
      </div>
      );
    }
  }
  
  export default App;
  