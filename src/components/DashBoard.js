import React, { useState } from 'react'
import '../components/DashBoard.css'
import SummaryCard from './SummaryCard'
import SupportCard from './SupportCard'
import Averages from './Averages'
import Oscillators from './Oscillators'


const DashBoard = () => {

    const [buttonNo, setButtonNo] = useState(6);
    const [buttonColor, setButtonColor] = useState('');
    const [no,setNo] = useState(6);
    const handleClick = (id) => {
        
        setNo(id);
        console.log('The updated id is ' + no );
    };

    return (
        <div className='DashBoard'>
            <div className='duration-sec'>
                <div className='duration-option'>
                    {/* <button setBut >5minutes</button> */}
                    <button
                        onClick={()=>{handleClick(1);console.log('Clicked');}}
                        style={{ backgroundColor: buttonColor }}
                    >
                        5Min
                    </button>
                </div>
                <div className='duration-option'>
                    <button
                        onClick={()=>{handleClick(2);console.log('Clicked');}}
                        style={{ backgroundColor: buttonColor }}
                    >10min</button>
                </div>
                <div className='duration-option'>
                    <button
                        onClick={()=>{handleClick(3);console.log('Clicked');}}
                        style={{ backgroundColor: buttonColor }}
                    >15min</button>
                </div>
                <div className='duration-option'>
                    <button
                        onClick={()=>{handleClick(4);console.log('Clicked');}}
                        style={{ backgroundColor: buttonColor }}
                    >30min</button>
                </div>
                <div className='duration-option'>
                    <button
                        onClick={()=>{handleClick(5);console.log('Clicked');}}
                        style={{ backgroundColor: buttonColor }}
                    >hour</button>
                </div>
                <div className='duration-option'>
                    <button
                        onClick={()=>{handleClick(6);console.log('Clicked');}}
                        style={{ backgroundColor: buttonColor }}
                    >day</button>
                </div>
            </div>
            <div className='topbar2'>
                <div className='backbutton'>
                    <button><h1>{'<'}</h1></button>
                </div>
                <div className='Stock-info'>
                    <div className='stockname'>
                        <img src='https://technicals.zerodha.com/static/media/NSE.62a33981.svg' height={30} width={30} />
                        <h4>NIFTY 50</h4>
                    </div>
                    <div className='amount-info'>
                        <div className='current-amount-info'>
                            $22096.75
                        </div>
                        <div className='profit-loss-sec'>
                            <p>{'(+0.39%)'}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='main-container'>
                <div className='section'>
                    <div className='SummaryCard'>
                        <SummaryCard id={no} />
                    </div>
                    <div className='SupportCard'>
                        <SupportCard id={no} />
                    </div>

                </div>
                <div className='section'>
                    <div className='Averages'>
                        <Averages id={no} />
                    </div>
                    <div className='Oscillators'>
                        <Oscillators id={no} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard