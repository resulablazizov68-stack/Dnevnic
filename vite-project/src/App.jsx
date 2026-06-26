import React from 'react'
import "./stylel/App.css"
import Glavnoe from './component/Glavnoe'


function App() {
  

  return (
    <div className='App_Glavnoe'>
      {/* Тут находиться шапка для сайта */}
       <div className='shapca_css'>
            <hr/> 
           <header>
            <ul>
                <li><a><button>Запись дел</button></a></li>
                <li><a><button>Главное</button></a></li>
                <li><a><button>История</button></a></li> 
            </ul>
           </header> 
           <hr/> 
        </div>
        {/* Тут снизу это компаненты разных частей страниц  итд*/} 
      <Glavnoe/> 
    </div>
  )
}

export default App
