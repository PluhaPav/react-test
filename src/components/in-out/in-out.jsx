import React from "react";
import "./in-out.scss";
import PropTypes from "prop-types";

export default class InOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authorization: props.authorization };
    }

    render() {
        const { authorization } = this.state;
        return (
            <div className='in-out'>
                {!authorization && (
                    <div className='in-out__login'>
                        <div className='in-out__login-button'>Войти</div>
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
    authorization: PropTypes.bool
};
