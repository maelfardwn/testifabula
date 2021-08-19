import React, { Component } from 'react'
import axios from 'axios'


export default class Lima_hapusData extends Component {
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
        e.preventDefault(); 
        const reducedArr = [...this.state.dataJsonPlace];

        reducedArr.splice(e, 1);
    
        this.setState({dataJsonPlace: reducedArr})
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
            <th>Hapus data</th>
          </tr>
        </thead>
        <tbody>
          { this.state.dataJsonPlace.map((item,i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td><button onClick={ e => this.removeData(e) }> Hapus </button></td>
            </tr>
          ))}
        </tbody>
      </table>
                
            </div>
        )
    }
}
