/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import "./tab.scss";

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            type: props.type
        };
    }

    render() {
        const { list, type } = this.state;
        return list.map(element => (
            <div className='tab'>
                <div className='tab-title'>
                    <h2>{element.title}</h2>
                </div>
                <TabList type={ type } list={ element.list } />
            </div>
        ));
    }
}

function TabList(props) {
    return (
        <div className={ "tab-list " + props.type }>
            {props.list.map(element => (
                <TabListItem item={ element } />
            ))}
        </div>
    );
}

function TabListItem(props) {
    let classItem = props.item.description === undefined ? " static" : "";
    classItem += props.item.program !== undefined ? " line" : "";

    return (
        <div className={ "tab-list__item" + classItem }>
            <div className={ props.item.description === undefined ? "tab-list__item-img static" : "tab-list__item-img" }>
                <img src={ props.item.poster } alt={ props.item.title } />
                { props.item.description !== undefined && (
                    <div className='tab-list__item-description'>
                        <div className='inner'>{props.item.description}</div>
                    </div>
                )}
            </div>
            <div className={ props.item.description === undefined ? "tab-list__item-title static" : "tab-list__item-title" }>{props.item.title}</div>
        </div>
    );
}
