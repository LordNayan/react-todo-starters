import './App.css'
import React from 'react'
import { Form } from './components/Form'
import { List } from './components/List'

const App: React.FC = ()=>{
  return (
    <div className='App'>
      <h3 className='header'>TO-DO List</h3>
      <Form></Form>
      <List></List>
    </div>
   )
}

export default App
