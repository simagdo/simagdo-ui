import React, {useState} from "react";
import PropTypes from 'prop-types';
import './Collapse.sass';

const Collapse = ({collapsed, children}) => {

    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return (
        <div className="Collapse">
            <button
                className={`Collapse-Button ${isCollapsed ? 'Collapsed' : 'Expanded'}`}
                onClick={() => {
                    setIsCollapsed(!isCollapsed)
                }}>
                {isCollapsed ? 'Show' : 'Hide'} General Information
            </button>
            <div
                className={`Collapse-Content ${isCollapsed ? 'Collapsed' : 'Expanded'}`}
                aria-expanded={isCollapsed}>
                {children}
            </div>
        </div>
    );

}

Collapse.propTypes = {
    collapsed: PropTypes.bool,
    children: PropTypes.object.isRequired
};

export default Collapse;