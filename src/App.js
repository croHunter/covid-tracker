import React, { useEffect, useState, useReducer } from 'react'
import { Cards, DropDownMenu, Chart } from './components';
import './App.css';
import { fetchData } from './api';
import Header from './components/header/Header';

const App = () => {
    const [data, setData] = useState({});
    const [innerValue, setInnerValue] = useState("Global");
    const [toggleState, toggle] = useReducer((prev) => prev === "" ? "active" : "", "");

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await fetchData();
            setData(fetchedData);
        }
        getData();
    }, [])
    const eventHandler = async (country) => {
        const fetchedData = await fetchData(country);
        setData(fetchedData);
        setInnerValue(country);
        toggle();
    }

    if (!data) return <h1 style={{ textAlign: "center" }}>Loading...</h1>
    return (
        <main>
            <Header />
            <Cards data={data} />
            <DropDownMenu eventHandler={eventHandler} toggleState={toggleState} toggle={toggle} innerValue={innerValue} />
            <Chart data={data} country={innerValue} />
        </main>
    )
}

export default App
