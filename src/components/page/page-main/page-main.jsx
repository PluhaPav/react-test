import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../../header/header";
import Tabs from "../../tabs/tabs";
import { actionCreatorAuthorization } from "../../../actions/authorization-action";

import "./page-main.scss";

class PageMain extends React.Component {
    render() {
        const { authorization, onCkickInOut } = this.props;
        return (
            <div className='container'>
                <Header authorization={ authorization } onCkickInOut={ onCkickInOut } />
                <Tabs />
            </div>
        );
    }
}
PageMain.propTypes = {
    authorization: PropTypes.bool,
    onCkickInOut: PropTypes.func
};

const mapStateToProps = state => ({ authorization: state.authorization.authorization });
const mapDispatchToProps = { actionCreatorAuthorization };

export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
