"use client";
import { Input } from "@/components/ui/input";
import useCountries from "@/hook/useCountries";
import CountryCard from "@/modules/components/CountriesCard/card-view";
import { Select } from "radix-ui";
import { IoIosSearch } from "react-icons/io";

const AllCountries = () => {
  const { data: countries = [], isLoading, isError } = useCountries();

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
          <select name="" id=""></select>
        </div>
      </div>
      {isLoading && <p>Buscando países...</p>}
      {isError && <p>Erro ao buscar países.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </>
  );
};
export default AllCountries;
