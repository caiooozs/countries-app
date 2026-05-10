import { api } from "@/lib/api";

export async function getAllCountries() {
  const response = await api.get("/v3.1/all?fields=name,flags");
  return response.data;
}

export async function getCountryByName(name: string) {
  const response = await api.get(`/v3.1/name/${name}`);
  return response.data[0];
}
