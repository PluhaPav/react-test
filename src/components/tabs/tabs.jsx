import React from "react";
import "./tabs.scss";
import Tab from "../tab/tab";
import { list } from "../../assets/list/listGenreMovie";

export default class Tabs extends React.Component {
    constructor() {
        super();
        this.state = { list };
    }

    render() {
        const { list } = this.state;
        return list.map((element) => (
            <div className={ element.class }>
                <Tab list={ element[element.class] } type={ element.class } />
            </div>
        ));
    }
}
