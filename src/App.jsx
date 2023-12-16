import { TextField,Button,Stack } from "@mui/material"
import { useState } from "react"
function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setprinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [validPrinciple,setValidPriciple]= useState(true)
  const [validRate,setValidRate]= useState(true)
  const [validYear,setValidYear]= useState(true)
  
  const validateUserInterface=(e)=>{
    const {name,value}=e.target
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^[-+]?\d*\.?\d+$/)){
      if(name==='principle'){
        setprinciple(value)
        setValidPriciple(true)
      }else if(name==='rate'){
        setRate(value)
        setValidRate(true)
      }else{
        setYear(value)
        setValidYear(true)
      }
    }else{
      if(name==='principle'){
        setprinciple(value)
        setValidPriciple(false)
      }else if(name==='rate'){
        setRate(value)
        setValidRate(false)
      }else{
        setYear(value)
        setValidYear(false)
      }
    }
  }
  const resetBtn=()=>{
    setInterest(0)
    setprinciple(0)
    setRate(0)
    setYear(0)
    setValidPriciple(true)
    setValidRate(true)
    setValidYear(true)
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle|| !rate || !year){
      alert("Please fill the form correctly")
    }else{
      setInterest(principle*rate*year/100)
    }
  }

  return (
    <div style={{width:'100%',height:'100vh'}} className="d-flex justify-content-center bg-dark align-items-center">
     <div style={{width:'600px'}} className=" bg-light p-5 rounded">
      <h3 style={{height:'50px'}}>Simple Calculator</h3>
      <p>Calculate your simple Interest</p>
      <div style={{width:'100%',height:'150px'}} className="d-flex flex-column justify-content-center bg-warning  align-items-center text-white shadow rounded">
        <h1 style={{height:"50px"}}>₹{interest}</h1>
        <p>Total simple Interest</p>
      </div>
      <form className="mt-5" action="" onSubmit={handleCalculate}>
        <div className="mb-3">
        <TextField className="w-100"  id="outlined-basic-principle" label="₹ Priciple Amount" variant="outlined" name="principle" value={principle || ""} onChange={(e)=>validateUserInterface(e)}/>
        </div>
        {!validPrinciple&&<div className="mb-3 text-danger">
          Inavalid priciple Amount
        </div>}
        <div className="mb-3">
        <TextField className="w-100"  id="outlined-basic-interest" label="Rate of Interest (%)" variant="outlined" name="rate" value={rate || ""} onChange={(e)=>validateUserInterface(e)}/>
        </div>
        {!validRate&&<div className="mb-3 text-danger">
          Inavalid Rate
        </div>}
        <div className="mb-3">
        <TextField className="w-100"  id="outlined-basic-time" label="Time period (Yr)" variant="outlined" name="year" value={year || ""} onChange={(e)=>validateUserInterface(e)}/>
        </div>
        {!validYear&&<div className="mb-3 text-danger">
          Inavalid Year
        </div>}
        <Stack direction={'row'} spacing={2}>
        <Button type="submit" className="bg-dark text-white" disabled={validPrinciple&&validRate&&validYear?false:true}  style={{width:'50%', height:'70px'}} variant="contained">CALCULATE</Button>
        <Button className="text-black"  style={{width:'50%', height:'70px'}} variant="outlined" onClick={resetBtn}>RESET</Button>
        </Stack>
      </form>
     </div>
    </div>
  )
}

export default App
