import CountryCard from "../CountriesCard/CountryCard";
import { Input } from "../ui/input";
import Link from "next/link";
import { AllCountriesViewProps } from "./AllCountries.model";
import SelectFilter from "./components/SelectFilter";

const AllCountriesView = ({
  countries,
  search,
  selectedSubregion,
  setSearch,
  setSelectedSubregion,
  subregionOptions,
}: AllCountriesViewProps) => {
  return (
    <>
      <div className="flex justify-center items-center h-24 border-b">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl">FindYourCountry</span>
        </Link>
      </div>
      <div className="flex justify-center gap-12 p-6">
        <div>
          <Input
            placeholder="Search for a country"
            className="w-full"
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
        {countries?.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};
export default AllCountriesView;
