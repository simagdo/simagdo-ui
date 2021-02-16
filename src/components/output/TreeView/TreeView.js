import React, {useState} from "react";
import './TreeView.sass';
import PropTypes from 'prop-types';

const TreeView = ({
                      data,
                      toggled = true,
                      name = null,
                      isLast = true,
                      isChildElement = false,
                      isParentToggled = true
                  }) => {

    const [isToggled, setIsToggled] = useState(toggled);
    const isDataArray = Array.isArray(data);

    return (
        <div
            className={`Tree-Element ${isParentToggled && 'Collapsed'} ${isChildElement && 'Is-Child'}`}>
            <span
                className={isToggled ? 'Toggler' : 'Toggler Closed'}
                onClick={() => setIsToggled(!isToggled)}/>

            {name ? <strong>&nbsp;&nbsp;{name}:</strong> : <span>&nbsp;&nbsp;</span>}
            {isDataArray ? '[' : '{'}
            {!isToggled && '...'}
            {Object.keys(data).map((v, i, a) =>
                typeof data[v] === 'object' ? (
                    <TreeView
                        key={`${name}-${v}-${i}`}
                        data={data[v]}
                        isLast={i === a.length - 1}
                        name={isDataArray ? null : v}
                        isChildElement
                        isParentToggled={isParentToggled && isToggled}/>
                ) : (
                    <p
                        key={`${name}-${v}-${i}`}
                        className={isToggled ? 'Tree-Element' : 'Tree-Element Collapsed'}>
                        {isDataArray ? '' : <strong>{v}: </strong>}
                        {data[v]}
                        {i === a.length - 1 ? '' : ','}
                    </p>
                ))}

            {isDataArray ? ']' : '}'}
            {!isLast ? ',' : ''}

        </div>
    );

}

export default TreeView;