import React, { useState } from "react";

import "./index.css";

function App() {
  //state
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (event) => {

    //prevent submiting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter a valid height adn weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      //Logic for message

      if(bmi < 25) {
        setMessage("you are underweight")
      } else if (bmi >= 25 && bmi <30) {
        setMessage("you are a healthy weight")
      } else {
        setMessage("you are overweight")
      }
    }
  };

  const reload = () => window.location.reload();

  let imgSrs = "";

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>height (in)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrs} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
