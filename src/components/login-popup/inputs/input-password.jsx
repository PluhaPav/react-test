import React from "react";
import PropsTypes from "prop-types";

export default class InputPassword extends React.PureComponent {
    handleChange = event => {
        const { onPasswordChange } = this.props;
        onPasswordChange(event.target.value);
    };

    render() {
        const { passValue, passError } = this.props;
        return (
            <div className='popup__form-row'>
                <input className='popup__form-input' type='password' placeholder='Пароль' value={ passValue } onChange={ this.handleChange } />
                {passError && <div className='popup__form-error'>Пароль должен быть больше 3 символов</div>}
            </div>
        );
    }
}

InputPassword.propTypes = {
    passValue: PropsTypes.string,
    passError: PropsTypes.bool,
    onPasswordChange: PropsTypes.func
};
