import UserInput from "./components/UserInput"
import { useState } from "react"
function App() {
  const [data, setData] = useState({
    averageBuyingprice: 0,
    investedAmount: 0,
    currentSellingPrice:0,
    taxCharges: 0,
  })

  const handleChange =(inputField, value) =>{
    setData(prevData => {
      return{
        ...prevData,
        [inputField]: +value,
      }
    })
  }

  const profit = (data.currentSellingPrice - data.averageBuyingprice) * data.investedAmount
  const tax =  (data.taxCharges /100) * profit ;
  const netProfit = profit - tax;

  return <>
  <UserInput  userInput={data} onChange={handleChange} />
  <p className="center">Your Net Profie is {netProfit} </p>
  </>
}

export default App
