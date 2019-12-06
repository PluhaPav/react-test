import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InOut from "../in-out/in-out";
import Search from "../search/search";
import { actionCreatorAuthorization } from "../../actions/authorization-action";
import "./header.scss";

class Header extends React.PureComponent {
    render() {
        const { authorization, onCkickInOut } = this.props;
        return (
            <header className='header'>
                <div className='header-container container'>
                    <div className='header__logo'>Видеосервис</div>
                    <div className='header__search'>
                        <Search />
                    </div>
                    <div className='header__in-out'>
                        <InOut authorization={ authorization } onCkickInOut={ onCkickInOut } />
                    </div>
                </div>
            </header>
        );
    }
}
Header.propTypes = {
    authorization: PropTypes.bool,
    onCkickInOut: PropTypes.func
};

const mapStateToProps = state => ({ authorization: state.authorization.authorization });
const mapDispatchToProps = { actionCreatorAuthorization };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
