import { useState } from 'react'

import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import {Items} from './utils/type'
import ItemList from './components/ItemList'

function App() {
  
  const [items, setItems] = useState<Items[]>([])
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setItems(prev => [...prev, {title: input, id: Date.now().toString()}])
    setInput('')
  }

  return (
    <div className='w-[350px]'>
      <form onSubmit={handleSubmit} className='mb-5'>
        <Input input={input} setInput={setInput} type='text'/>
        <Button className="bg-gray-700 w-full p-2 text-white" >Add</Button>
      </form>
      <div className='h-52 overflow-y-auto'>
        <ItemList items={items} setItems={setItems}/>

      </div>
    </div>
  )
}

export default App
