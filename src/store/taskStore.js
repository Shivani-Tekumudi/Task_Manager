import { create } from 'zustand';
import { fetchTasks, AddTask,UpdateStatus } from '../Api/fetchTaskdata';

const useTaskStore = create((set) => ({
    tasks: [],
    taskData: async () => {
        const tasks = await fetchTasks();
        set({tasks})
    },
    addNewTask: async (newTask) => {
        const addTask = await AddTask(newTask);
        
        set((state) => ({tasks: [...state.tasks,addTask]}))
    },
    updateTaskStatus : async (id, updateField) => {
        const updateTask = await UpdateStatus(id, {status: updateField});
   set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, ...updateTask } : task
    ),
  }));
    }
})

)



export default useTaskStore;