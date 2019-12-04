/* eslint-disable react/no-unused-state */
import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
import InputEmail from "./inputs/input-email";
import InputPassword from "./inputs/input-password";
import InputCheck from "./inputs/input-check";
import InputSubmit from "./inputs/input-submit";
import { actionCreatorPopup } from "../../actions/popup-action";
import "./login-popup.scss";

class LoginPopup extends React.Component {
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

    changePopup = (value = false) => {
        const { actionCreatorPopup } = this.props;
        actionCreatorPopup(value);
    };

    clickoutPopup = event => {
        if (event.target.closest(".popup__container") === null) {
            this.changePopup(false);
        }
    };

    render() {
        const {
            inputEmail: { error, value },
            inputPassword: { error: passError, value: passValue },
            inputCheck: { error: checkError, value: checkValue }
        } = this.state;
        return (
            <div className='popup' onClick={ this.clickoutPopup } onKeyPress={ this.clickoutPopup } role='button' tabIndex='0'>
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
LoginPopup.propTypes = {
    onClickSubmit: PropType.func,
    actionCreatorPopup: PropType.func.isRequired
};

const mapStateToProps = state => ({ popup: state.popup.popup });
const mapDispatchToProps = { actionCreatorPopup };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
