export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  population: number;
  region: string;
  subregion?: string;
  borders?: string[];
  area: number;

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };

  currencies?: Record<
    string,
    {
      symbol: string;
      name: string;
    }
  >;
  capital?: string[];
  cca3: string;
}

export type CountryCardProps = {
  country: Country;
};

export type SubregionSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};
