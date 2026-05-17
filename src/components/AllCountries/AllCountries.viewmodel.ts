import useCountries from "@/src/Dominio/useCountries/useCountries";
import { useState, useMemo } from "react";
import useCountryBySubregion from "@/src/Dominio/useCountryBySubregion";
import { Country } from "@/src/services/Coutries/types";

const useAllCountriesViewModel = () => {
  const [selectedSubregion, setSelectedSubregion] = useState("all");
  const [search, setSearch] = useState("");

  const { allCountries } = useCountries();
  const { CountriesByRegion } = useCountryBySubregion(selectedSubregion);

  const subregionOptions = useMemo(() => {
    return [
      ...new Set(allCountries?.map((c) => c.subregion).filter(Boolean)),
    ].sort() as string[];
  }, [allCountries]);

  const baseCountries =
    selectedSubregion === "all" ? allCountries : CountriesByRegion;

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
