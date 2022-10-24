import { useState } from 'react'
import './App.scss'
import Navbar, {NavbarProps} from './components/Navbar'

function App() {
  const [navState, setNavState] = useState<'FORM' | 'LIST'>('FORM')

  return (
    <div className="App">
      < Navbar
        state={navState}
        onChange={(value: 'FORM'|'LIST')=>{setNavState(value)}}
      />
     <div className='content'>
      <form className='form-content'>
        qweqweqwe
      </form>
     </div>
    </div>
  )
}

export default App
