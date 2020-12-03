import React, {useContext} from 'react'
import { Button } from '../button/Button'
import { RateContext } from '../context/RateContext'
import './Login.scss'


export const Login = () => {

  const {state, renderInputs, loginHandler} = useContext(RateContext)

  return(
    <>
      <form className="modalForm">
        {renderInputs()}
      </form>

      <div className="modalBtn">
        <Button text="Войти" disabled={!state.isFormValid} click={loginHandler}/>
      </div>
    </>
  )
}