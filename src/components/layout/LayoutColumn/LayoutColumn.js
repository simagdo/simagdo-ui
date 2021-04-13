import React from "react";
import PropTypes from 'prop-types';
import './LayoutColumn.sass';
import Label from "../../output/Label/Label";

const LayoutColumn = (props) => {
    const {label, value} = props;

    return (
        <div className="Layout-Column">
            <div className="Layout-Column--Label">
                <Label text={label}/>
            </div>
            <div className="Layout-Column--Value">
                <Label text={value}/>
            </div>
        </div>
    );

}

LayoutColumn.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default LayoutColumn;