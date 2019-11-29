import React from "react";
import PropsTypes from "prop-types";

export default class InputPassword extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { onPasswordChange } = this.props;
        onPasswordChange(event.target.value);
    }

    render() {
        const {
            inputObj: { passValue, passError }
        } = this.props;
        return (
            <div className='popup__form-row'>
                <input className='popup__form-input' type='password' placeholder='Пароль' value={ passValue } onChange={ this.handleChange } />
                {passError && <div className='popup__form-error'>Пароль должен быть больше 8 символов</div>}
            </div>
        );
    }
}

InputPassword.propTypes = {
    inputObj: PropsTypes.objectOf({
        value: PropsTypes.string,
        error: PropsTypes.bool
    }),
    onPasswordChange: PropsTypes.func
};
