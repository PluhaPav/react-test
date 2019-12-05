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
    }

    componentDidMount() {
        this.animateTabs();
    }

    handleClickTabs = event => {
        const indexTab = event.target.tabIndex;
        let tab = null;
        const tabs = document.querySelectorAll(".tabs-main__tab");
        const tabTitle = document.querySelectorAll(".tabs-title__list-item");

        tabs.forEach((element, index) => {
            tabTitle[index].classList.remove("tabs-title__list-item--active");
            element.classList.remove("tabs-main__tab--active");
            parseInt(element.attributes.tabIndex.value, 10) === indexTab ? (tab = element) : null;
        });
        tabTitle[indexTab].classList.add("tabs-title__list-item--active");
        if (tab) {
            tab.classList.add("tabs-main__tab--active");
        }

        this.animateTabs(indexTab);
    };

    animateTabs = (indexTab = 0) => {
        const tabs = document.querySelectorAll(".tabs-main__tab");
        let indexActive = 0;
        tabs.forEach((element, index) => {
            indexActive = element.classList.contains("tabs-title__list-item--active") ? index : 0;
            element.style.transform = `translateX(${100 * index}%)`;
        });

        if (indexActive < indexTab) {
            tabs[indexActive].style.transform = `translateX(${-100 * indexTab}%)`;
            tabs[indexTab].style.transform = `translateX(0%)`;
        } else if (indexActive > indexTab) {
            tabs[indexActive].style.transform = `translateX(${100 * indexTab}%)`;
            tabs[indexTab].style.transform = `translateX(0%)`;
        }
    };

    render() {
        const { list = [] } = this.props;
        return (
            <div className='tabs'>
                <div className='tabs-title'>
                    <ul className='tabs-title__list'>
                        {list.map((element, index) => (
                            <li key={ `title__list-item${index.toString()}` } className={ `tabs-title__list-item ${element.class} ${index === 0 ? "tabs-title__list-item--active" : ""}` } tabIndex={ index } onClick={ this.handleClickTabs } onKeyPress={ this.handleClickTabs }>
                                {element.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='tabs-main'>
                    {list.map((element, index) => (
                        <div key={ `main__tab${index.toString()}` } tabIndex={ index } className={ `tabs-main__tab ${element.class} ${index === 0 ? "tabs-main__tab--active" : ""}` }>
                            <Tab list={ element[element.class] } type={ element.class } />
                        </div>
                    ))}
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
