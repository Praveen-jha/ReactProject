import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='h1'>
        Currency Converter 
      </h1>

      <div className='praveen'>
        <h1 className='top-header'>Convert Your Currency Here</h1>
       Enter Currency In Indian Rs &nbsp;&nbsp;<input id='CurrencyInput'/>

      <div className='SelectCountry'>
        Select the Country &nbsp;&nbsp;
       <select name="city" id="city" required class="special">
          <option value="delhi">USA</option>
          <option value="jodhpur">NEPAL</option>
          <option value="raipur">DUBAI</option>
          <option value="mumbai">AUSTRALIA</option>
          <option value="bihar">UK</option>
          <option value="mop">Others</option>
        </select>

       </div>
       <div className='submit'>
        <button className='convert_button'>Convert</button>
       </div>

       <div className='result'>
        200 Rs is = 2.4844 US Dollar
       </div>
      </div>

      
    </div>

    
  );
}

export default App;
