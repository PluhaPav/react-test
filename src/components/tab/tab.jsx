/* eslint-disable react/prop-types */
import React from "react";
import "./tab.scss";
import Programm from "../programm/programm";

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
            {list.map((element, index) => (
                <TabListItem key={ index.toString() } item={ element } />
            ))}
        </div>
    );
}

function TabListItem(props) {
    const {
        item: { description, program, poster, title }
    } = props;
    let classItem = !description ? " static" : "";
    classItem += program ? " line" : "";

    return (
        <div className={ "tab-list__item" + classItem }>
            <div className={ `tab-list__item-img ${classItem}` }>
                <img src={ poster } alt={ title } />
                {description && (
                    <div className='tab-list__item-description'>
                        <div className='inner'>{description}</div>
                    </div>
                )}
            </div>
            <div className={ `tab-list__item-title ${classItem}` }>
                {title}
                <Programm prog={ program } />
            </div>
        </div>
    );
}
