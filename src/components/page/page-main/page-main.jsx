import React from "react";
import PropTypes from "prop-types";
import Header from "../../header/header";
import Tabs from "../../tabs/tabs";
import "./page-main.scss";

export default class PageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorization: props.authorization,
            onCkickInOut: props.onCkickInOut
        };
    }

    render() {
        const { authorization, onCkickInOut } = this.state;
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
