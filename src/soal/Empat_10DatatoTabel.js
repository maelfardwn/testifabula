import React, { Component } from 'react'
import axios from 'axios'


export default class Empat_10DatatoTabel extends Component {
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
        var array = [...this.state.dataJsonPlace]; // make a separate copy of the array
        var index = array.indexOf(e)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({dataJsonPlace: [...array]});
        }
        console.log(this.state.dataJsonPlace)
      }

    render() {
        return (
            <div>
             <h4>Json Place holder request max 10 data</h4>
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
            <tr key={item.id}>
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
