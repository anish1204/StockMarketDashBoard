import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import '../components/SummaryCard.css'
import data from '../Data1.json'
const SupportCard = (id) => {

  let i = id.id;
  let bearish = data.main[i - 1].averages[0];
  let neutral = data.main[i - 1].averages[1];
  let bullish = data.main[i - 1].averages[2];
  let leftside = neutral - bearish;
  let rightside = neutral - bullish;
  if (leftside < 0) leftside = 0;
  if (rightside < 0) rightside = 0;
  let ok = true;
  let val;
  if (leftside >= rightside) {
    val = (leftside);
    ok = false;
  }
  else
    val = (rightside);
  console.log('val is ' + val);



  return (
    <div>
      <div className='Card-contianer'>
        <div className='card-head'>
          <div className='head-content'><h6>Support and Resistance</h6></div>
          <div className='info-content'><IoMdInformationCircleOutline /></div>
        </div>
        <div className='card-body'>
          <div className='Range-Card'>


          </div>
          <div className='Range-Card'>
            <div className='Outer-card'>
              <img src='https://technicals.zerodha.com/static/media/bar_resistance.eb8d6baa.svg' />
            </div>
            <div className='Inner-hover'>
              <img style={ok ? { right: val } : { left: val }} src='https://technicals.zerodha.com/static/media/pointer_resistance.645dfcd4.svg' height={25} width={25} />
            </div>
          </div>
          <div className='Range-info'>
            <p>S3</p>
            <p>S2</p>
            <p>S1</p>
            <p>R1</p>
            <p>R2</p>
            <p>R3</p>
            {/* <div className='range' >
              
              
            </div>
            <div className='range'>
              
             
            </div>
            <div className='range'>
              
              
            </div> */}
          </div>
          <div className='stock-data'>
            <div className='Upper-data'>
              <div className='slot'>
                <p className='data-value'>
                  22076.49
                </p>
                <p className='data-type'>
                  S1
                </p>
              </div>
              <div className='slot'>
                <p className='data-value'>
                  22159.49
                </p>
                <p className='data-type'>
                  S2
                </p>
              </div>
              <div className='slot'>
                <p className='data-value'>
                  51.49
                </p>
                <p className='data-type'>
                  S3
                </p>
              </div>
            </div>
            <div className='Lower-data'>

              <div className='slot'>
                <p className='data-value'>
                  -96.29
                </p>
                <p className='data-type'>
                  R1
                </p>
              </div>
              <div className='slot'>
                <p className='data-value'>
                  14.42
                </p>
                <p className='data-type'>
                  R2
                </p>
              </div>
              <div className='slot'>
                <p className='data-value'>
                  -43.49
                </p>
                <p className='data-type'>
                  R3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportCard