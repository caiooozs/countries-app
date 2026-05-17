import { CountryViewModelProps } from "./Country.model";
import { Country } from "@/src/services/Coutries/types";
import { CountryServices } from "@/src/services/Coutries/countries.service";

export async function useCountryViewModel({ params }: CountryViewModelProps) {
  const { code } = await params;
  const { getCountryByCode } = await CountryServices();

  const res = await getCountryByCode(code);
  const [country] = (await res.json()) as Country[];
  const firstCurrency = country.currencies
    ? Object.values(country.currencies)[0]
    : undefined;

  return {
    country,
    firstCurrency,
  };
}
