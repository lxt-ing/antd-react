import React from 'react'
import { useState } from 'react'
import "./App.css"
import yaoping from './components/images/yaoping.gif'
import { NbTabs, NbProgress } from './components/'
function App() {
  const [index, setIndex] = useState(0)
  return (
    <div className="App1">
      <NbTabs selectIndex={index} onChange={(index)=>{setIndex(index)}}></NbTabs>
      <NbProgress type="line" percent="50"></NbProgress>
    </div>
  )
}

export default App
