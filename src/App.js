import React, {useState} from 'react';
import './App.css';


function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,settodo]=useState('')


  let deleteItem=(item)=>{
    console.log(toDos);
    const allItems = toDos
    allItems.splice(item, 1)
    settodo({
      toDos: allItems
    })
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>settodo(e.target.value) } type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos(
          [...toDos,{id:Date.now(), text:toDo, status:false,}])
          
          } className="fas fa-plus"></i>
        
      </div>
      <div className="todos">
     {console.log(toDos)}
       { toDos.map((data,index)=>{
         
          return(
            
        <div className="todo">
          <div className="left">
            
            <input onChange={(e)=>{
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===data.id){
                  obj2.status=e.target.checked
                  
                  
                }
                return obj2
              }))
            }} value={data.status} type="checkbox" name="" id="" />
            <p>{data.text}</p>
            
            
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>deleteItem(index)}></i>
          </div>
        </div>
     
          )
        })

        
      }

      {
        toDos.map(data=>{
          if(data.status)
          {
            return(
              <h1>{data.text}</h1>
            )
          }
        })
      }
       </div>
      
    </div>
  );
}

export default App;