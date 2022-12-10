import React from "react";
import {useState, useRef, useEffect} from 'react';
import './calccss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function App(){

//

const [display, setDisplay] = useState(0);
const[numbers, setNumbers] = useState(0);
const[decimalCount, setdecimalCount] = useState(0);
const operatorRef = useRef(0)
const result = useState(null)
const calcd = useRef(0)
const symbolId= useRef(null)
const refArr = useRef()
const rendered = useRef()
const zero = useRef(true)
const interger = useRef(false)
const initState = useRef(true)
const operatorClicked = useRef(0)


const formatDisplay = () => {
    const negativeReg = /(^\d+)([-,+,/,*]+?)(.)([\d](?:\d*\.\d+?$)?)/gm   
       const octal = /^0+(?=\d)/gm
       const multipleOpps = /(?<group1>[+,/,*,-]+)(?=(?<group2>.{1}|([^-]))\d+$)/gm
        const negativeFixer = /(\d+)(\([-].+\))/gm
     
   
        let myArr = refArr.current.value

 


    if(myArr.match(multipleOpps)){
        console.log('match ops')
       let result =  myArr.replace(multipleOpps, function(match,group1,group2){
        if(group1.length <=1 && group2.length <= 1){
            return
        }  else if(group1 == '-' && group2 == '-'){
            return 
        }else {

            return refArr.current.value = myArr.replace(group1, '')
        }
       }) 
       
    }

    if(myArr.match(octal)){
        return refArr.current.value = (myArr.replace(octal, ''))
    }
  
    if(myArr == undefined){
        return
    } else if(myArr.match(negativeReg)){

      
          if(myArr.match(negativeReg)){

            let result =  myArr.replace(negativeReg, function(match,group1,group2,group3, group4){
                if(group2 == '*','/','+' && group3 == '-' ){
                    return refArr.current.value = group1 + group2 + '(' + group3  + group4 + ')'
                } else if(group3 == '-' && group2 == '-') {
                    return refArr.current.value = group1 + group2 + '(' + group3  + group4 + ')'
                } else if(group2 == '*','/','+' && group3 == '*','/','+' ) {
                    return refArr.current.value = group1 + group3 + group4
                }
              }) 
              
          
          }

     
        
    
}
}
useEffect(() => {
    formatDisplay()
   
    console.log('interget state', interger.current, 'zero state', zero.current, 'operator state', operatorRef.current, 'result state', result.current, 'calcd', calcd.current, 'init',initState.current)
 console.log('Op++',operatorClicked.current )
 console.log(refArr.current.value)
 console.log(refArr.current.value.length)
})


const handleClick = (event) => {
    // If the interget is current true then I should I be able to put zeroes, but if the interget count is false I shouldnt be bale to put intergers like 05
    // Operators reset intergers and zeroes
 
if(calcd.current == 1 ){
    setNumbers((prev) => prev = event.target.textContent)
    setDisplay((prev) => prev =event.target.textContent )
    interger.current = true
    zero.current = false
}

    if(operatorRef.current == 1){
        operatorRef.current = 0
    } else if(zero.current == true && interger.current == false && initState.current != true){
        return
    } else if(zero.current == true && interger.current == false && initState.current == true){
        setNumbers((prev) => prev = event.target.textContent)
        zero.current = false
        initState.current = false
    }
   interger.current = true
    result.current = false
  
   
    
    
setNumbers((prev) => prev = event.target.textContent)
if(display === 0 || calcd.current == 1 ){
    setDisplay((prev)=> prev = event.target.textContent)
    calcd.current = 0
}  else if(result == true) {
    setNumbers((prev) => prev = event.target.textContent)
    setDisplay((prev) => prev =event.target.textContent )
    
    
} else {
    setDisplay((prev) => prev + event.target.textContent)
  
}
}


const handleClear = () => {
    operatorClicked.current = 0
    setDisplay(0)
    setNumbers(0)
    interger.current = false
    calcd.current = 0
    setdecimalCount(0)
    zero.current = true
    initState.current = true
}

const handleCalculation = (event) => {
  
    if(operatorClicked.current < 1 || refArr.current.value.length < 3){
        return
    } else if(calcd.current == 0 ){
    setNumbers(eval(refArr.current.value))
    setDisplay(eval(refArr.current.value));
    setDisplay(eval(refArr.current.value))
    setdecimalCount(0)
  result.current = true
   calcd.current=1
   zero.current = true
   operatorRef.current = 0
   interger.current = false

   operatorClicked.current = 0
}
}
const handleOperator = (event) => {
    operatorClicked.current++
    calcd.current = 0
interger.current = false
zero.current = false
operatorRef.current = 1
initState.current = false
    setNumbers((prev) => prev = event.target.textContent);
    setDisplay((prev) => prev + event.target.textContent)
  
  

if(decimalCount >= 1){
    setdecimalCount(0)
}
}


