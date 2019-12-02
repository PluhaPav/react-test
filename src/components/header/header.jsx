import React from "react";
import PropTypes from "prop-types";
import InOut from "../in-out/in-out";
import Search from "../search/search";
import "./header.scss";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authorization: props.authorization };
    }

    render() {
        const { authorization } = this.state;
        return (
            <div className='header'>
                <div className='header__logo'>Видеосервис</div>
                <div className='header__search'>
                    <Search />
                </div>
                <div className='header__in-out'>
                    <InOut authorization={ authorization } />
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    authorization: PropTypes.bool
};
