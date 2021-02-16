import React, {useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import TabButton from "./TabButton/TabButton";
import TabPanel from "./TabPanel/TabPanel";
import './Tabs.sass';

const Tabs = (props) => {
    const {selected, onSelect, children} = props;
    const tabButtonsRef = useRef();
    const tabIndicatorRef = useRef();
    const tabPanelsRef = useRef();
    const tabTrackerRef = useRef();

    const buttons = children.map((child) => {
        const {id} = child.props;
        const isSelected = selected === id;
        const handleClick = () => onSelect(id);

        return (
            <TabButton
                id={id}
                selected={isSelected}
                onClick={handleClick}>
                {child.props.label}
            </TabButton>
        );
    });

    function updateTabIndicator(tabButtons, tabIndicator, selected) {
        const tabButton = tabButtons.querySelector(`[data-id="${selected}"]`);
        const tabButtonsPos = tabButtons.getBoundingClientRect();
        const tabButtonPos = tabButtons.getBoundingClientRect();
        const left = tabButtonPos.left - tabButtonsPos.left;
        const width = tabButton.clientWidth;
        tabIndicator.style.width = `${width}px`;
        tabIndicator.left = `${left}px`;
    }

    function updateTabTrackerWidth(tabPanels, tabTracker, count) {
        const width = tabPanels.clientWidth * count;
        tabTracker.style.width = `${width}px`;
    }

    function updateTabTrackerPosition(tabPanels, tabTracker, selected) {
        const tabPanel = tabTracker.querySelector(`[data-id="${selected}"]`);
        const index = Array.prototype.indexOf.call(tabTracker.children, tabPanel);
        const x = tabPanels.clientWidth * -index;
        tabTracker.style.transform = `translateX(${x}px)`;
    }

    const panels = children.map((child) => {
        const id = child.props.id;
        const isSelected = selected === id;

        return (
            <TabPanel
                id={id}
                selected={isSelected}>
                {child.props.children}
            </TabPanel>
        );
    });

    useEffect(() => {
        updateTabIndicator(
            tabButtonsRef.current,
            tabIndicatorRef.current,
            selected
        );
        updateTabTrackerPosition(
            tabPanelsRef.current,
            tabTrackerRef.current,
            selected
        );
    }, [selected]);

    useEffect(() => {
        updateTabTrackerWidth(
            tabPanelsRef.current,
            tabTrackerRef.current,
            panels.length
        );
    }, [panels.length]);

    useEffect(() => {
        const handleResize = () => {
            updateTabIndicator(
                tabButtonsRef.current,
                tabIndicatorRef.current,
                selected
            );
            updateTabTrackerWidth(
                tabPanelsRef.current,
                tabTrackerRef.current,
                panels.length
            );
            updateTabTrackerPosition(
                tabPanelsRef.current,
                tabTrackerRef.current,
                selected
            );
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [selected, panels.length]);

    return (
        <div className="Tabs">
            <div className="Tabs--Buttons" ref={tabButtonsRef}>
                {buttons}
                <span className="Tab-Indicator" ref={tabIndicatorRef}/>
            </div>
            <div className="Tabs--Panels" ref={tabPanelsRef}>
                <div className="Tabs--Tracker" ref={tabTrackerRef}>
                    {panels}
                </div>
            </div>
        </div>
    );

}

Tabs.propsTypes = {
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Tabs;
