import { useQuery } from "@tanstack/react-query";
import { getCountryBySubregion } from "@/services/contries.service";

export default function useCountryBySubregion(subregion: string) {
  return useQuery({
    queryKey: ["country", subregion],
    queryFn: () => getCountryBySubregion(subregion),
    enabled: !!subregion && subregion !== "all",
  });
}
