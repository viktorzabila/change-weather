interface TableProps {
  readonly cityWeather: Array<WeatherData | null>;
  readonly selectCountry: string[];
  readonly selectMinTemp: number;
  readonly selectMaxTemp: number;
  readonly handleCityClick: (value: string) => void;
  readonly filterCountry: (value: string[]) => void;
  readonly filterMinTemp: (value: number) => void;
  readonly filterMaxTemp: (value: number) => void;
}

interface WeatherData {
  readonly daily: {
    readonly temperature_2m_max: number[];
    readonly temperature_2m_min: number[];
    readonly winddirection_10m_dominant: number[];
    cityName: string;
    country: string;
  };
}

export type { TableProps, WeatherData };
