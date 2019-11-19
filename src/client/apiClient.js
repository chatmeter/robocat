import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000"
});

export async function getHealth() {
  const healthResponse = await apiClient.get("/health");
  return healthResponse.data;
}

export async function getWebsiteResults(website) {
  return (await apiClient.post("/findfriends", {
    website: website
  })).data;
}
