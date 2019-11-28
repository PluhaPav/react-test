import React from "react";
import Header from "../header/header";
import Tabs from "../tabs/tabs";
import "./page-main.scss";

export default class PageMain extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <Tabs />
            </div>
        );
    }
}
