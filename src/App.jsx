import {useState} from 'react'
import "./stylel/App.css"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Glavnoe from './component/Glavnoe'
import Istoria from './component/Istoria'
import Zapis_del from './component/Zapis_del'


function App() {
  {/*Тут зодал состояние которое будет хранить записи в масиве */}
  const  [takes, setTakes]=useState([""]);

   {/*Тут реализовали функцию добавление записей */}  

   function addTakes(newTakes){
     setTakes=([...takes, newTakes]);
   }

  return ( 
    <div className='App_Glavnoe'>
      <BrowserRouter>  {/* Мы обарачивае этим тегом он говорит все что находиться внутнри него управляеться через адресную строку */}

      {/* Тут находиться шапка для сайта */}
       <div className='shapca_css'>
            <hr/> 
           <header>
            <ul>
                <li><Link to="/zapis_del"><button className='button_shapca'>Запись дел</button></Link></li>
                <li><Link to="/"><button className='button_shapca'>Главное</button></Link></li>
                <li><Link to="/istoria"><button className='button_shapca' >История </button></Link></li>
            </ul>
           </header> 
           <hr/> 
        </div>
        <Routes>
          <Route  path="/" element={<Glavnoe takes={takes}/>} /> 
          <Route  path="/zapis_del" element={<Zapis_del addTakes={addTakes}/>} /> 
          <Route  path="/istoria" element={<Istoria/>} />
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App;