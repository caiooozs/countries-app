import { CountryViewModelProps } from "./Country.model";
import { Country } from "@/src/services/Countries/types";
import { CountryServices } from "@/src/services/Countries/countries.service";

export async function useCountryViewModel({ params }: CountryViewModelProps) {
  const { code } = await params;
  const { getCountryByCode } = await CountryServices();

  const [country] = (await getCountryByCode(code)) as Country[];
  const firstCurrency = country.currencies
    ? Object.values(country.currencies)[0]
    : undefined;

  return {
    country,
    firstCurrency,
  };
}
