import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css';
const Chart = ({ data, country }) => {
    const { confirmed, deaths, recovered } = data;
    const [dailyData, setDailyData] = useState({ cases: {}, deaths: {}, recovered: {} });

    useEffect(() => {
        const getDailyData = async () => {
            try {
                const dailyFetchedData = await fetchDailyData();
                if (dailyFetchedData) {
                    setDailyData(dailyFetchedData);
                }
            } catch (err) {
                console.log(err);
            }
        }
        getDailyData();
    }, []);
    const lineData = {
        labels: Object.keys(dailyData.cases),
        datasets: [
            {
                label: 'Infected',
                data: Object.values(dailyData.cases),
                fill: true,
                borderColor: '#0000ff',
            },
            {
                label: 'Recovered',
                data: Object.values(dailyData.recovered),
                fill: true,
                borderColor: '#00ff00',
            },
            {
                label: 'Deaths',
                data: Object.values(dailyData.deaths),
                fill: true,
                borderColor: '#dc143c',
            },
        ],
    };

    const barChartData = {
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [{
            label: 'People',
            backgroundColor: ['#0000ff', '#00ff00', '#dc143c'],
            data: [confirmed?.value ?? null, recovered?.value ?? null, deaths?.value ?? null]
        }]
    }
    const barChartOption = {
        legend: { display: false },
        title: { display: true, text: country }
    }
    const BarChart = <Bar data={barChartData} option={barChartOption} />
    const LineChart = <Line data={lineData} />

    return (
        <section className="graph-section">
            <div className="chart-container">
                {country !== 'Global' ? BarChart : LineChart}
            </div>
        </section>
    );
}

export default Chart
