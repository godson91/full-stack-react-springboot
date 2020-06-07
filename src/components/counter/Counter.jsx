import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)

    }
    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }
    reset() {
        this.setState({ counter: 0 })
    }
    increment(by) {
        // console.log(`increment from child  Counterbutton class - ${by}`)
        this.setState((prevState) => {
            return { counter: prevState.counter + by }
        })
    }
    decrement(by) {
        // console.log(`increment from child  Counterbutton class - ${by}`)
        this.setState((prevState) => {
            return { counter: prevState.counter - by }
        })
    }
}
class CounterButton extends Component {

    constructor() {
        super();

        // this.state = {
        //     counter: 0,
        // }

        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)

    }
    render() {
        return (
            <div className="Counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
    // increment() {//update the state - counter++
    //     // console.log('increment')
    //     this.setState((prevState) => {
    //         return { counter: prevState.counter + this.props.by }
    //     })
    //     this.props.incrementMethod(this.props.by);
    // }
    // decrement() {//update the state - counter++
    //     // console.log('increment')
    //     this.setState((prevState) => {
    //         return { counter: prevState.counter - this.props.by }
    //     })
    //     this.props.decrementMethod(this.props.by);
    // }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}



export default Counter;
