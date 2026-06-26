import {useState} from 'react'
import { useNavigate } from "react-router-dom";


function Zapis_del({addTakes}){

    const[text, setText]=useState("");

    const navigate = useNavigate();

    {/* тут будет реализована  */}

    function handleAdd(){
      
    {/* условия которое проверяет не пустой ли текст в поле заполнение */}
    
    if(text.trim() === "") return;

    {/* отправка записи в массив задачи */}

    addTakes(text);

    {/*Очистка поля ввода после отправки  */}  
    setText();

    navigate("/");
    
    
    }



    return(
        <div className="Zapis_del">
         <h1>Запись дел</h1>
         <input value={text} onChange={(e) => setText(e.target.value) } placeholder = "Введите задачу" />
         <button onClick={handleAdd}> Опубликовать</button> 
        </div>
    ); 
}

export default Zapis_del; 