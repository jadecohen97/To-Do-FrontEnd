import axios from "axios";
const BaseUrl = "http://localhost:8080";

export async function addToDo(toDo) {
  const response = await axios.post(`${BaseUrl}`, {
    text: toDo,
  });
  return response.data;
}

export async function getAllToDos() {
  const response = await axios.get(`${BaseUrl}`);
  return response.data;
}

export async function removeToDo(id) {
  const response = await axios.delete(`${BaseUrl}/${id}`);
  console.log(response.data);
  return response.data;
}

export async function updateCompleted(id) {
  const response = await axios.put(`${BaseUrl}/${id}`);
  return response.data;
}
