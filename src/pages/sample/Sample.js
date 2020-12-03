import React, {useContext} from 'react'
import { Button } from '../../components/button/Button'
import { RateContext } from '../../components/context/RateContext'
import './Sample.scss'

export const Sample = () => {

  const {state, baseHandler, base2Handler, sampleDateHandler, dataWrite, sampleRemove} = useContext(RateContext)

  return(
    <div className="sample">
      <div className="sampleContainer">
        <div>
          <h3>
            Получить курс: &nbsp;
            <select onChange={baseHandler} value={state.sample.base}>
              {
                Object.keys(state.currency).map(item => {
                  return(
                    <option key={item}>{item}</option>
                  )
                })
              }
            </select>
             &nbsp;&nbsp; к &nbsp;&nbsp;
            <select onChange={base2Handler} value={state.sample.base2}>
              {
                Object.keys(state.currency).map(item => {
                  return(
                    <option key={item}>{item}</option>
                  )
                })
              }
            </select>
          </h3>
        </div>

        <div className="sampleHead">
          <span>Дата: <input onChange={sampleDateHandler} type="date"/></span>
          <Button text="Получить курс" click={dataWrite} />
        </div>

        <div className="sampleResult">
          <ul>
            {
              
              state.sampleList 

              ? Object.keys(state.sampleList).reverse().map(item => {
                return(
                  <li key={item}>

                    <span><img src={state.currency[state.sampleList[item].base].flag} alt={item}/>&nbsp;{state.sampleList[item].base}</span>

                    <span>{state.sampleList[item].date}</span>

                    <span>{`${state.sampleList[item].course} ${state.sampleList[item].base2}`}</span>

                    <button onClick={() => sampleRemove(item)}><i className="fa fa-times"/></button>
                  </li>
                ) 
              })

              : null
            }
          </ul>
        </div>
      </div>
    </div>
  )
}