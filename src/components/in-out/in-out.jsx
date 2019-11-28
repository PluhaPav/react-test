import React from "react";
import "./in-out.scss";

export default class InOut extends React.Component {
    render() {
        return (
            <div className='in-out'>
                <div className='in-out__login'>
                    <div className='in-out__login-button'>Войти</div>
                </div>
                {/* <div className='in-out__logout'>
                    <div className='in-out__user-name'>Константин К.</div>
                    <div className='in-out__logout-button'>Выйти</div>
                </div> */}
            </div>
        );
    }
}
