import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
import InputEmail from "./inputs/input-email";
import InputPassword from "./inputs/input-password";
import InputCheck from "./inputs/input-check";
import InputSubmit from "./inputs/input-submit";
import { actionCreatorPopup } from "../../actions/popup-action";
import "./login-popup.scss";

class LoginPopup extends React.PureComponent {
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

    handlerEmail = dataEmail => {
        const email = String(dataEmail);
        this.setState({ inputEmail: { error: !(email.indexOf("@") > 0), value: email } });
    };

    handlerPassword = dataPassword => {
        const passsword = String(dataPassword);
        this.setState({ inputPassword: { error: !(passsword.length > 3), value: passsword } });
    };

    handleCheck = dataCheck => {
        this.setState({ inputCheck: { error: false, value: dataCheck } });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.state.onClickSubmit(this.state);
    };

    changePopup = (value = false) => {
        this.props.actionCreatorPopup(value);
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
            <div className='popup' onClick={ this.clickoutPopup } onKeyPress={ this.clickoutPopup }>
                <div className='popup__container'>
                    <form method='POST' className='popup__form' onSubmit={ this.handleSubmit }>
                        <div className='popup__form-title'>Вход</div>
                        <InputEmail onEmailChange={ this.handlerEmail } error={ error } value={ value } />
                        <InputPassword onPasswordChange={ this.handlerPassword } error={ passError } value={ passValue } />
                        <InputCheck onChekedChange={ this.handleCheck } error={ checkError } value={ checkValue } />
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

const mapStateToProps = ({ popup: { popup } }) => ({ popup });
const mapDispatchToProps = { actionCreatorPopup };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
