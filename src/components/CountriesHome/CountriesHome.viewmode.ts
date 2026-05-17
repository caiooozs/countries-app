import useCountries from "@/src/features/countries/queries/useCountries";

export default function useCountriesHomeViewModel() {
  const { allCountries, isLoading, isError } = useCountries();
  const featuredCountries = allCountries?.slice(0, 10);

  return {
    allCountries,
    featuredCountries,
    isLoading,
    isError,
  };
}
