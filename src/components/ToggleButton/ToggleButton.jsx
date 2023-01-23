import { Component } from 'react';
import styles from './toggle-button.module.css';
import PropTypes from 'prop-types';

class ToggleButton extends Component {

  static defaultProps = {
    type: 'submit',
  };
  state = {
      active: false,
    
  };
  handleClick = () => {
    this.setState(({ active }) => {
      return { active: !active };
    });
  };
  render() {
    const { text, type } = this.props;
    const { active } = this.state;
    return (
      <>
        <button
          onClick={this.handleClick}
          className={active ? `${styles.btn} ${styles.active}` : styles.btn}
          type={type}
        >
          {text}
        </button>

  
            
         
      </>
    );
  }
}
export default ToggleButton;
ToggleButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
