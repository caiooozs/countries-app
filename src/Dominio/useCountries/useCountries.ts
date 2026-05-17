"use client";
import { CountryServices } from "@/src/services/Coutries/countries.service";
import { useQuery } from "@tanstack/react-query";

export default function useCountries() {
  const { getAllCountries } = CountryServices();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  return {
    allCountries: data,
    isError,
    isLoading,
  };
}
