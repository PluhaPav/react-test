import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import Header from "../../header/header";
import Tabs from "../../tabs/tabs";

// import { changePropB } from "../../../actions";

import "./page-main.scss";

class PageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorization: props.authorization,
            onCkickInOut: props.onCkickInOut
        };
    }

    // handleClick = () => {
    //     this.props.changePropB && this.props.changePropB(12);
    // };

    render() {
        const { authorization, onCkickInOut } = this.state;
        // const { prop } = this.props;

        return (
            <div className='container'>
                <Header authorization={ authorization } onCkickInOut={ onCkickInOut } />
                {/* <p>{prop}</p>
                <button onClick={ this.handleClick }>click</button> */}
                <Tabs />
            </div>
        );
    }
}
PageMain.propTypes = {
    authorization: PropTypes.bool,
    onCkickInOut: PropTypes.func
};

// const mapStateToProps = state => ({ prop: state.app.propB });
// const mapDispatchToProps = { changePropB };

// export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
