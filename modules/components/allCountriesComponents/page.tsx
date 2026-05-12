"use client";
import { Input } from "@/components/ui/input";
import useCountries from "@/hook/useCountries";
import useCountryBySubregion from "@/hook/useCountryBySubregion";
import CountryCard from "@/modules/components/CountriesCard/card-view";
import { useMemo, useState } from "react";
import SelectFilter from "./SelectFilter";

const AllCountriesPage = () => {
  const [selectedSubregion, setSelectedSubregio] = useState("all");

  const { data: allCountries = [] } = useCountries();
  const { data: filteredBySubregion = [] } =
    useCountryBySubregion(selectedSubregion);

  const subregionOptions = useMemo(() => {
    return [
      ...new Set(allCountries.map((c) => c.subregion).filter(Boolean)),
    ].sort() as string[];
  }, [allCountries]);

  const countriesToRender =
    selectedSubregion === "all" ? allCountries : filteredBySubregion;

  return (
    <>
      <div className="flex justify-center items-center h-24 border-b">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-xl">FindYourCountry</span>
        </a>
      </div>
      <div className="flex justify-center gap-12 p-6">
        <div>
          <Input placeholder="Pesquise seu país aqui" className="w-96" />
        </div>
        <div>
          <SelectFilter
            onChange={setSelectedSubregio}
            options={subregionOptions}
            value={selectedSubregion}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6">
        {countriesToRender.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </>
  );
};
export default AllCountriesPage;
