import React ,{ Component }from 'react';
import './App.css';
import WeatherData from './data.json';
import Item from './item/Item'

class App extends Component {
  // state = {
  //   repos: []
  // }
  // componentDidMount() {
  //   this.handleSearch()
  // }
  // handleSearch = () =>{
  //   let url = 'http://api.openweathermap.org/data/2.5/weather?q=London';
  //   fetch(url).then(response => response.json()).then((repos) => {
  //     console.log(repos);
  //     console.log(repos.length);
  //     this.setState({
  //       repos: this.state.repos
  //     });
  //   }).catch(response => {
  //     console.log(response)
  //   });
  // };
  render() {
    return (
      
      <div className="App">
        <div className="WeatherWrapper">
        <h1>City Weather Data</h1>
        <div className="WeatherInfoWrapper">
          {
            WeatherData.map((text,idx) => (
            <Item data={text} key={idx}/>))
          }
        </div>

        </div>
      </div>
    );
  }

}
module.exports = {
  WeatherData: WeatherData
}
export default App;
