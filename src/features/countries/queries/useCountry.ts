import { useQuery } from "@tanstack/react-query";
import { CountryServices } from "@/src/services/Countries/countries.service";

export default function useCountry(code: string) {
  const { getCountryByCode } = CountryServices();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["country", code],
    queryFn: () => getCountryByCode(code),
    enabled: !!code,
  });

  return {
    country: data,
    isLoading,
    isError,
  };
}
