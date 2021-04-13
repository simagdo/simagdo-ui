import React, {useRef, useState} from "react";
import PropTypes from 'prop-types';
import Label from "../../output/Label/Label";

const EditableLabel = (props) => {

    const {initialValue, save, disableKeys, inputClass, labelClass, inputName, inputId, label} = props;

    const [view, setView] = useState('label');
    const [value, setValue] = useState(initialValue);
    const [previous, setPrevious] = useState(initialValue);
    const textInput = useRef(null);

    const keyUp = (event) => {
        if (disableKeys === true) return;

        if (event.key === 'Escape') {
            setValue(previous);
            setView('label');
        } else if (event.key === 'Enter') {
            setValue(event.target.value);
            setPrevious(event.target.value);
            setView('label');
            save(event.target.value);
        }

    }

    const renderLabel = () => {
        return (
            <span
                className={labelClass !== undefined ? labelClass : ''}
                onClick={(event) => setView('text')}>
                {value}
            </span>
        );
    }

    const renderInput = () => {
        return (
            <div>
                <input
                    type="text"
                    value={value}
                    ref={textInput}
                    className={inputClass !== undefined ? inputClass : ''}
                    id={inputId !== undefined ? inputId : ''}
                    name={inputName !== undefined ? inputName : ''}
                    onChange={(event) => setValue(event.target.value)}
                    onBlur={(event) => {
                        setView('label');
                        setPrevious(event.target.value);
                        save(event.target.value);
                    }}
                    onKeyUp={keyUp}/>
            </div>
        );
    }

    return (
        <div>
            <Label text={"Welcome"}/>
            {view === 'label' ? renderLabel() : renderInput()}
        </div>
    );

}

EditableLabel.propTypes = {
    initialValue: PropTypes.string.isRequired,
    save: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    labelClass: PropTypes.string,
    inputClass: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string,
    disabledKeys: PropTypes.string
}

export default EditableLabel;