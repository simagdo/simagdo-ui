import React from 'react';
import PropTypes from 'prop-types';
import LayoutColumn from "./LayoutColumn/LayoutColumn";
import './Layout.sass';
import LayoutRow from "./LayoutRow/LayoutRow";

const Layout = (props) => {
    const {children, record, object} = props;

    return (
        <div
            className="Layout-Row--Wrapper">

            {children.map((column, index) => {
                return (
                    <LayoutRow key={`Layout-Row-${index}`}>
                        {column.Fields.map((row, index) => {
                            console.log(row.Field.charAt(0).toUpperCase() + row.Field.slice(1))
                            console.log(object.find(obj => obj.apiName === row.Field.charAt(0).toUpperCase() + row.Field.slice(1)))
                            console.log(object.length)
                            return (
                                <LayoutColumn
                                    key={`Layout-Column-${index}`}
                                    label={object.length === 0 ? row.Field : object.find(obj => obj.apiName === row.Field.charAt(0).toUpperCase() + row.Field.slice(1)).name}
                                    value={record[row.Field]}/>
                            );
                        })}
                    </LayoutRow>
                );
            })}
        </div>
    );

}

Layout.propTypes = {
    children: PropTypes.array.isRequired,
    record: PropTypes.object.isRequired,
    object: PropTypes.array.isRequired
}

export default Layout;