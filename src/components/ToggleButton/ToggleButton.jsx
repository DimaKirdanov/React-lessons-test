import { Component } from "react";
import styles from "./toggle-button.module.css";
import PropTypes from 'prop-types';

class ToggleButton extends Component {
    static defaultProps = {
        type: "submit"
    }
    render() { 
        const { text, type } = this.props;
        return (
            <button className={styles.btn} type = {type}>{text}</button>
        )
    }
}
export default ToggleButton;
ToggleButton.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"] )
}