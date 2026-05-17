import { useQuery } from "@tanstack/react-query";
import { CountryServices } from "../services/Coutries/countries.service";

export default function useCountryBySubregion(subregion: string) {
  const { getCountryBySubregion } = CountryServices();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["country", subregion],
    queryFn: () => getCountryBySubregion(subregion),
    enabled: !!subregion && subregion !== "all",
  });

  return {
    CountriesByRegion: data,
    isLoading,
    isError,
  };
}
