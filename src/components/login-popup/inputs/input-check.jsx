import React from "react";
import PropTypes from "prop-types";

export default class InputCheck extends React.Component {
    clickChecked = event => {
        const check = event.target.checked;
        const { onChekedChange } = this.props;
        onChekedChange(check);
    };

    render() {
        return (
            <div className='popup__form-row'>
                <input className='popup__form-checkbox' type='checkbox' id='remember' onClick={ this.clickChecked } />
                <label htmlFor='remember'>Запомнить</label>
            </div>
        );
    }
}
InputCheck.propTypes = {
    onChekedChange: PropTypes.func
};
