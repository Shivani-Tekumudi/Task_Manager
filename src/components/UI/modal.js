import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import useTaskStore from '../../store/taskStore';


export default function AddTaskModal(props) {
 
  const [title,setTitle] = useState('');
  const [status,setStatus] =useState('');
  const {addNewTask } = useTaskStore();


  const handleSubmit =(e) =>{
    e.preventDefault(); 
    addNewTask({
      todo: title,
      status: status
    });
   
    setTitle('');
    setStatus('');
    props.onHide();

  }


  return (
    <>
     
      <Modal {...props} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form onSubmit={ handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
      <Form.Label>Select Status</Form.Label>
      <Form.Select aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
      <option>Status</option>
      <option value="todo"> Todo</option>
      <option value="inprogress">In Progress </option>
      <option value="done">Done</option>
    </Form.Select>
    </Form.Group>
    <div className='text-end'>
            <Button className="primary-btn" type="submit">
        Submit
      </Button>
      
            </div>
    
            </Form>
          
            </Modal.Body>
     
      </Modal>
    </>
  );
}

