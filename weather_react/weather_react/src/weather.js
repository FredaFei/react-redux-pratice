import React,{Component} from 'react'

const cityCode = 101210101
class Weather extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            weatherList: null
        }
    }
    componentDidMount(){
        //http://www.weather.com.cn/data/cityinfo/101210101.html
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                this.setState({weatherList: responseJson.weatherinfo});
            }).catch((error) => {
                this.setState({weatherList: null});
            });
        }).catch((error) => {
            this.setState({weatherList: null});
        });
    }
    render(){
        if(!this.state.weatherList){
            return (<div>not context</div>)
        }
        const {city,weather,temp1,temp2} = this.state.weatherList
        return (
            <div>
                {city} {weather} {temp1}-{temp2}
            </div>
        )
    }
}

export default Weather