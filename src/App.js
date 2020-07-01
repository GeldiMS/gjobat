import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button } from 'react-bootstrap';

export default class Gjobat extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      targa: '', 
      shasia: '',
      isSubmitted: false,
      message: 'Kerkesa juaj po procedohet...',
    };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    })
  }

  handleSubmit = (event) => {
    this.setState({
      isSubmitted: true
    })
    axios.post('https://74de6560069e.ngrok.io', {
      targa: this.state.targa,
       shasia: this.state.shasia
      })
    .then(response => {
      this.setState({message: response.data.message})
    });
  
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:5000',
    // })
    //   .then(res => {
    //   this.setState({
    //     message: res.data.message
    //   })
    // });
    event.preventDefault();
}

render() {
  if(!this.state.isSubmitted){
    console.log(this.state.isSubmitted)
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Targa:
        <input type="text" value={this.state.value} name="targa" onChange={this.handleChange} />
        Shasia:
        <input type="text" value={this.state.value} name="shasia" onChange={this.handleChange} />
        <h1>{this.state.isSubmitted}</h1>
      </label>
      <Button onClick={this.handleSubmit}>Submit</Button>
    </form>
  );
  }
  else{
    return(
      <h1>{this.state.message}</h1>
    )
  }
}
}