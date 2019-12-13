/* eslint-disable react/prop-types */
import React from "react";
import Programm from "../programm/programm";
import "./tab-list-item.scss";

export default class TabListItem extends React.PureComponent {
    render() {
        const {
            item: { description, program, poster, title },
            animation,
            indexTab,
            indexActiveElement
        } = this.props;
        const beforeClassAnimate = "tab__list__item--animate-";
        let classItem = !description ? " static" : "";
        classItem += program ? " line" : "";
        let classAnimate = `${indexTab === indexActiveElement ? (indexActiveElement > 0 ? `${beforeClassAnimate}left` : `${beforeClassAnimate}right`) : ""}`;
        return (
            <div className={ `tab__list__item ${classItem} ${classAnimate}` } style={ { "--delay": `${animation}s`, "--duration": "1s" } }>
                <div className={ `tab__list__item__img ${classItem}` }>
                    <img src={ poster } alt={ title } />
                    {description && (
                        <div className='tab__list__item__description'>
                            <div className='inner'>{description}</div>
                        </div>
                    )}
                </div>
                <div className={ `tab__list__item__title ${classItem}` }>
                    {title}
                    <Programm prog={ program } />
                </div>
            </div>
        );
    }
}
