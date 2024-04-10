import './App.css'
import React from 'react'
import { Form } from './components/Form'
import { List } from './components/List'

const App: React.FC = ()=>{
  return (
    <div className='App'>
      <Form></Form>
      <List></List>
    </div>
   )
}

export default App