const handleDecimal =(event)=> {
    zero.current = false
    console.log(operatorRef.current, decimalCount)
    
    setdecimalCount(1)
if(decimalCount >= 1){
    return
} else if(decimalCount == 0 && operatorRef.current == 1 && interger.current != true){
    
    setNumbers('0.')
    setDisplay((prev)=>  prev  +  '0' + event.target.textContent)
    
}  else {
    setNumbers((prev) => prev + event.target.textContent)
    setDisplay((prev)=>  prev + event.target.textContent) 

}
}




const handleZero = (event) => {
    // if first value is zero you cannot add more values
    if(refArr.current.value == 0){
        return
    }
 zero.current = true
    if(operatorRef.current == 1  ){
        
    setDisplay((prev)=>  prev + event.target.textContent) 
    setNumbers((prev) => prev = event.target.textContent)
    zero.current = true
    interger.current = false
    operatorRef.current = 0
    initState.current = false
    }
else if(interger.current == true){
    setDisplay((prev)=>  prev + event.target.textContent) 
    setNumbers((prev) => prev = event.target.textContent)
    zero.current = false
    initState.current = false
} else if (zero.current == true && interger.current == false && calcd.current == 0 && operatorRef.current == 0){

    return
} else if(zero.current == true && calcd.current == 1 && refArr.current.value > 0){
    setDisplay((prev) => prev = event.target.textContent)
    setNumbers((prev) => prev = event.target.textContent)
    zero.current = false
    initState.current = false
}
   




}







return(
    <div className="calculator">
<div className="top-window br">

<Paper elevation={1} sx={{bgcolor: '#66bb6a', borderRadius:0, height:60}}>
<input id='display' disabled ref={refArr} value={display}></input>

<div id="bottom-display">{numbers}</div>


</Paper>

</div>
<div className="top-special br">

<Button onClick={handleClear} id='clear' sx={{borderRadius: 0,
bgcolor: 'error.main' }} variant="contained">

<div className="AC-1  ac">AC</div>
</Button> 


<Button    symbol={'/'}id="divide" onClick={handleOperator} sx={{borderRadius: 0,  bgcolor: 'text.disabled'}} variant="contained">
    
    <div className="AC-2  ac">/</div>
    </Button>
<Button   symbol={'*'} id="multiply" onClick={handleOperator}  sx={{borderRadius: 0,  bgcolor: 'text.disabled'}} variant="contained">
    <div className="AC-3  ac">*</div>
    </Button>

</div>
<div className="side-special ">
    <Button   symbol={'-'} id="subtract" onClick={handleOperator}   sx={{borderRadius: 0,  bgcolor: 'text.disabled'}} variant="contained">
        <div className="">-</div>
        </Button>
    <Button id="add"   symbol={'+'} onClick={handleOperator}  sx={{borderRadius: 0, bgcolor: 'text.disabled'}} variant="contained">
        <div className="br">+</div>
        </Button>
    <Button id="equals"  onClick={()=> {
        formatDisplay();
        handleCalculation();
    }} sx={{borderRadius: 0, bgcolor: 'text.disabled'}} variant="contained">
        <div className="br">=</div>
        </Button>

</div>
<div className="digits br">
<Button id="seven" onClick={handleClick} >
<div className="br digit-1">7</div>
</Button>
<Button  id="eight" onClick={handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

    <div className="br digit-2">8</div>
</Button>
<Button id="nine"  onClick={handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">
    <div className="br digit-3">9</div>

</Button>
<Button  id="four"  onClick={handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">
    <div className="br digit-4">4</div>  
    </Button>
    <Button  id="five" onClick={handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

    <div className="br digit-5">5</div>  
    </Button>
    <Button id="six" onClick={handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

    <div className="br digit-6">6</div>  
    </Button>
    <Button  id="three" onClick={handleClick} sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

    <div className="br digit-7">3</div>  
    </Button>
    <Button  id="two" onClick={handleClick}  sx={{
        borderRadius: 0,
        bgcolor: 'grey.600'
                    
}} 
    variant="contained">

    <div className="br digit-8">2</div>  
    </Button>
    <Button id="one" onClick={handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

    <div className="br digit-9">1</div>  
    </Button>
  
<Button id="zero"  onClick={handleZero}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained" className="digit-10">

    <div className="br digit-10">0</div>  
</Button>
    
    <Button id="decimal" onClick={handleDecimal}  sx={{borderRadius: 0, bgcolor: 'grey.600'}}variant="contained">

    <div className="br digit-11">.</div>  
    </Button>
</div>
    </div>
)
}






export default App