import React from 'react'
import '../components/Averages.css'
import data from '../Data1.json'
import { getValue } from '@testing-library/user-event/dist/utils';


const Averages = (id) => {

    let i = id.id;
    let bearish = data.main[i - 1].averages[0];
    let neutral = data.main[i-1].averages[1];
    let bullish = data.main[i-1].averages[2];
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
        console.log('val is ' + val);

    
    return (
        <div>
            <div className='Card-contianer'>
                <div className='card-head'>
                    <div className='head-content'><h6>Moving Averages</h6></div>
                    {/* <h2>{data.time[0]}</h2> */}
                </div>
                <div className='card-body'>
                    <div className='Range-Card'>
                        <div className='Outer-card'>
                        <img src='https://technicals.zerodha.com/static/media/bar_ma.1ee3ecd8.svg' />
                        </div>
                        <div className='Inner-hover'>
                            <img style={ok ? { right: val } : { left: val }} src='https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg' height={25} width={25} />
                        </div>
                    </div>
                    <div className='Range-info'>
                        <div className='range' >
                            <p>{data.main[i - 1].averages[0]}</p>
                            <div style={{ backgroundColor: 'orange' }} className='range-type' id='rt1'>Bearish</div>
                        </div>
                        <div className='range'>
                            <p>{data.main[i - 1].averages[1]}</p>
                            <div className='range-type' id='rt2'>Neutral</div>
                        </div>
                        <div className='range'>
                            <p>{data.main[i - 1].averages[2]}</p>
                            <div style={{ backgroundColor: 'lightblue' }} className='range-type' id='rt3'>Bullish</div>
                        </div>
                    </div>
                    <div className='stock-data'>
                        <div className='Upper-data'>
                            <div className='slot'>

                                <p className='data-type'>
                                    EMA(20)
                                </p>
                            </div>
                            <div className='slot'>
                                <p className='data-value'>
                                    22076.49
                                </p>
                            </div>
                        </div>
                        <div className='Lower-data'>
                            <div className='slot'>

                                <p className='data-type'>
                                    SMA (5)
                                </p>
                            </div>
                            <div className='slot'>
                                <p className='data-value'>
                                    21964.19
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Averages