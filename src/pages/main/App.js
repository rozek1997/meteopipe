import React from "react"
import './App.css';
import {Link} from "react-router-dom";
import weatherImage from "./weather-iot.jpg"

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <section className="app__container">
                    <div className="app__description__container">
                        <p className="description__header">
                            Connect yours' meteo stations to the cloud
                        </p>
                        <p className="description__details">
                            Start your adventure with IoT devices. Program yours' meteo station, gather data and send
                            them to the cloud.
                            Forget about building your own servers, brokers and database to access data from
                            Behind the scenes app using AWS serverless infrastructure: AWS Lambda, AWS IoT Core,
                            DynamoDB to exchange, store and process data from devices.
                            Allow others to access the most accurate weather data.
                        </p>
                        <p className="description__footer">
                            <button className="btn__signup"><Link to="/sign-up">Sign up</Link></button>
                        </p>
                    </div>
                    <div className="app__image">
                        <img src={weatherImage}/>
                    </div>
                </section>
                <div className="app__gradient">

                </div>
            </div>

        );
    }
}

export default App;
