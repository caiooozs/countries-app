"use client";
import { getAllCountries } from "@/services/countries.service";
import { useQuery } from "@tanstack/react-query";

export default function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });
}
