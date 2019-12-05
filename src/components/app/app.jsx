import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import PageMain from "../../page/page-main/page-main";
import PageError from "../../page/page-error/page-error";
import { MAIN_PAGE_ROUTE } from "../../constants/routes";
import Footer from "../footer/footer";
import LoginPopup from "../login-popup/login-popup";

import { actionCreatorPopup } from "../../actions/popup-action";
import { actionCreatorAuthorization } from "../../actions/authorization-action";
import "./app.scss";

class App extends React.Component {
    handleInOut = event => {
        const { actionCreatorPopup } = this.props;
        actionCreatorPopup(event);
    };

    handleLogin = event => {
        const {
            inputEmail: { value: eMalue },
            inputPassword: { value: pValue }
        } = event;
        const { actionCreatorPopup, actionCreatorAuthorization } = this.props;
        let truthСheck = eMalue === "test@mail.ru" && pValue === "1234";
        actionCreatorPopup(!truthСheck);
        actionCreatorAuthorization(truthСheck);
    };

    render() {
        const { popup, authorization } = this.props;
        return (
            <div className='app'>
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

App.propTypes = {
    popup: PropTypes.bool,
    authorization: PropTypes.bool,
    actionCreatorPopup: PropTypes.func.isRequired,
    actionCreatorAuthorization: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ popup: state.popup.popup, authorization: state.authorization.authorization });
const mapDispatchToProps = { actionCreatorPopup, actionCreatorAuthorization };

export default connect(mapStateToProps, mapDispatchToProps)(App);
