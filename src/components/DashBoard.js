import React from 'react'
import '../components/DashBoard.css'
import SummaryCard from './SummaryCard'
import SupportCard from './SupportCard'


const DashBoard = () => {
    return (
        <div className='DashBoard'>
            <div className='duration-sec'>
                <div className='duration-option'>
                    <button>5minutes</button>
                </div>
                <div className='duration-option'>
                    <button>10min</button>
                </div>
                <div className='duration-option'>
                    <button>15min</button>
                </div>
                <div className='duration-option'>
                    <button>30min</button>
                </div>
                <div className='duration-option'>
                    <button>hour</button>
                </div>
                <div className='duration-option'>
                    <button>day</button>
                </div>
            </div>
            <div className='topbar2'>
                <div className='backbutton'>
                    <button><h2>{'<'}</h2></button>
                </div> 
                <div className='Stock-info'>
                    <div className='stockname'>
                        <img src='https://technicals.zerodha.com/static/media/NSE.62a33981.svg' height={30} width={30} />
                        <h2>NIFTY 50</h2>
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
                    <SummaryCard />
                    </div>
                    <div className='SupportCard'>
                    <SupportCard />
                    </div>
                    
                </div>
                <div className='section'>
                    
                </div>
            </div>
        </div>
    )
}

export default DashBoard