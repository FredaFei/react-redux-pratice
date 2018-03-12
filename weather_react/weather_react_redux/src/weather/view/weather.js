import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as Status from '../status.js'

const Weather = ({status,cityName,weather,lowstTemp,highestTemp})=>{
    switch (status){
        case Status.LOADING: {
            return (<div> request...</div>)
        }
        case Status.SUCCESS: {
            return (
                <div>
                    {cityName} {weather} {lowstTemp}-{highestTemp}
                </div>
            )
        }
        case Status.FAILURE: {
            return (<div>loading fail...</div>)
        }
        default: {
            throw new Error('unexpected status ' + status)
        }
    }
}

Weather.propTypes = {
    status: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    weather: PropTypes.string,
    lowstTemp: PropTypes.string,
    highestTemp: PropTypes.string
}

const mapStateToProps = state=>{
    const weatherDate = state.weather
    return {
        status: weatherDate.status,
        cityName: weatherDate.city,
        weather: weatherDate.weather,
        lowstTemp: weatherDate.temp1,
        highestTemp: weatherDate.temp2
    }
}

export default connect(mapStateToProps)(Weather)
