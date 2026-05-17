import { api } from "@/src/api/api";
import { Country } from "./types";

export function CountryServices() {
  async function getAllCountries() {
    try {
      const response = await api.get<Country[]>(
        "/v3.1/all?fields=name,flags,population,region,subregion,capital,area,maps,borders,cca3",
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function getCountryBySubregion(subregion: string) {
    try {
      const response = await api.get<Country[]>(`/v3.1/subregion/${subregion}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function getCountryByCode(code: string) {
    try {
      const response = await api.get(`/v3.1/alpha/${code}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  return {
    getAllCountries,
    getCountryByCode,
    getCountryBySubregion,
  };
}
