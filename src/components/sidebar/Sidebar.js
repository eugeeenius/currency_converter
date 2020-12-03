import React, {useContext} from 'react'
import { RateContext } from '../context/RateContext'
import './Sidebar.scss'

export const Sidebar = () => {
  const {state} = useContext(RateContext) 
  const currency = state.currency
  return(
    <div className="sidebar">

      <div className="sidebarHead">
        <h3>Все валюты</h3>
      </div>

      <div className="sidebarContent">
        <ul>
          {
            Object.keys(currency).map((item) => {
              return(
                <li key={item}>

                <p>

                  <span>
                    <img src={currency[item].flag} alt={item}/>
                    &nbsp;{item}
                  </span>

                  &nbsp;
                  {currency[item].name}
                  
                </p>
              </li>
              )
            })
          }         
        </ul>
      </div>
    </div>
  )
}