import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import '../components/SummaryCard.css'
import data from '../Data1.json'


const SummaryCard = (id) => {
  let i = id.id;

  let bearish = data.main[i - 1].summary[0];
    let neutral = data.main[i-1].summary[1];
    let bullish = data.main[i-1].summary[2];
    let leftside = neutral - bearish;
    let rightside = neutral - bullish;
    if(leftside<0) leftside=0;
    if(rightside<0) rightside=0;
    let ok = true;
    let val;
    if(leftside>=rightside)
    {
         val = (leftside);
        ok=false;
    }
    else
        val = (rightside);
      val = val*10;
        console.log('val is ' + val);


  return (
    <div className='Card-contianer'>
      <div className='card-head'>
        <div className='head-content'><h6>Summary</h6></div>
        <div className='info-content'><IoMdInformationCircleOutline /></div>
      </div>
      {/* https://technicals.zerodha.com/static/media/pointer_resistance.645dfcd4.svg */}
      <div className='card-body'>
        
        <div className='Range-Card'>
          <div className='Outer-card'>  
          <img src='https://technicals.zerodha.com/static/media/bar.8505e185.svg' />
          </div>
          <div className='Inner-hover'>
            <img style={ok?{right:val}:{left:val}}  src='https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg' height={25} width={25} />
          </div>
        </div>
        <div className='Range-info'>
          <div className='range' >
            <p>{data.main[i - 1].summary[0]}</p>
            <div className='range-type' id='rt1'>Bearish</div>
          </div>
          <div className='range'>
            <p>{data.main[i - 1].summary[1]}</p>
            <div className='range-type' id='rt2'>Neutral</div>
          </div>
          <div className='range'>
            <p>{data.main[i - 1].summary[2]}</p>
            <div className='range-type' id='rt3'>Bullish</div>
          </div>
        </div>
        <div className='stock-data'>
          <div className='Upper-data'>
            <div className='slot'>
              <p className='data-value'>
                22076.49
              </p>
              <p className='data-type'>
                EMA(20)
              </p>
            </div>
            <div className='slot'>
              <p className='data-value'>
                22159.49
              </p>
              <p className='data-type'>
                SMA(20)
              </p>
            </div>
            <div className='slot'>
              <p className='data-value'>
                51.49
              </p>
              <p className='data-type'>
                RSI(14)
              </p>
            </div>
          </div>
          <div className='Lower-data'>

            <div className='slot'>
              <p className='data-value'>
                -96.29
              </p>
              <p className='data-type'>
                Awesome Inc
              </p>
            </div>
            <div className='slot'>
              <p className='data-value'>
                14.42
              </p>
              <p className='data-type'>
                Macd(12,26,9)
              </p>
            </div>
            <div className='slot'>
              <p className='data-value'>
                -43.49
              </p>
              <p className='data-type'>
                CCI(20)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard