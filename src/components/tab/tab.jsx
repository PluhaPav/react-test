/* eslint-disable react/prop-types */
import React from "react";
import "./tab.scss";

export default class Tab extends React.Component {
    render() {
        const { list, type } = this.props;
        return list.map((element, index) => (
            <div key={ String("tabList" + index) } className='tab'>
                <div className='tab-title'>
                    <h2>{element.title}</h2>
                </div>
                <TabList type={ type } list={ element.list } />
            </div>
        ));
    }
}

function TabList(props) {
    const { type, list } = props;
    return (
        <div className={ "tab-list " + type }>
            {list.map(element => (
                <TabListItem key={ `item ${element.id}` } item={ element } />
            ))}
        </div>
    );
}

function TabListItem(props) {
    const { item } = props;
    let classItem = item.description === undefined ? " static" : "";
    classItem += item.program !== undefined ? " line" : "";

    return (
        <div className={ "tab-list__item" + classItem }>
            <div className={ item.description === undefined ? "tab-list__item-img static" : "tab-list__item-img" }>
                <img src={ item.poster } alt={ item.title } />
                {item.description !== undefined && (
                    <div className='tab-list__item-description'>
                        <div className='inner'>{item.description}</div>
                    </div>
                )}
            </div>
            <div className={ item.description === undefined ? "tab-list__item-title static" : "tab-list__item-title" }>{item.title}</div>
        </div>
    );
}
