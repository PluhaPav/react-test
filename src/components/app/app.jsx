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
        this.state = { authorization: false };
    }

    render() {
        const { authorization } = this.state;
        return (
            <div className='app'>
                <Switch>
                    <Route exact={ true } path={ MAIN_PAGE_ROUTE } render={ () => <PageMain authorization={ authorization } /> } />
                    <Route path='*' component={ PageError } />
                </Switch>

                <Footer />
                {authorization && <LoginPopup />}
            </div>
        );
    }
}
