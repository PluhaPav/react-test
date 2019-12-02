import React from "react";
import PropTypes from "prop-types";
import Header from "../../header/header";
import Tabs from "../../tabs/tabs";
import "./page-main.scss";

export default class PageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authorization: props.authorization };
    }

    render() {
        const { authorization } = this.state;
        return (
            <div className='container'>
                <Header authorization={ authorization } />
                <Tabs />
            </div>
        );
    }
}
PageMain.propTypes = {
    authorization: PropTypes.bool
};
