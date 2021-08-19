import React, { Component } from 'react'
import { sha256, sha224 } from 'js-sha256';

export default class Tujuh_sha256 extends Component {
    constructor() {
        super();
        this.state = {
            input :'',
            resultHash:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.hashHandler = this.hashHandler.bind(this);
    }
     handleChange(evt) {
         this.setState({input:evt.target.value})
        console.log("new value", evt.target.value);
      }
      hashHandler(){
          
        this.setState({ resultHash : sha256(this.state.input)},()=>{
            console.log(this.state.resultHash)

        })
      }
    render() {
        return (
            <div>
            <label>
               <input type="text"  value={this.state.input} onChange={evt =>this.handleChange(evt)}/>
               <button onClick={this.hashHandler}>Hash text</button>
            </label><br/>
            <label>Result Sha {this.state.input} : {this.state.resultHash}</label>
            </div>
        )
    }
}
