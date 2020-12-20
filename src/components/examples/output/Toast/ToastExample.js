import React, {useState} from "react";
import './ToastExample.sass';
import checkIcon from "../../../../assets/check.svg";
import errorIcon from "../../../../assets/error.svg";
import infoIcon from "../../../../assets/info.svg";
import warningIcon from "../../../../assets/warning.svg";
import Button from "../../../input/Button/Button";
import Toast from "../../../output/Toast/Toast";

const BUTTON_PROPS = [
    {
        id: 1,
        type: 'success',
        className: 'Success',
        label: 'Success'
    },
    {
        id: 2,
        type: 'danger',
        className: 'Danger',
        label: 'Danger'
    },
    {
        id: 3,
        type: 'info',
        className: 'Info',
        label: 'Info'
    },
    {
        id: 4,
        type: 'warning',
        className: 'Warning',
        label: 'Warning'
    },
];

function ToastExample() {
    const [list, setList] = useState([]);
    const [position, setPosition] = useState('Select Position');
    let [checkValue, setCheckValue] = useState(false);
    const [autoDeleteTime, setAutoDeleteTime] = useState(0);
    let toastProperties = null;

    const selectPosition = (e) => {
        setPosition(e.target.value);
        setList([]);
    }

    const showToast = type => {
        const id = Math.floor((Math.random() * 101) + 1);

        switch (type) {
            case 'success':
                toastProperties = {
                    id,
                    title: 'Success',
                    description: 'This is a success toast component',
                    backgroundColor: '#5cb85c',
                    icon: checkIcon
                }
                break;
            case 'danger':
                toastProperties = {
                    id,
                    title: 'Danger',
                    description: 'This is a error toast component',
                    backgroundColor: '#d9534f',
                    icon: errorIcon
                }
                break;
            case 'info':
                toastProperties = {
                    id,
                    title: 'Info',
                    description: 'This is an info toast component',
                    backgroundColor: '#5bc0de',
                    icon: infoIcon
                }
                break;
            case 'warning':
                toastProperties = {
                    id,
                    title: 'Warning',
                    description: 'This is a warning toast component',
                    backgroundColor: '#f0ad4e',
                    icon: warningIcon
                }
                break;

            default:
                setList([]);
        }

        setList([...list, toastProperties]);
    }

    const onCheckBoxChange = () => {
        checkValue = !checkValue;
        setCheckValue(checkValue);
        setList([]);
    }

    const onInputChange = (e) => {
        const time = parseInt(e.target.value, 10);
        setAutoDeleteTime(time);
    }

    return (
        <div className="Toast-Example">
            <div className="Toast-Header">
                <p>React Toast Component</p>
                <div className="Toast-Buttons">
                    {
                        BUTTON_PROPS.map(e =>
                            <Button
                                key={e.id}
                                className={`${position === 'Select Position' ? `${e.className} Btn-Disable` : `${e.className}`}`}
                                label={e.label}
                                handleClick={() => showToast(e.type)}
                            />
                        )
                    }
                </div>

                <div className="Select">
                    <input
                        id="auto"
                        type="checkbox"
                        name="checkbox"
                        value={checkValue}
                        onChange={onCheckBoxChange}/>
                    <label htmlFor="auto">Auto Dismiss</label>
                </div>
                <div className="Select">
                    <input
                        className={`${!checkValue ? 'disabled' : ''}`}
                        type="text"
                        name="checkbox"
                        placeholder="Dismiss time Ex: 3000"
                        autoComplete="false"
                        onChange={onInputChange}/>
                </div>
                <div className="Select">
                    <select
                        name="position"
                        value={position}
                        onChange={selectPosition}
                        className="Position-Select">
                        <option>Select Position</option>
                        <option value="top-right">Top Right</option>
                        <option value="top-left">Top Left</option>
                        <option value="bottom-left">Bottom Left</option>
                        <option value="bottom-right">Bottom Right</option>
                    </select>
                </div>
            </div>

            <Toast
                toastList={list}
                position={position}
                autoDelete={checkValue}
                autoDeleteTime={autoDeleteTime}
            />
        </div>
    );
}

export default ToastExample;