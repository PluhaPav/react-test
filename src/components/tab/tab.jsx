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
    let classItem = description === undefined ? " static" : "";
    classItem += program !== undefined ? " line" : "";

    return (
        <div className={ "tab-list__item" + classItem }>
            <div className={ description === undefined ? "tab-list__item-img static" : "tab-list__item-img" }>
                <img src={ poster } alt={ title } />
                {description !== undefined && (
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
function Programm(props) {
    const { prog } = props;
    return (
        prog !== undefined && (
            <div className='program'>
                <ul className='programm-list'>
                    {prog.map((element, index) => (
                        <li className='programm-list__item ' key={ `programm${index.toString()}` }>
                            <div className='time'>{element.time}</div>
                            <div className='title'>{element.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
}
