import { React, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);

    const fetchData = async (country) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=c8ac6bf516b4e0f64f73a33b33061ccc`
            );
            setCity(response.data);
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            fetchData(search);
        } else {
            setError(true);
        }
    };

    return (
        <section
            id="Weather"
            className="py-28 pt-20"
            style={{ backgroundColor: "#09090e" }}
        >
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img
                            className="h-full"
                            src="https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Weather img"
                        />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <form className="my-5 h-full" onSubmit={handleSearch}>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search for a country's weather..."
                                className="w-full bg-black border-white border-solid border p-2 ps-4 rounded-lg text-white"
                            />
                            {city && !error ? (
                                <div className="text-gray-100 text-center justify-items-center mt-4">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                                        alt={city.weather[0].description}
                                    />
                                    <h1>{city.main.temp}°C</h1>
                                    <p>{city.name}</p>
                                    <p className="text-gray-400 -mt-2">
                                        {city.weather[0].description}
                                    </p>
                                    <div className="mid flex justify-center mt-8">
                                        <div className="bg-slate-600 px-3 pt-2 rounded-lg">
                                            <p>Feels like</p>
                                            <p className="-mt-2">{city.main.feels_like}°C</p>
                                        </div>
                                        <div className="mx-10 bg-slate-600 px-3 pt-2 rounded-lg">
                                            <p>Humidity</p>
                                            <p className="-mt-2">{city.main.humidity}%</p>
                                        </div>
                                        <div className="bg-slate-600 px-3 pt-2 rounded-lg">
                                            <p>Pressure</p>
                                            <p className="-mt-2">{city.main.pressure} hPa</p>
                                        </div>
                                    </div>
                                </div>
                            ) : error ? (
                                <div className="text-center h-full content-center">
                                    <p className="text-red-700">Country not found</p>
                                </div>
                            ) : (
                                <div className="text-center h-full content-center">
                                    <p className="text-gray-100">Please enter a country</p>
                                </div>
                            )}
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Weather;
