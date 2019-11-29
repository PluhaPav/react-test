import React from "react";

export default class InputCheck extends React.Component {
    render() {
        return (
            <div className='popup__form-row'>
                <input className='popup__form-checkbox' type='checkbox' id='remember' />
                <label htmlFor='remember'>Запомнить</label>
            </div>
        );
    }
}
