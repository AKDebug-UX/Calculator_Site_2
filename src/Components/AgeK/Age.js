import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import KeyPad1 from "./KeyPad1";
import "./Input.css";

class Age extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "1998-08-04",
      showStats: false
    };
  }

  changeBirthday = () => {
    this.setState({ birthday: this.state.newDate, showStats: true });
    console.log(this.state);
  };
  render() {
    return ( 
        <div>
       <div className="fade age-stats">
        <KeyPad1 date={this.state.birthday} />
        </div>
        <div className="Age">
        <Form inline>
          <h3>What's Your Date Of Birth 😜</h3>
          <br/>
          <h1>👇👇👇</h1>
          <br/><br/>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />{" "}
          
        </Form>
        <br/><br/>
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
          
          <div />
       
      </div>
      </div>
    );
  }
}

export default Age;
