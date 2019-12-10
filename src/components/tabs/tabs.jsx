import React from "react";
import "./tabs.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tab from "../tab/tab";
import { actionCreatorApi } from "../../actions/api-action";

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        props.actionCreatorApi();
        this.state = {
            indexActive: 0
        };
    }

    handleClickTabs = event => {
        const indexTab = +event.target.getAttribute("data-index");
        const tabTitle = document.querySelectorAll(".tabs__list-item");
        const tabs = document.querySelectorAll(".tabs-main__tab");
        this.setState({ indexActive: indexTab }, () => {
            this.animateTabs(tabs, tabTitle);
        });
    };

    animateTabs = (tabs, tabTitle) => {
        const { indexActive } = this.state;
        tabs[indexActive].classList.add("tabs-main__tab--active");
        tabTitle[indexActive].classList.add("tabs__list-item--active");
    };

    render() {
        const { list = [] } = this.props;
        const { indexActive } = this.state;
        return (
            <div className='tabs'>
                <div className='title'>
                    <ul className='tabs__list'>
                        {list.map((element, index) => (
                            <li
                                key={ `title__list-item${index.toString()}` }
                                className={ `tabs__list-item ${element.class} 
                                ${index === indexActive ? "tabs__list-item--active" : ""}` }
                                data-index={ index }
                                onClick={ this.handleClickTabs }
                                onKeyPress={ this.handleClickTabs }
                            >
                                {element.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='tabs-main'>
                    {list.map((element, index) => {
                        let diraction = index === 0 ? -1 : 1;
                        return (
                            <div 
                                key={ `main__tab${index.toString()}` } 
                                data-index={ index } 
                                className={ `tabs-main__tab ${element.class} ${index === indexActive ? "tabs-main__tab--active" : ""}` } 
                                style={ { "--translate": `${100 * diraction}%` } }
                            >
                                <Tab 
                                    list={ element[element.class] } 
                                    type={ element.class } 
                                    indexActiveElement={ indexActive } 
                                    indexTab={ index } 
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    list: PropTypes.array,
    actionCreatorApi: PropTypes.func.isRequired
};

const mapStateToProps = ({ api: { list } }) => ({ list });
const mapDispatchToProps = { actionCreatorApi };

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
