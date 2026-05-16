"use client";
import { Input } from "@/components/ui/input";
import CountryCard from "@/modules/components/CountriesCard/card-view";
import SelectFilter from "./SelectFilter";
import AllCountriesViewModel from "./allCountries-viewmodel";

const AllCountriesPage = () => {
  const {
    selectedSubregion,
    setSelectedSubregion,
    subregionOptions,
    search,
    setSearch,
    countries,
  } = AllCountriesViewModel();

  return (
    <>
      <div className="flex justify-center items-center h-24 border-b">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-xl">FindYourCountry</span>
        </a>
      </div>
      <div className="flex justify-center gap-12 p-6">
        <div>
          <Input
            placeholder="Search for a country"
            className="w-96"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </div>
        <div>
          <SelectFilter
            onChange={setSelectedSubregion}
            options={subregionOptions}
            value={selectedSubregion}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6">
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </>
  );
};
export default AllCountriesPage;
