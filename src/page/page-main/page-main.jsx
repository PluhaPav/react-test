import React from "react";
import Tabs from "../../components/tabs/tabs";

import "./page-main.scss";

export default class PageMain extends React.Component {
    render() {
        return (
            <div className='container'>
                <Tabs />
            </div>
        );
    }
}
