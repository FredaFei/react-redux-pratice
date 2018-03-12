import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {actions as weatherAction} from '../weather/'

const CITY_CODE={
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
}

class CitySelector extends Component{
    componentDidMount(){
        const defaultCity = Object.keys(CITY_CODE)[0];
        this.props.onSelectCity(CITY_CODE[defaultCity])
    }
    handleSelectCity = (e)=>{
        this.props.onSelectCity(e.target.value)
    }
    render(){
        return(
            <select className='city-select' onChange={this.handleSelectCity}>
                {
                    Object.keys(CITY_CODE).map(item=>{
                        return <option key={item} value={CITY_CODE[item]} name="city">{item}</option>
                    })
                }

            </select>
        )
    }
}

CitySelector.propTypes = {
    onSelectCity: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onSelectCity: (cityCode)=>{
            dispatch(weatherAction.fetchWeather(cityCode))
        }
    }
}
export default connect(null,mapDispatchToProps)(CitySelector)