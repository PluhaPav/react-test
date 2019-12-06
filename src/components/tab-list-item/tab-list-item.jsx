/* eslint-disable react/prop-types */
import React from "react";
import Programm from "../programm/programm";
import "./tab-list-item.scss";

export default class TabListItem extends React.PureComponent {
    render() {
        const {
            item: { description, program, poster, title }
        } = this.props;
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
}
