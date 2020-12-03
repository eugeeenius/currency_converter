import React, {useContext} from 'react'
import { Button } from '../button/Button'
import { RateContext } from '../context/RateContext'
import './Counter.scss'

export const Counter = () => {

  const {state, inputValueHandler, currencyValueHandler, calculatorHandler} = useContext(RateContext)

  return(
    <div className="calcContainer">
      <div><h4>Хочу обменять:</h4></div>

      <div className="operation">
        <span>
          <input 
            type="number" 
            value={state.inputValue}
            onChange={inputValueHandler}/>

          &nbsp;RUB
        </span>

        <select onChange={currencyValueHandler}>
          {
            Object.keys(state.currency).map(item => {
              return(
                <option key={item} value={item}>{item}</option>
              )
            })
          }
        </select>

        <Button text='Посчитать' click={calculatorHandler} arg={state.currencyValue} />
      </div>
    </div>
  )
}