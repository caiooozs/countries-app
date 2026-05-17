import { Country } from "../services/Coutries/types";

export type CountryCardProps = {
  country: Country;
};

export type SubregionSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};
