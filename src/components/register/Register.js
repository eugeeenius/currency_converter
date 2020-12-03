import React, {useContext} from 'react'
import { Button } from '../button/Button'
import { RateContext } from '../context/RateContext'
import './Register.scss'

export const Register = () => {

  const {state, renderInputs, registerHandler} = useContext(RateContext)

  return(
    <>
      <form className="modalForm">
        {renderInputs()}
      </form>

      <div className="modalBtn">
        <Button text="Зарегистрироваться" disabled={!state.isFormValid} click={registerHandler}/>
      </div>
    </>
  )
}