import React, { Component } from 'react'
import data from './Satu_jsonArray.json'


export default class Dua_ubahDataJson extends Component {
    componentDidMount(){
        console.log(data[0])
    }
    render() {
        return (
            <div>
            <label style={{fontSize:'24px',fontWeight:'bold'}}>id : {data[0].id}</label><br/>
            <label style={{fontSize:'24px',fontWeight:'bold'}}>nama : {data[0].nama}</label>
                
            </div>
        )
    }
}
