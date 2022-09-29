import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/Brunotorresdev/repos';

export const api = {
    getListRepos: async () => {
        const response = await axios.get(BASE_URL);
        return response;
    },
};
