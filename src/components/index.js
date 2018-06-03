import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }
    focus = () => {
        this.textInput.value = 0;
    }
    changeHandler = (e) => {
        this.props.counter = e.target.value;
    }
    render() {
        return <div ref="divContainer">{this.props.counter}
            <input onChange={this.changeHandler}
                type="text" value={this.props.counter}
                ref={(input) => {
                this.textInput = input
            }}/>
            <input type="button" value="Focus the text input" onClick={this.focus}/>
        </div>
    }
}

export class DemoComponent extends React.Component {
    incre = () => {
        const {increment, decrement} = this.props;
        increment();
    }
    render() {
        const {state} = this.props;
        return <div onClick={this.incre}>alpha beta
            <Counter counter={state.counter}></Counter>
        </div>
    }
}