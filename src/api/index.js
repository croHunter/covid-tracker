import axios from 'axios';
const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(changeableUrl);
        const modifiedData = { confirmed, deaths, recovered, lastUpdate };
        return modifiedData;
    }
    catch (err) {
        console.log("error: " + err);
    }

}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get("https://corona.lmao.ninja/v3/covid-19/historical/all");
        return data;
    }
    catch (err) {
        console.log("error: " + err);
    }
}
export const fetchCountriesData = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        const modifiedData = countries.map(country => country.name);
        return modifiedData;
    }
    catch (err) {
        console.log("error: " + err);
    }
}

