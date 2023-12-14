import axios from "axios";

const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const addPerson = person => {
  const request = axios.post(baseUrl, person);
  return request
    .then(response => response.data)
}

const updatePerson = person => {
  const request = axios.put(`${baseUrl}/${person.id}`, person);
  return request.then(response => response.data);
}

const deletePerson = personId => {
  const request = axios.delete(`${baseUrl}/${personId}`);
  return request.then(response => response.data);
}

export default {
  getAll,
  addPerson,
  updatePerson,
  deletePerson,
}