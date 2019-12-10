/* eslint-disable react/prop-types */
import React from "react";
import "./tab.scss";
import TabListItem from "../tab-list-item/tab-list-item";

export default class Tab extends React.PureComponent {
    render() {
        const { list, type, indexActiveElement, indexTab } = this.props;
        let delay = 0;
        let duration = 1;
        return list.map((element, index) => (
            <div key={ String("tabList" + index) } className='tab'>
                <div className='tab__title'>
                    <h2>{element.title}</h2>
                </div>
                <div className={ "tab-list " + type }>
                    {element.list.map((item, index) => {
                        duration = delay === 1 ? (duration += 1) : duration;
                        delay += 0.2;
                        return <TabListItem key={ index.toString() } item={ item } indexActiveElement={ indexActiveElement } indexTab={ indexTab } animation={ indexTab === 0 ? duration - delay : delay } />;
                    })}
                </div>
            </div>
        ));
    }
}
