import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './actionTypes.js'

export const fetchWeatherStarted = ()=>({
    type: FETCH_START
})
export const fetchWeatherSuccessed = (result)=>({
    type: FETCH_SUCCESS,
    result
})
export const fetchWeatherFailed = (error)=>({
    type: FETCH_FAIL,
    error
})
export const fetchWeather=(cityCode)=>{
    return (dispatch)=>{
        const apiUrl = `/data/cityinfo/${cityCode}.html`
        dispatch(fetchWeatherStarted())
        return fetch(apiUrl).then(response=>{
            if(response.status !== 200){
                throw new Error('fail to get response with status : '+response.status)
            }
            response.json().then(response=>{
                dispatch(fetchWeatherSuccessed(response.weatherinfo))
            }).catch(error=>{
                dispatch(fetchWeatherFailed(error))
            })
        }).catch(error=>{
            dispatch(fetchWeatherFailed(error))
        })
    }
}