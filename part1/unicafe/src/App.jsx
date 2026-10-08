import { useState } from "react"

const Header = () => <p>give feedback</p>

const Btn = ({title, onClick}) => <button onClick={onClick}> {title} </button>

const StatisticsLine = ({text, count}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{count}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const average = (good - bad) / sum
  const positive = (good / sum) * 100
  if (sum > 0) {
    return (
      <div>
        <p>statistics</p>
        <table>
          <tbody>
            <StatisticsLine text="good" count={good}/>
            <StatisticsLine text="neutral" count={neutral}/>
            <StatisticsLine text="bad" count={bad}/>
            <StatisticsLine text="all" count={sum}/>
            <StatisticsLine text="average" count={average.toFixed(1)}/>
            <StatisticsLine text="positive" count={positive.toFixed(1) + " %"}/>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <p>statistics</p>
        <p>No feedback given</p>
      </div>
    )
  }

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header />
      <Btn title="good" onClick={handleGood}/>
      <Btn title="neutral" onClick={handleNeutral}/>
      <Btn title="bad" onClick={handleBad}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App