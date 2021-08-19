import React, { Component } from 'react'
import axios from 'axios'


export default class Enam_deleteKey extends Component {
    constructor() {
        super();
        this.state = {
          dataJsonPlace: []
        };
        this.removeData = this.removeData.bind(this);
      }
      componentDidMount(){
          axios.get('http://jsonplaceholder.typicode.com/posts',{
            params: {
              _limit: 10
             }
          })
          .then((res) => {
            this.setState({
                dataJsonPlace: [...res.data]
            });
            
          })
      }
      removeData(e) {
        let newArray = this.state.dataJsonPlace.map(function(item) { 
            delete item.title; 
            return item; 
        });
        this.setState({dataJsonPlace:newArray})
      }

    render() {
        return (
            <div>
             <h4>Json Place holder request max 10 data</h4><br/>
             <button onClick={  e => this.removeData(e)  }> Delete Key title </button>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          { this.state.dataJsonPlace.map((item,i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
                
            </div>
        )
    }
}
