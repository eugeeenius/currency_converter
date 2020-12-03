import React, {useContext} from 'react'
import './Header.scss'
import { Navbar } from '../navbar/Navbar';
import { RateContext } from '../context/RateContext';


export const Header = () =>{

    const {modalShowHandler} = useContext(RateContext)

    return(
        <div className = 'header'>
            <div className = "headerWrap">
            
                <div className = "logo">
                <a href = "/">
                    <h2>RateApp</h2>
                </a>
                </div>

               <Navbar/>


                <div className = "person">
                <i onClick={modalShowHandler} className = "fa fa-user" aria-hidden = "true"/></div>
            
            
            
            
            </div>

            <hr/>

        
        
        </div>
    )
}