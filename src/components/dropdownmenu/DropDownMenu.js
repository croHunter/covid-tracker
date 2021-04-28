import React, { useState, useEffect } from 'react'
import './DropDownMenu.css';
import { fetchCountriesData } from '../../api';
const DropDownMenu = ({ innerValue, toggleState, eventHandler, toggle }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedData = await fetchCountriesData();
                const modifiedData = fetchedData.map((data, i) => ({ id: i, country: data }));
                setData(modifiedData);
            } catch (e) {
                console.log(e.toString())
            }

        }
        getData();
    }, [])


    return (
        <section className="menu-section">
            <div className="select-box">
                <div className={"options-container " + toggleState}>
                    {
                        data.map((item) => {
                            return <div key={item.id} className="option" onClick={() => eventHandler(item.country)}>
                                <input type="radio" className="radio" name="category" id={item.country} />
                                <label htmlFor={item.country} >{item.country}</label>
                            </div>
                        })
                    }
                </div>
                <div className="selected" onClick={toggle}>
                    {innerValue}
                </div>
            </div>
        </section>
    )
}

export default DropDownMenu
