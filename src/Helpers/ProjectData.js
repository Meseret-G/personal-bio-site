import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getProjects;
