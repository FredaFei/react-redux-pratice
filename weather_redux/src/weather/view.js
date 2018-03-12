import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as Status from './status.js';

const Weather = ({status,city,weather,lowestTemp,highestTemp})=>{
    console.log(status)
    switch(status){
        case Status.LOADING: {
            return <div>正在加载中。。。</div>
        }
        case Status.SUCCESS: {
            return <div>{city} {weather} {lowestTemp}/{highestTemp}</div>
        }
        case Status.FAIL: {
            return <div>加载失败</div>
        }
        default: {
            throw new Error('unexpected status: ' + status)
        }
    }
}

Weather.propTypes = {
    status: PropTypes.string.isRequired,
    city: PropTypes.string,
    weather: PropTypes.string,
    lowestTemp: PropTypes.string,
    highestTemp: PropTypes.string
}

const mapStateToProps = (state)=>{
    const weatherData = state.weather
    return {
        status: weatherData.status,
        city: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    }
}

export default connect(mapStateToProps)(Weather)