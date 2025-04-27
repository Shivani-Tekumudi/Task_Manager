import Card from 'react-bootstrap/Card';
import { useDraggable } from '@dnd-kit/core';


export default function TaskCard({task}){
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id.toString(), // Important to use string ids in dnd-kit
  });
  const style = {
    transform: transform
    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
    : undefined,
  marginBottom: '10px',
  cursor: 'grab',
  zIndex: transform ? 999 : 'auto',  
  position: transform ? 'relative' : 'static', 
  };


    return(
        <Card className="mb-3 taskcard" ref={setNodeRef} style={style} {...listeners} {...attributes}>

<Card.Body>
       
        <Card.Text className='card-title'>
          {task.title}
        </Card.Text>
        <div className='text-end'>
            <span className={`status-btn-${task.status}`}>
                {task.status}
            </span>
        </div>
      </Card.Body>
      
        </Card>
    )
}