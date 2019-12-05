/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./in-out.scss";
import PropTypes from "prop-types";

export default class InOut extends React.Component {
    onClickLogin = () => {
        this.props.onCkickInOut(true);
    };

    render() {
        const { authorization } = this.props;
        return (
            <div className='in-out'>
                {!authorization && (
                    <div className='in-out__login'>
                        <div onClick={ this.onClickLogin } onKeyPress={ this.onClickLogin } className='in-out__login-button'>
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
    authorization: PropTypes.bool.isRequired,
    onCkickInOut: PropTypes.func.isRequired
};
