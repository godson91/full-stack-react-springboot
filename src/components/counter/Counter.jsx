import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

 

   class CounterButton extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0,
            counter1 : 5,
            counter2 : 10
        }
        this.increment = this.increment.bind(this)
    }
       render () {
           return (
               <div className="Counter">
                   <button onClick={this.increment}>{this.props.by}</button>
                   <span className="count">{this.state.counter}</span>
               </div>
           );
       }
        increment () {//update the state - counter++
        // console.log('increment')
            this.setState({
                counter : this.state.counter + this.props.by
            })
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
     by : PropTypes.number
}



export default CounterButton;
