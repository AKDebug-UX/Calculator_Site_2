
import React, { Component } from "react";
import "./Input.css";

class KeyPad1 extends Component {
  calculateAge = date => {
    const today = new Date().getTime();
    const birthday = new Date(date).getTime();
    const age_mili = Math.abs(today - birthday);

    let days = Math.floor(age_mili / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years, ${months} months, ${days} days!`;
  };
  render() {
    return (
      <div className="result">
        <h1>🎂🎂🎂</h1>
        <h3>{this.props.date}</h3>
        <h4>Congrats on {this.calculateAge(this.props.date)}!</h4>
      </div>
    );
  }
}




























// function KeyPad() {
//   const [currentYear, setcurrentYear] = useState(0);
//   const [birthYear, setbirthYear] = useState(0);
//   const [age, setAge] = useState(0);
//   function clickHandler () {
//     const theAge = currentYear - birthYear ;
//     setAge(theAge);
//   }

//   function inputChangeHandler (e) {
//     setbirthYear(e);
//   }

//   function inputChangeHandler1 (f) {
//     setcurrentYear(f);
//   }


//    return (
//     <div>
//     <div className="result"> <h2>Your Age is {age}</h2> </div>
//     <div className="Age">
      
//       <div className="dob">
//         <label><h3>Date Of Birth</h3></label>
//         <input onChange={(e) => inputChangeHandler(e.target.value)} type="date"/>
//       </div>

//       <br/>

//       <div className="tsd">
//        <label><h3>Today's Date</h3></label>
//        <input type="date" onChange={(f) => inputChangeHandler1(f.target.value)} />
//       </div>

//        {" "}
//       <br/><br/>

//       <div className="btn">
//        <button onClick={clickHandler}>Calculate</button>
       
//       </div>
//      </div>
//     </div>
//   );
// }

export default KeyPad1;
