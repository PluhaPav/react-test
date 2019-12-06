/* eslint-disable react/prop-types */
import React from "react";
import "./programm.scss";

export default class Programm extends React.Component {
    filterProgramm(prog, count, element, index = 0) {
        let visible = false;
        if (index < count && count !== 0 && prog) {
            let { time } = element;
            let timeNext = prog[index + 1].time;
            const currentDate = new Date();
            const currentTime = currentDate.setHours(currentDate.getHours(), currentDate.getMinutes());
            const splitTime = time.split(":");
            const splitTimeNext = timeNext.split(":");
            const selectedTime = currentDate.setHours(Number.parseInt(splitTime[0], 10), Number.parseInt(splitTime[1], 10));
            const selectedTimenext = currentDate.setHours(Number.parseInt(splitTimeNext[0], 10), Number.parseInt(splitTimeNext[1], 10));
            visible = currentTime <= selectedTime || currentTime < selectedTimenext;
        } else {
            visible = true;
        }
        return visible;
    }

    render() {
        const { prog } = this.props;
        const count = prog ? prog.length - 1 : 0;
        let countVisible = 0;
        return (
            prog !== undefined && (
                <div className='programm'>
                    <ul className='programm-list'>
                        {prog.map((element, index) => {
                            countVisible += this.filterProgramm(prog, count, prog[index], index) ? 1 : 0;
                            return (
                                this.filterProgramm(prog, count, prog[index], index) &&
                                countVisible <= 3 && (
                                    <li className={ `programm-list__item ${this.filterProgramm(prog, count, element, index) && countVisible <= 1 ? "active" : ""}` } key={ `programm-${index.toString()}` }>
                                        <div className='time'>{element.time}</div>
                                        <div className='title'>{element.title}</div>
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </div>
            )
        );
    }
}
