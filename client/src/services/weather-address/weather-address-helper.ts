import { IForecastFormatted, IForecastPeriods } from '.';
import DAYS from './days-constants';

/**
 * This function takes the forecast response and formats it so the application can use it.
 * @param {IForecastPeriods[]} data - The forecast response
 * @return {IForecastFormatted} The formatted response
 */
export const formatData = (data: IForecastPeriods[]): IForecastFormatted => {
    let currentDay = 'today';
    const results: IForecastFormatted = {
        [currentDay]: [],
    };
    let firstChangeDone = false;

    for (let loop = 0; loop < data.length; loop++) {
        const day = data[loop].name.split(' ')[0].toLowerCase();

        // There was a instance where I saw 8 days so I'm adding this code
        // to make sure I'm getting 7 days
        if (Object.keys(results).length === 7) {
            break;
        }

        if (!firstChangeDone && DAYS.includes(day)) {
            firstChangeDone = true;
            currentDay = day;
            results[currentDay] = [];
        } else if (
            firstChangeDone &&
            currentDay !== day &&
            loop !== data.length
        ) {
            currentDay = day;
            results[currentDay] = [];
        }

        if (data[loop]) {
            results[currentDay].push(data[loop]);
        }
    }

    return results;
};
