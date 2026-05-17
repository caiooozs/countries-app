import CountryView from "./Country.view";
import { useCountryViewModel } from "./Country.viewmodel";
import { CountryViewModelProps } from "./Country.model";

const Country = async ({ params }: CountryViewModelProps) => {
  const countryLogic = await useCountryViewModel({ params });
  return <CountryView {...countryLogic} />;
};
export default Country;
