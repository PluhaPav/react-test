import React from "react";
import PropTypes from "prop-types";
import InOut from "../in-out/in-out";
import Search from "../search/search";
import "./header.scss";

export default class Header extends React.PureComponent {
    render() {
        const { authorization, onCkickInOut } = this.props;
        return (
            <div className='header'>
                <div className='header__logo'>Видеосервис</div>
                <div className='header__search'>
                    <Search />
                </div>
                <div className='header__in-out'>
                    <InOut authorization={ authorization } onCkickInOut={ onCkickInOut } />
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    authorization: PropTypes.bool,
    onCkickInOut: PropTypes.func
};
