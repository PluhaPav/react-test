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
        // this.animateTabs();
        // this.animateTabItem();
    }

    handleClickTabs = event => {
        const indexTab = event.target.tabIndex;
        let tab = null;
        const tabs = document.querySelectorAll(".tabs-main__tab");
        const tabTitle = document.querySelectorAll(".tabs__list-item");

        tabs.forEach((element, index) => {
            tabTitle[index].classList.remove("tabs__list-item--active");
            element.classList.remove("tabs-main__tab--active");
            parseInt(element.attributes.tabIndex.value, 10) === indexTab ? (tab = element) : null;
        });
        this.removeAnimate();
        tabTitle[indexTab].classList.add("tabs__list-item--active");
        if (tab) {
            tab.classList.add("tabs-main__tab--active");
        }
        this.animateTabs(indexTab);
        this.animateTabItem(indexTab);
    };

    animateTabs = (indexTab = 0) => {
        const tabs = document.querySelectorAll(".tabs-main__tab");
        let indexActive = 0;
        tabs.forEach((element, index) => {
            indexActive = element.classList.contains("tabs__list-item--active") ? index : 0;
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

    removeAnimate() {
        const item = document.querySelectorAll(".tab-list__item");
        item.forEach(element => {
            element.classList.remove("animate-left");
            element.classList.remove("animate-right");
        });
    }

    animateTabItem(indexTab) {
        const tab = document.querySelector(".tabs-main__tab--active").querySelectorAll(".tab");
        if (tab.length > 1) {
            let delayTab = 0;
            tab.forEach(elementTab => {
                const item = elementTab.querySelectorAll(".tab-list__item");
                this.animateItem(item, 0, delayTab);
                delayTab += 1;
            });
        } else {
            const item = document.querySelector(".tabs-main__tab--active").querySelectorAll(".tab-list__item");
            this.animateItem(item, indexTab);
        }
    }

    animateItem(item, indexTab = 0, delayTab = 0) {
        const classAnimate = indexTab > 0 ? "left" : "right";
        item.forEach(element => {
            const delay = +element.getAttribute("data-animation");
            if (!element.classList.contains(`animate-${classAnimate}`)) {
                element.classList.add(`animate-${classAnimate}`);
            }
            element.style.animationDelay = `${indexTab > 0 ? delay + delayTab : delayTab + 1 - delay}s`;
            element.style.animationDuration = `${1}s`;
            element.style.animationTimingFunction = "ease-in-out";
        });
    }

    render() {
        const { list = [] } = this.props;
        return (
            <div className='tabs'>
                <div className='title'>
                    <ul className='tabs__list'>
                        {list.map((element, index) => (
                            <li key={ `title__list-item${index.toString()}` } className={ `tabs__list-item ${element.class} ${index === 0 ? "tabs__list-item--active" : ""}` } tabIndex={ index } onClick={ this.handleClickTabs } onKeyPress={ this.handleClickTabs }>
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
