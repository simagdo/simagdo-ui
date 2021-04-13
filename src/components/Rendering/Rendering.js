import React, {createElement} from "react";
import PropTypes from 'prop-types';
import Collapse from "../output/Collapse/Collapse";
import Button from "../input/Button/Button";
import Paragraph from "../output/Paragraph/Paragraph";

const KeysToComponentMap = {
    Collapse: Collapse,
    Button: Button,
    Paragraph: Paragraph
}

const Rendering = (props) => {

    const {children} = props;

    const renderChildren = (child) => {
        if (typeof KeysToComponentMap[child.component] !== 'undefined') {
            return createElement(
                KeysToComponentMap[child.component],
                child.props,
                child.children &&
                (typeof child.children === 'string'
                    ? child.children
                    : child.children.map(nestedChild => renderChildren(nestedChild)))
            )
        }
    }

    return (
        <div>
            {children.map((child) => renderChildren(child))}
        </div>
    );

}

Rendering.propTypes = {
    children: PropTypes.array.isRequired
};

export default Rendering;