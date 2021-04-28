import React from 'react'
import './Card.css';
import CountUp from 'react-countup';
const Cards = ({ data }) => {
    const { confirmed, deaths, recovered, lastUpdate } = data;
    if (!confirmed) return <h1 style={{ textAlign: "center" }}>loading...</h1>
    return (
        <section className="card-container">
            <div className="card blue">
                <h3>INFECTED</h3>
                <h1><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></h1>
                <h3>{new Date(lastUpdate).toDateString()}</h3>
                <p>Number of active cases of covid-19.</p>
            </div>
            <div className="card green">
                <h3>RECOVERED</h3>
                <h1><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></h1>
                <h3>{new Date(lastUpdate).toDateString()}</h3>
                <p>Number of active cases of covid-19.</p>
            </div>
            <div className="card red">
                <h3>DEATHS</h3>
                <h1><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></h1>
                <h3>{new Date(lastUpdate).toDateString()}</h3>
                <p>Number of active cases of covid-19.</p>
            </div>
        </section>

    )
}

export default Cards
