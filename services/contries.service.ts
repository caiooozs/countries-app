import { api } from "@/lib/api";
import { Country } from "@/types/types";

export async function getAllCountries() {
  const response = await api.get<Country[]>(
    "/v3.1/all?fields=name,flags,population,region,subregion,capital,area,maps,borders"
  );
  return response.data;
}

export async function getCountryByName(name: string) {
  const response = await api.get(`/v3.1/name/${name}`);
  return response.data[0];
}
