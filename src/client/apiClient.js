import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000"
});

export async function getHealth() {
  const healthResponse = await apiClient.get("/health");
  return healthResponse.data;
}
