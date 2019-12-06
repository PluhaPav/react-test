/* eslint-disable react/prop-types */
import React from "react";
import "./tab.scss";
import TabListItem from "../tab-list-item/tab-list-item";

export default class Tab extends React.PureComponent {
    render() {
        const { list, type } = this.props;
        return list.map((element, index) => (
            <div key={ String("tabList" + index) } className='tab'>
                <div className='tab-title'>
                    <h2>{element.title}</h2>
                </div>
                <div className={ "tab-list " + type }>
                    {element.list.map((item, index) => (
                        <TabListItem key={ index.toString() } item={ item } />
                    ))}
                </div>
            </div>
        ));
    }
}
