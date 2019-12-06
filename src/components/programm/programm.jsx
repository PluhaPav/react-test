/* eslint-disable react/prop-types */
import React from "react";
import "./programm.scss";

function filterProgrammFunc(prog, count, time, index = 0) {
    let visible = false;
    if (index < count && count !== 0 && prog) {
        let timeNext = prog[index + 1].time;
        const currentDate = new Date();
        const currentTime = currentDate.setHours(currentDate.getHours(), currentDate.getMinutes());
        const splitTime = time.split(":");
        const splitTimeNext = timeNext.split(":");
        const selectedTime = currentDate.setHours(+splitTime[0], +splitTime[1]);
        const selectedTimenext = currentDate.setHours(+splitTimeNext[0], +splitTimeNext[1]);
        visible = currentTime <= selectedTime || currentTime < selectedTimenext;
    } else {
        visible = true;
    }
    return visible;
}
export default class Programm extends React.PureComponent {
    render() {
        const { prog } = this.props;
        const count = prog ? prog.length - 1 : 0;
        let countVisible = 0;
        return (
            prog !== undefined && (
                <div className='programm'>
                    <ul className='programm-list'>
                        {prog.map(({ time, title }, index) => {
                            const filterProgramm = filterProgrammFunc(prog, count, time, index);
                            countVisible += filterProgramm ? 1 : 0;
                            return (
                                filterProgramm &&
                                countVisible <= 3 && (
                                    <li className={ `programm-list__item ${filterProgramm && countVisible <= 1 ? "active" : ""}` } key={ `programm-${index.toString()}` }>
                                        <div className='time'>{time}</div>
                                        <div className='title'>{title}</div>
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
