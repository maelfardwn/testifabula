import React, { Component } from 'react'
import axios from 'axios'

export default class Tiga_requestUrl extends Component {
    constructor() {
        super();
        this.state = {
          title: []
        };
      }
      componentDidMount(){
          axios.get('http://jsonplaceholder.typicode.com/posts')
          .then((res) => {
            this.setState({
              title: [...res.data]
            });
            
          })
      }
      tampil(){
        console.log(this.state.title)
      }

    render() {
        return (
            <div>
            <button onClick={this.tampil.bind(this)}>Tampilkan request di console log</button>
                
            </div>
        )
    }
}
