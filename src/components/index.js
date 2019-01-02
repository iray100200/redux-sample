import React from 'react';
import Prism from 'prismjs';

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
        return <div ref="divContainer">{ this.props.counter }
            <input onChange={ this.changeHandler }
                type="text" value={ this.props.counter }
                ref={ (input) => {
                    this.textInput = input
                } } />
            <input type="button" value="Focus the text input" onClick={ this.focus } />
        </div>
    }
}

export class DemoComponent extends React.Component {
    incre = () => {
        const { increment, decrement } = this.props;
        increment();
    }
    render() {
        const { state } = this.props;
        var code = `<div>123</div>`;

        var html = Prism.highlight(code, Prism.languages.jsx, 'jsx');
        return <div onClick={ this.incre }>alpha beta
            <Counter counter={ state.counter }></Counter>
            <pre dataStart="-5" className="language-jsx line-numbers"><code dangerouslySetInnerHTML={ { __html: html}}></code></pre>
        </div>
    }
    componentDidUpdate() {
    }
}