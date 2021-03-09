import axios from "axios";

export const getItem = (url) => {
    return new Promise(((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    }));
}