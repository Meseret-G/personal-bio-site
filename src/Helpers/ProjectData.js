import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const createProject = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, obj).then((response) => {
    const firebaseKey = response.data.name;
    axios
      .patch(`${dbUrl}/projects/${firebaseKey}.json`, { firebaseKey })
      .then(() => {
        getProjects().then(resolve);
      })
      .catch(reject);
  });
});

const updateProject = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/projects/${obj.firebaseKey}.json`, obj)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getAllTech = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export {
  getProjects,
  deleteProject,
  createProject,
  updateProject,
  getSingleProject,
  getAllTech,
};
