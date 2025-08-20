import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>custom app!</h1>
    </div>
  )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:"https://www.google.com/",
//         target:'_blank',
        
//     },
//     children:'click me to visit google'

// }

const Anotherelement=(
  <a href="https://www.google.com" target='_blank'>visit google</a>

)
const anotheruser="chai aur react"

const reactElement= React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',

  Anotherelement


)

createRoot(document.getElementById('root')).render(
  
  reactElement
)
