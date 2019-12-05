import React from "react";
import PropTypes from "prop-types";

export default class InputEmail extends React.PureComponent {
    handleChange = event => {
        const { onEmailChange } = this.props;
        onEmailChange(event.target.value);
    };

    render() {
        const { value, error } = this.props;
        return (
            <div className='popup__form-row'>
                <input className='popup__form-input' type='email' placeholder='Логин' value={ value } onChange={ this.handleChange } />
                {error && <div className='popup__form-error'>Некоректный E-mail</div>}
            </div>
        );
    }
}

InputEmail.propTypes = {
    value: PropTypes.string,
    error: PropTypes.bool,
    onEmailChange: PropTypes.func
};
