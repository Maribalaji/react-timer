import React, { Component } from "react"
 

class Timer extends Component{
    constructor(props){
        super(props)
        this.state={
            hours:0,
            min:0,
            sec:0

        }
        
    }
    startTimer=()=>{
      this.time= setInterval(() => {
            this.setState({
                hours:this.state.min===60?this.state.hours+1:this.state.hours,
                min:this.state.sec===60?this.state.min+1:this.state.min,
                sec:this.state.sec===60?0:this.state.sec+1
            })
            
        },1000);
    }
    stopTimer=()=>{
        clearInterval(this.time)
    }
    render(){
        return(
            <div>

                <h1 className="head">Timer</h1>
        
            <div className="timer">
                < div className="time-cont">
                   <p>{this.state.hours} : {this.state.min} : {this.state.sec}</p> 
               
                </div>
                
                <div className="btn">
                <button className="start" onClick={this.startTimer}>Start</button>
                <button className="stop"onClick={this.stopTimer}>Stop</button>
                </div>
             </div>
             </div>
        )
    }
    
}
export default Timer