"use client";
import AllCountriesView from "./AllCountries.view";
import useAllCountriesViewModel from "./AllCountries.viewmodel";

const AllCountries = () => {
  const allCountriesLogic = useAllCountriesViewModel();
  return <AllCountriesView {...allCountriesLogic} />;
};
export default AllCountries;
