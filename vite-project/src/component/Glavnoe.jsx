import React from 'react'
import "../stylel/App.css"  

function Glavnoe ({takes}){
    return(
      <div>
        
        <div className='glavnoe'>
          <h1 className='zagolovoc_spisok_dell'>Список дел</h1> 

          {takes.map((take, index)=>(<p key={index}>{take}</p>))}
           

        </div>
      </div>
    ) 
}
 
export default Glavnoe;  