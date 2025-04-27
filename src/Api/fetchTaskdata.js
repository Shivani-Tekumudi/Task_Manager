import axios from 'axios';

const BASE_URL = "http://localhost:3001/tasks";

export async function fetchTasks() {
try{
const response = await axios.get(BASE_URL);
return response.data;
}
catch(error){
console.log(error);
}

}


export async function AddTask(newTask) {
    try{
        const response = await axios.post(BASE_URL, newTask);
        console.log('res')
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}
export async function UpdateStatus(id, updatedFields){
    try{
        const response = await axios.patch(`${BASE_URL}/${id}`, updatedFields);
        console.log('res')
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}

