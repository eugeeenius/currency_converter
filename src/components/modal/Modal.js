import React, {useState, useContext} from 'react'
import { RateContext } from '../context/RateContext'
import { Login } from '../login/Login'
import { Register } from '../register/Register'
import './Modal.scss'

export const Modal = () => {

  const {state, modalHideHandler} = useContext(RateContext)

  const [value, setValue] = useState('login')
  const links = [{name: 'Вход', id: 'login'}, {name: 'Регистрация', id: 'register'}]
  const cls = ['modal']

  const windowHandler = id => {
    setValue(id)
  }

  if (state.showModal) {
    cls.push('modalShow')
  }

  return(
    <div className={cls.join(' ')}>

      <>
        <div className="modalHead">

          <ul>
            {
              links.map(item => {
                return(
                  <li style={{fontWeight: item.id === value ? 'bold' : 'normal', 
                  cursor: 'pointer'}} 
                  key={item.name} 
                  onClick={() => windowHandler(item.id)}>{item.name}</li>
                )
              })
            }
          </ul>

          <i onClick={modalHideHandler} className="fa fa-times" aria-hidden/>
        </div>
        <hr/>
      </>

      <div style={{textAlign: 'center'}}>
        <h2 style={{color: '#f01f30'}}>{state.error}</h2>
      </div>

      {value === 'register' ? <Register/> : <Login/>}

    </div>
  )
}