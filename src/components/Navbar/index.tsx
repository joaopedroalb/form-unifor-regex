import React from 'react'
import './style.scss'

export type NavbarProps = {
    state: 'FORM' | 'LIST'
    onChange: (v:'FORM' | 'LIST')=>void
}

export default function Navbar({state,onChange}:NavbarProps) {
  return (
    <nav className='nav-container'>
        <p className={`nav-item ${state==='FORM' && 'selected'}`} onClick={()=>onChange('FORM')}>Forms</p>
        <p className={`nav-item ${state==='LIST' && 'selected'}`} onClick={()=>onChange('LIST')}>Lista</p>
    </nav>
  )
}
