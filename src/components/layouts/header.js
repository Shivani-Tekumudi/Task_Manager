
import React,{useState} from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import AddTaskModal from '../UI/modal';

export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Stack direction="horizontal" gap={3} className='mt-3'>
        <div className="p-2">
            <h3 className='logo'> Task Manager</h3>
        </div>
        <div className="p-2 ms-auto">
        <Button className='primary-btn align-middle'  onClick={() => setModalShow(true)}> <span className='btn-icon'><i className="bi bi-plus"></i></span>Add New Task</Button>
        </div>
        
        <AddTaskModal  show={modalShow}
        onHide={() => setModalShow(false)}/>
      </Stack>
    );
  }