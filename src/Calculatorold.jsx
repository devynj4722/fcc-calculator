import React from "react";

import './calccss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

class Calculator extends React.Component {
    constructor(props){
        super(props)
       this.state = {
            numbers: 0,
            display: 0,
            result: 0,
            decimal: 0,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleCalculation = this.handleCalculation.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleDecimal = this.handleDecimal.bind(this)
    }
componentDidMount() {
  
}

handleClick = (event) => {
    const theArray = new Array(this.state.display)
    console.log(event.target.textContent)
   
this.setState(state => {



if(this.state.numbers === 0 ){
    
    return {numbers: this.state.numbers  = event.target.textContent}
} else if(theArray.includes('=')){
    return {display: 0}
}

 else  {
    return {numbers: this.state.numbers + event.target.textContent, display: this.state.numbers + event.target.textContent}
}  

})
  

}
handleCalculation = () => {
   this.setState(state =>{
    return {numbers: eval(this.state.numbers), display: this.state.numbers + '=' + eval(this.state.numbers), result: this.state.numbers }
   })
}
handleClear = () => {
    this.setState(state => {
        return {numbers: 0, display: 0}
    })
}
handleZeroes = (event) => {
    const octal = /^0+/
    const match = this.state.numbers
    this.setState(state =>{
        if(octal.test(match) == true) {
            console.log('true')
                return {numbers: 0}
            } else {
                return {numbers: this.state.numbers + event.target.textContent}
            }
    })
}
handleDecimal = (event) => {
    
   if(event && this.state.decimal == 0){
    this.setState(state =>{
return({decimal: this.state.decimal + 1})
    })
    if(this.state.decimal == 1){
    document.getElementById('decimal').disabled = true
    }
   }
    const myArray = new Array(...this.state.numbers)
   
   
    const checkLast = myArray[myArray.length - 1]
    this.setState(state =>{
     if( !checkLast.includes('.') && typeof parseInt(checkLast) === 'number') {
        console.log(this.state.numbers)
       
        return {numbers: this.state.numbers + '.', decimal: this.state.decimal + 1} 
    }
})

}

if(operatorRef.current == 1  ){
    setNumbers(0)
    zero.current = false
}
  operatorRef.current = 0
 
if(display == 0 || zero.current == true  && interger.current == false){
    return
} else if(operatorRef.current != 1) {
    
    setDisplay((prev)=>  prev + event.target.textContent) 
    zero.current = true
} else if(interger.current == true) {
    setDisplay((prev)=>  prev + event.target.textContent) 
} else if(calcd.current == 1){
    setDisplay((prev)=>  prev = event.target.textContent) 
    setNumbers((prev) => prev = event.target.textContent)
    zero.current = false
   } 
   */
/*
const display = (symbol) => {

    //split numbers
    let tmpArrayNumber =  (expression+symbol).split(/[+|\-|\*|=|\/]/);
    
    //doesn't allow multiple 00
    if(tmpArrayNumber[tmpArrayNumber.length - 1]!="00"){
      setExpression((expression + symbol)
                    //doesnt allow 5.5.5 and will display 5.55
                    .replace(/([1-9]+)(\.)([1-9]+)(\.)/g,'$1$2$3')
                    //doesn't allow more than two --
                    .replace(/([\-\-])([\-])/g,'$2')
                    //replace +-+ by + and so on
                    .replace(/([\+\-|\*\-|\/\-])([\+|\*|=|\/|\.\.])/g,'$2')
                    //replace -+ by + and so on
                    .replace(/([\+|\*|=|\/|\.\.])([\+|\*|=|\/|\.\.])/g, '$2'));
      
      //display last element on display
      if(tmpArrayNumber[tmpArrayNumber.length - 1]=="")
        {
          setAnswer(symbol);
        }
      else
        {
          setAnswer(tmpArrayNumber[tmpArrayNumber.length - 1]);
        }
      
      
      if(expression[expression.length-1] == "=")
        {
          if(/[1-9.]/.test(symbol)){
            setExpression(symbol);
          }
          else{
            setExpression((answer + symbol));
          }
        }
    }

    


  };
  
  const calculate = () => {
    setAnswer(eval(expression));
    console.log(expression);
    console.log(answer);
    setExpression(eval(expression));
  }
  */
    render(){
       
        return(
            <div className="calculator">
        <div className="top-window br">

<Paper elevation={1} sx={{bgcolor: '#66bb6a', borderRadius:0, height:60}}>
<div id="top-display">{this.state.numbers}</div>
    
    <div id="display">{this.state.display}</div>


</Paper>

        </div>
        <div className="top-special br">

       <Button onClick={this.handleClear} id='clear' sx={{borderRadius: 0,
    bgcolor: 'error.main' }} variant="contained">
       
        <div className="AC-1  ac">AC</div>
        </Button> 
       
        
        <Button  id="divide" onClick={this.handleClick} sx={{borderRadius: 0,  bgcolor: 'text.disabled'}} variant="contained">
            
            <div className="AC-2  ac">/</div>
            </Button>
        <Button id="multiply" onClick={this.handleClick}  sx={{borderRadius: 0,  bgcolor: 'text.disabled'}} variant="contained">
            <div className="AC-3  ac">*</div>
            </Button>

        </div>
        <div className="side-special ">
            <Button id="subtract" onClick={this.handleClick}   sx={{borderRadius: 0,  bgcolor: 'text.disabled'}} variant="contained">
                <div className="">-</div>
                </Button>
            <Button id="add"  onClick={this.handleClick}  sx={{borderRadius: 0, bgcolor: 'text.disabled'}} variant="contained">
                <div className="br">+</div>
                </Button>
            <Button id="equals"  onClick={this.handleCalculation} sx={{borderRadius: 0, bgcolor: 'text.disabled'}} variant="contained">
                <div className="br">=</div>
                </Button>

        </div>
        <div className="digits br">
        <Button id="seven" onClick={this.handleClick} >
        <div className="br digit-1">7</div>
        </Button>
        <Button  id="eight" onClick={this.handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

            <div className="br digit-2">8</div>
        </Button>
        <Button id="nine"  onClick={this.handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">
            <div className="br digit-3">9</div>

        </Button>
        <Button  id="four"  onClick={this.handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">
            <div className="br digit-4">4</div>  
            </Button>
            <Button  id="five" onClick={this.handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

            <div className="br digit-5">5</div>  
            </Button>
            <Button id="six" onClick={this.handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

            <div className="br digit-6">6</div>  
            </Button>
            <Button  id="three" onClick={this.handleClick} sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

            <div className="br digit-7">3</div>  
            </Button>
            <Button  id="two" onClick={this.handleClick}  sx={{
                borderRadius: 0,
                bgcolor: 'grey.600'
                            
        }} 
            variant="contained">

            <div className="br digit-8">2</div>  
            </Button>
            <Button id="one" onClick={this.handleClick}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained">

            <div className="br digit-9">1</div>  
            </Button>
          
<Button id="zero" value={0} onClick={this.handleZeroes}  sx={{borderRadius: 0, bgcolor: 'grey.600'}} variant="contained" className="digit-10">

            <div className="br digit-10">0</div>  
</Button>
            
            <Button id="decimal" onClick={this.handleDecimal}  sx={{borderRadius: 0, bgcolor: 'grey.600'}}variant="contained">

            <div className="br digit-11">.</div>  
            </Button>
        </div>
            </div>
        )
    }
}

export default Calculator