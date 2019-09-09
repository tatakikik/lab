import React, {Componen} from 'react';
import App from './App.css';


export default class Content extends Componen{
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
                name: {name}
                <button onClick={this.addNum}>count: {this.state.count}</button>
            
            </div>
        );
    }
}
export default App;
