import { useQuery } from "@tanstack/react-query";
import { getCountryByName } from "@/services/contries.service";

export default async function useCountry(name: string) {
  return useQuery({
    queryKey: ["country", name],
    queryFn: () => getCountryByName(name),
    enabled: !!name,
  });
}
