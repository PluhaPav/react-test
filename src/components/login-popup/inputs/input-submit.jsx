import React from "react";

export default class InputSubmit extends React.PureComponent {
    render() {
        return (
            <div className='popup__form-row popup__form-center'>
                <input className='popup__form-submit' type='submit' value='Войти' />
            </div>
        );
    }
}
