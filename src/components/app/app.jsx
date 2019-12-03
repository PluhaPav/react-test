import React from "react";
import { Route, Switch } from "react-router-dom";

import PageMain from "../page/page-main/page-main";
import PageError from "../page/page-error/page-error";
import { MAIN_PAGE_ROUTE } from "../../constants/routes";
import Footer from "../footer/footer";
import LoginPopup from "../login-popup/login-popup";
import "./app.scss";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { popup: false, authorization: false };
    }

    handleInOut = event => {
        this.setState({ popup: event });
    };

    clickoutPopup = event => {
        if (event.target.closest(".popup__container") === null) {
            this.setState({ popup: false });
        }
    };

    handleLogin = event => {
        let auth = false;
        let popupVis = true;
        const {
            inputEmail: { value: eMalue },
            inputPassword: { value: pValue }
        } = event;
        if (eMalue === "test@mail.ru" && pValue === "1234") {
            auth = true;
            popupVis = false;
        } else {
            auth = false;
            popupVis = true;
        }

        this.setState({ popup: popupVis, authorization: auth });
    };

    render() {
        const { authorization, popup } = this.state;
        return (
            <div className='app' onMouseUp={ this.clickoutPopup } role='menuitem' tabIndex='0'>
                <Switch>
                    <Route exact={ true } path={ MAIN_PAGE_ROUTE } render={ () => <PageMain onCkickInOut={ this.handleInOut } authorization={ authorization } /> } />
                    <Route path='*' component={ PageError } />
                </Switch>

                <Footer />
                {popup && <LoginPopup authorization={ authorization } onClickSubmit={ this.handleLogin } />}
            </div>
        );
    }
}
