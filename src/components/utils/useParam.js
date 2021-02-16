import {useState, useEffect} from "react";
import {getQueryParam, updateQueryParam} from "./utils";

function useParam(paramName, initialValue) {
    const [param, setParam] = useState(() => getQueryParam(paramName, initialValue));

    const updateParam = paramValue => {
        setParam(paramValue);
        updateQueryParam(paramName, paramValue);
    };

    useEffect(() => {
        const handlePopState = () => {
            const paramValue = getQueryParam(paramName, initialValue);
            setParam(paramValue);
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };

    }, [paramName, initialValue]);

    return [param, updateParam];
}

export default useParam;