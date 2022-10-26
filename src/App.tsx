import { useState } from 'react'
import './App.scss'
import Form from './components/Form'
import Navbar, {NavbarProps} from './components/Navbar'

export type UserData = {
  name: string,
  email:string,
  url:string,
  comment:string,
  gender: 'MALE'|'FEMALE'|'OTHER'|null
}

function App() {
  const [userList, setUserList] = useState<UserData[]>([])

  const [navState, setNavState] = useState<'FORM' | 'LIST'>('FORM')

  const handleAddUser = (newUser: UserData) => {
    setUserList([...userList,newUser])
  }

  return (
    <div className="App">
      < Navbar
        state={navState}
        onChange={(value: 'FORM'|'LIST')=>{setNavState(value)}}
      />
     <div className='content'>
      <Form
        handleCreate={handleAddUser}
      />
     </div>
    </div>
  )
}

export default App
