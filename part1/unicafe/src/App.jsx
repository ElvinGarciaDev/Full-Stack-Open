import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = (props.good * 1 + props.bad * -1) / total
  const positive = props.good * (100/total)

  return (
    <>
          <h2>statistics</h2>

    <table>
      <tbody>
      <StatisticLine text={'Good'} value={props.good}/>
      <StatisticLine text={'Neutral'} value={props.neutral}/>
      <StatisticLine text={'Bad'} value={props.bad}/>
      <StatisticLine text={'All'} value={total}/>
      <StatisticLine text={'Average'} value={average}/>
      <StatisticLine text={'Positive'} value={positive}/>


      </tbody>
    </table>
    
    </>
  );
};

const StatisticLine = (props) => {
  

  return (
    <>

      <tr>
        <td>{props.text} {props.value}</td>
      </tr>
    </>
  )

}

function App() {
  // Save clicks of each button to it's own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give feedback</h1>
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />


    {good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad}/> : <p>No feedback given</p>}
      
    </>
  );
}

export default App;
