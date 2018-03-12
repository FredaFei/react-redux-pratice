import {FETCH_STARTED,FEATCH_SUCCESS,FEATCH_FAILURE} from "./actionTypes";

export const fetchWeatherStarted = ()=>({
    type: FETCH_STARTED
})
export const fetchWeatherSuccess = (result)=>({
    type: FEATCH_SUCCESS,
    result
})
export const fetchWeatherFailure = (error)=>({
    type: FEATCH_FAILURE,
    error
})

export const fetchWeather = (cityCode)=>{
    return (dispatch)=>{
        const apiUrl = `/data/cityinfo/${cityCode}.html`
        dispatch(fetchWeatherStarted())
        return fetch(apiUrl).then(res=>{
            if (res.status !== 200) {
                throw new Error('Fail to get response with status ' + res.status);
            }
            res.json().then(res=>{
                dispatch(fetchWeatherSuccess(res.weatherinfo))
            }).catch(err=>{dispatch(fetchWeatherFailure(err))})
        }).catch(err=>{dispatch(fetchWeatherFailure(err))})
    }

}