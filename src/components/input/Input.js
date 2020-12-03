import React from 'react';
import './Input.scss'

function isInvalid({valid, touched, shouldValidate}){
  return !valid && touched && shouldValidate
}

export const Input = (props) => {

  const cls = ['modalInput']
  const inputType = props.type || 'text'
  const htmlFor = `${props.type} - ${Math.random()}`

  return(
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>

      <input id={htmlFor} type={inputType} value={props.value}
      onChange={props.onChange} autoComplete='on'/>
      
      {
      isInvalid(props) 
      ? <span style={{color:'#f01f30'}}>{props.errorMessage}</span> || 'Введите верное значение' 
      : null
      }
      
    </div>
  )
}