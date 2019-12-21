


// JEST has import issue. Still try to figure out.
// const Item = require('./item/Item');

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const WeatherData  =  './data.json';
test('Check Data Filename Extension/ Data has City Name',() => {
  expect(WeatherData).toMatch(/json/i);
  for(let i in WeatherData){
    expect(WeatherData[i].name).not.toBe('')
  }
})

