export interface Country {
  name: {
    common: string;
    official: string;
  };
  flag: {
    png: string;
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  subregion: string;
  borders: [string];
  area: number;

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}
