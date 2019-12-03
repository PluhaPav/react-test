/* eslint-disable react/no-unused-state */
import React from "react";
import StateType from "prop-types";
import InputEmail from "./inputs/input-email";
import InputPassword from "./inputs/input-password";
import InputCheck from "./inputs/input-check";
import InputSubmit from "./inputs/input-submit";
import "./login-popup.scss";

export default class LoginPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputEmail: {
                error: false,
                value: ""
            },
            inputPassword: {
                error: false,
                value: ""
            },
            inputCheck: {
                error: false,
                value: false
            },
            onClickSubmit: props.onClickSubmit
        };
    }

    handlerEmail = event => {
        const email = String(event);
        this.setState({ inputEmail: { error: !(email.indexOf("@") > 0), value: email } });
    };

    handlerPassword = event => {
        const passsword = String(event);
        this.setState({ inputPassword: { error: !(passsword.length > 3), value: passsword } });
    };

    handleCheck = event => {
        this.setState({ inputCheck: { error: false, value: event } });
    };

    handleSubmit = event => {
        const { onClickSubmit } = this.state;
        event.preventDefault();
        onClickSubmit(this.state);
    };

    render() {
        const {
            inputEmail: { error, value },
            inputPassword: { error: passError, value: passValue },
            inputCheck: { error: checkError, value: checkValue }
        } = this.state;

        return (
            <div className='popup'>
                <div className='popup__container'>
                    <form method='POST' className='popup__form' onSubmit={ this.handleSubmit }>
                        <div className='popup__form-title'>Вход</div>
                        <InputEmail onEmailChange={ this.handlerEmail } inputObj={ { error, value } } />
                        <InputPassword onPasswordChange={ this.handlerPassword } inputObj={ { passError, passValue } } />
                        <InputCheck onChekedChange={ this.handleCheck } inputObj={ { checkError, checkValue } } />
                        <InputSubmit />
                    </form>
                </div>
            </div>
        );
    }
}
LoginPopup.stateType = {
    inputEmail: StateType.objectOf({
        error: StateType.bool,
        value: StateType.string
    }),
    inputPassword: StateType.objectOf({
        error: StateType.bool,
        value: StateType.string
    }),
    inputCheck: StateType.objectOf({
        error: StateType.bool,
        value: StateType.bool
    }),
    onClickSubmit: StateType.func
};
LoginPopup.propTypes = {
    onClickSubmit: StateType.func
};
