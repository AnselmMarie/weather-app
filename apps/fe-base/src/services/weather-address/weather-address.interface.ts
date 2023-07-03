export interface IForecastPeriods {
    number: number;
    name: string;
    startTime: string;
    endTime: string;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend: string | null;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}

export interface IForecastFormatted {
    [key: string]: IForecastPeriods[];
}

// export interface IForecastDataFormatted {
//     [key: string]: IForecastPeriods[];
// }

export interface IForecastResponse {
    forecastData: IForecastFormatted;
}

export interface IAddress {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
}
