import React, {Component} from 'react';
import App from './App.css';


export default class Content extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            name:''
        }
    }
    addNum=()=>{
        this.setState({
            count:this.state.count+1,
            name:'test'
        })
    }
    render(){
        return(
            <div>
                name: {this.name}
                <button onClick={this.addNum}>count: {this.state.count}</button>
            
            </div>
        );
    }
}

