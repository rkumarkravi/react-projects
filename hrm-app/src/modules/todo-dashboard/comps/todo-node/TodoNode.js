import moment from 'moment';
import React from 'react'
import { useDrag } from 'react-dnd'
import './TodoNode.css';

function TodoNode({data}) {
    // const [{ isDragging }, dragRef] = useDrag({
    //     type: 'pet',
    //     item: { id, name },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //     })
    // })
    // return (
    //     <div className='pet-card' ref={dragRef}>
    //         {name}
    //         {isDragging && '😱'}
    //     </div>
    // )
    return (
    <div className={`todo-node ${data.priority==='HIGH'?'todo-node-normal-red':'todo-node-normal-other'}`}>
        <div className='todo-node-title'>{moment(data.added).format("HH:mm")}</div>
        <div className='content'><h5>{data.desc}</h5></div>
    </div>
    )
}

export default TodoNode;