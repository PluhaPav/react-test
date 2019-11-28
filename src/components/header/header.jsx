import React from "react";
import InOut from "../in-out/in-out";
import Search from "../search/search";
import "./header.scss";

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header__logo'>Видеосервис</div>
                <div className='header__search'>
                    <Search />
                </div>
                <div className='header__in-out'>
                    <InOut />
                </div>
            </div>
        );
    }
}
