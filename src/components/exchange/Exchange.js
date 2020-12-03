import React, {useContext} from 'react'
import { RateContext } from '../context/RateContext'
import './Exchange.scss'

export const Exchange = () => {

  const {state} = useContext(RateContext)
  const currency = {...state.currency}
  return(
    <div className="exchange">
      <div className="exchangeContainer">
        <div className="exchangeContent">
          <div>

            <p>
              <span className="exchangeTitle" >Базовая валюта:</span>
              &nbsp;{state.base} &nbsp;
              <span className="exchangeTitle" >Дата:</span>
              &nbsp;{state.date}
            </p>

            <ul>
              {
                Object.keys(currency).map((item) => {
                  return(
                    <li key={item}>
                      
                      <span>
                        <img src={currency[item].flag} alt={item}/>
                        {item}
                      </span>

                      <span>
                        {`1${state.base} = ${currency[item].course} ${item}`}
                      </span>

                    </li>
                  )
                })
              }
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}