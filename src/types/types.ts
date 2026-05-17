import { Country } from "../services/Countries/types";

export type CountryCardProps = {
  country: Country;
};

export type SubregionSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};
