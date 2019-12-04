/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from "react";
import "./tabs.scss";
import Tab from "../tab/tab";
import { list } from "../../assets/list/listGenreMovie";

export default class Tabs extends React.Component {
    constructor() {
        super();
        this.state = { list };
    }

    handleClickTabs = event => {
        const indexTab = event.target.tabIndex;
        let tab = null;
        const tabs = document.querySelectorAll(".tabs-main__tab");
        const tabTitle = document.querySelectorAll(".tabs-title__list-item");

        tabs.forEach((element, index) => {
            tabTitle[index].classList.remove("tabs-title__list-item--active");
            element.classList.remove("tabs-main__tab--active");
            parseInt(element.attributes.tabIndex.value, 10) === indexTab ? (tab = element) : null;
        });
        tabTitle[indexTab].classList.add("tabs-title__list-item--active");
        if (tab) {
            tab.classList.add("tabs-main__tab--active");
        }
    };

    render() {
        const { list } = this.state;
        return (
            <div className='tabs'>
                <div className='tabs-title'>
                    <ul className='tabs-title__list'>
                        {list.map((element, index) => (
                            <li key={ index.toString() } className={ `tabs-title__list-item ${element.class} ${index === 0 ? "tabs-title__list-item--active" : ""}` } tabIndex={ index } role='menuitem' onClick={ this.handleClickTabs } onKeyPress={ this.handleClickTabs }>
                                {element.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='tabs-main'>
                    {list.map((element, index) => (
                        <div key={ index.toString() } tabIndex={ index } className={ `tabs-main__tab ${element.class} ${index === 0 ? "tabs-main__tab--active" : ""}` }>
                            <Tab list={ element[element.class] } type={ element.class } />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
