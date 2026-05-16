import useCountries from "@/hook/useCountries";
import { useState, useMemo } from "react";
import useCountryBySubregion from "@/hook/useCountryBySubregion";

const AllCountriesViewModel = () => {
  const [selectedSubregion, setSelectedSubregion] = useState("all");
  const [search, setSearch] = useState("");

  const { data: allCountries = [] } = useCountries();
  const { data: filteredBySubregion = [] } =
    useCountryBySubregion(selectedSubregion);

  const subregionOptions = useMemo(() => {
    return [
      ...new Set(allCountries.map((c) => c.subregion).filter(Boolean)),
    ].sort() as string[];
  }, [allCountries]);

  const baseCountries =
    selectedSubregion === "all" ? allCountries : filteredBySubregion;

  const countries = useMemo(() => {}, [baseCountries, search]);
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

export default AllCountriesViewModel;
