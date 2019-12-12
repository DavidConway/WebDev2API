import axios from 'axios';

export const getAll = () => {
    return axios.get(`/api/data`)
        .then(resp => resp.data);
};

export const Delete = itemID => {
    return axios.delete(`/api/data/${itemID}`)
        .then(resp => resp.data);
};

export const find = itemID => {
    return axios.get(`/api/data/${itemID}`)
        .then(resp => resp.data);
};

export const add = (newImageUrl, newItemName, newOptions) => {
    return axios.post('/api/data', { itemUrl: newImageUrl, itemName: newItemName, options: newOptions })
        .then(resp => resp.data);
};