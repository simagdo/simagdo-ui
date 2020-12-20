import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Toast.sass';

const Toast = props => {
    const {toastList, position, autoDelete, autoDeleteTime} = props;
    const [list, setList] = useState(toastList);

    console.log(props);

    useEffect(() => {
        setList([...toastList]);

        // eslint-disable-next-line
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, autoDeleteTime);

        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [toastList, autoDelete, autoDeleteTime, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    return (
        <>
            <div className={`Notification-Container ${position}`}>
                {
                    list.map((toast, i) =>
                        <div
                            key={i}
                            className={`Notification Toast ${position}`}
                            style={{backgroundColor: toast.backgroundColor}}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            <div className="Notification-Image">
                                <img src={toast.icon} alt=""/>
                            </div>
                            <div>
                                <p className="Notification-Title">{toast.title}</p>
                                <p className="Notification-Message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    dismissTime: PropTypes.number
}

export default Toast;