/* eslint-disable react/prop-types */
import React from "react";
import "./programm.scss";

export default class Programm extends React.Component {
    render() {
        const { prog } = this.props;
        return (
            prog !== undefined && (
                <div className='programm'>
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
}
