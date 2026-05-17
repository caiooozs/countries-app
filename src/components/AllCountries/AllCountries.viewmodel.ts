import useCountries from "@/src/features/countries/queries/useCountries";
import { useState, useMemo } from "react";
import useCountryBySubregion from "@/src/features/countries/queries/useCountryBySubregion";

const useAllCountriesViewModel = () => {
  const [selectedSubregion, setSelectedSubregion] = useState("all");
  const [search, setSearch] = useState("");

  const { allCountries } = useCountries();
  const { countriesByRegion } = useCountryBySubregion(selectedSubregion);

  const subregionOptions = useMemo(() => {
    return [
      ...new Set(allCountries?.map((c) => c.subregion).filter(Boolean)),
    ].sort() as string[];
  }, [allCountries]);

  const baseCountries =
    selectedSubregion === "all" ? allCountries : countriesByRegion;

  const countries = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return baseCountries;

    return baseCountries?.filter((country) => {
      const name = country.name.common.toLowerCase();
      const official = country.name.official.toLowerCase();
      const capital = country.capital?.[0]?.toLowerCase() ?? "";
      return (
        name.includes(term) || official.includes(term) || capital.includes(term)
      );
    });
  }, [search, baseCountries]);

  return {
    selectedSubregion,
    setSelectedSubregion,
    subregionOptions,
    baseCountries,
    search,
    setSearch,
    countries,
  };
};

export default useAllCountriesViewModel;
