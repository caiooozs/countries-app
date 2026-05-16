import { getCountryByCode } from "@/services/countries.service";

type CountryViewModelProps = {
  params: Promise<{ code: string }>;
};

export async function CountryViewModel({ params }: CountryViewModelProps) {
  const { code } = await params;

  const response = await getCountryByCode(code);
  const [country] = await response.json();

  return {
    country,
  };
}
