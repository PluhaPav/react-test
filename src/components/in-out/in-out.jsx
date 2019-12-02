import React from "react";
import "./in-out.scss";
import PropTypes from "prop-types";

export default class InOut extends React.Component {
    constructor(props) {
        super(props);
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    onClickLogin() {
        const { onCkickInOut } = this.props;
        onCkickInOut(true);
    }

    render() {
        const { authorization } = this.props;
        return (
            <div className='in-out'>
                {!authorization && (
                    <div className='in-out__login'>
                        <div onClick={ this.onClickLogin } onKeyPress={ this.onClickLogin } className='in-out__login-button' role='button' tabIndex='0'>
                            Войти
                        </div>
                    </div>
                )}
                {authorization && (
                    <div className='in-out__logout'>
                        <div className='in-out__user-name'>Константин К.</div>
                        <div className='in-out__logout-button'>Выйти</div>
                    </div>
                )}
            </div>
        );
    }
}

InOut.propTypes = {
    authorization: PropTypes.bool,
    onCkickInOut: PropTypes.func
};
