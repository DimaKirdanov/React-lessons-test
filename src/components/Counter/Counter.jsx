import { Component } from 'react';
import styles from '../Counter/Counter.module.css';
import PropTypes from 'prop-types';

class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    } 
  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
    console.log('clock on +');
  };
  handleDecrement = () => {
      this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
    console.log('clock on -');
  };


  state = {
    value: this.props.initialValue,
  };
  render() {
    return (
      <>
        <button onClick={this.handleIncrement}>Test button +</button>
        <button onClick={this.handleDecrement}>Test button -</button>
        <div className={styles.counter}>
          Conter: <span className={styles.valueSpan}> {this.state.value}</span>
        </div>
      </>
    );
  }
}

export default Counter;
