import { useCountryViewModel } from "./Country.viewmodel";

export type CountryViewModelProps = {
  params: Promise<{ code: string }>;
};

export type CountryViewProps = Awaited<ReturnType<typeof useCountryViewModel>>;
