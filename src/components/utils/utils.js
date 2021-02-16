import qs from 'query-string';

export function getQueryParam(name, defaultValue) {
    const params = qs.parse(window.location.search);
    return params[name] || defaultValue;
}

export function updateQueryParam(name, value) {
    const params = qs.parse(window.location.search);
    params[name] = value;
    const paramsString = qs.stringify(params);
    const url = `${window.location.pathname}?${paramsString}`;

    window.history.pushState(null, null, url);
}