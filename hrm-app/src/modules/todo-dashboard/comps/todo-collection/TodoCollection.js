import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import TodoNode from './../todo-node/TodoNode';
import './TodoCollection.css';


function TodoCollection({todos}) {
    // const [basket, setBasket] = useState([])
    // const [{ isOver }, dropRef] = useDrop({
    //     accept: 'pet',
    //     drop: (item) => {console.log(basket);setBasket((basket) => 
    //                         !basket.includes(item) ? [...basket, item] : basket)},
    //     collect: (monitor) => ({
    //         isOver: monitor.isOver()
    //     })
    // })

    // return (
    //     <React.Fragment>
    //         <div className='pets' style={{'display':'flex','gap':'0.5em'}}>
    //             {PETS.map(pet => <TodoNode draggable key={pet.id} id={pet.id} name={pet.date} />)}
    //         </div>
    //         <div className='basket' ref={dropRef} style={{'background':'red','width':'100%','height':'4em'}}>
    //             {basket.map((pet,i) => <TodoNode key={i} id={pet.id} name={pet.date} />)}
    //             {isOver && <div>Drop Here!</div>}
    //         </div>
    //     </React.Fragment>
    // )

    return (
        <div className='todo-collection'>
            <h4>To-do List for: {todos.date}</h4>
            {todos.todoNotes.sort((a,b)=>(a.priority>b.priority)?1:-1).map((y,j)=><TodoNode key={j} data={y} />)}
        </div>
    )
}

export default TodoCollection;