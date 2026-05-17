"use client";

import CountriesView from "./CountriesHome.view";
import useCountriesHomeViewModel from "./CountriesHome.viewmode";

const CountriesHome = () => {
  const countriesHomeLogic = useCountriesHomeViewModel();
  return <CountriesView {...countriesHomeLogic} />;
};

export default CountriesHome;
