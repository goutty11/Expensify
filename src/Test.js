import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
    }

    //this.bvalue= this.bvalue.bind(this);

    bvalue = (e) => {
        this.setState({
             val: e.target.value
        });
        console.log(this.state.val);
    }

    // concor = (e) => {
        
    //     this.setState = {
    //     };
    // }

    render() {

        const { val } = this.state;
         return (
            <div>
                <input type="text" value={val}></input>
                <button id="1" value="2" onClick={this.bvalue}> 2 </button>
                
                
            </div>
        );
    }
}

export default Test;


