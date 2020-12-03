import React from 'react'
import './Button.scss'

export const Button = (props) => {
  return(
    <button className="btn" disabled={props.disabled}
    onClick={() => props.click ? props.click(props.arg || '') : undefined}>
      {props.text}
    </button>  
  )
}