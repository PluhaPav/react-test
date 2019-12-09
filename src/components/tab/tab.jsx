/* eslint-disable react/prop-types */
import React from "react";
import "./tab.scss";
import TabListItem from "../tab-list-item/tab-list-item";

export default class Tab extends React.PureComponent {
    render() {
        const { list, type } = this.props;
        let delay;
        return list.map((element, index) => {
            delay = 0;
            return (
                <div key={ String("tabList" + index) } className='tab'>
                    <div className='tab__title'>
                        <h2>{element.title}</h2>
                    </div>
                    <div className={ "tab-list " + type }>
                        {element.list.map((item, index) => {
                            delay += 0.2;
                            return <TabListItem key={ index.toString() } item={ item } animation={ delay } />;
                        })}
                    </div>
                </div>
            );
        });
    }
}
