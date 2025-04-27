# Instructions to Run the Project Locally:

Install Dependencies: To run the project locally, first install all the required dependencies by running this command in your terminal:

### `npm install`

# Start the Development Server

Once the dependencies are installed, you can start the development server by running:

### `npm start`

#  Backend Setup (JSON Server)
Run the JSON Server: Start the JSON server to serve your mock API.
### `npm run server`

This command will start the server, typically running on(http://localhost:3001/tasks) 

# Test the Backend:
- Ensure that the backend is running properly by making a GET request to an endpoint like http:// localhost:3001/todos (or the relevant endpoint for your project).
- The backend should respond with your mock data.



### Project Structure and Approach:

## Structure:

# src/:
 Contains the main application code, including components, store management, and business logic.

# components/: 
Contains React components that make up the user interface. Each component is modular and reusable. For example, TaskCard and BoardCols represent individual tasks and columns in the Kanban board.

# store/:
 Houses all the store logic using Zustand. Zustand is used for state management, which makes it easier to manage and update the app's state globally without the need for complex reducers or actions.

# api/:
 Handles all API requests for interacting with the backend, such as fetching, adding, and updating tasks using functions like fetchTasks, AddTask, and UpdateStatus.

# assets/: 
Contains static assets such as images, icons, and any other resources used within the app.

# App.js:
 The entry point for the app that integrates the components, routing, and state management.

# index.js:
 The root file for rendering the app into the DOM.

# public/:
 Contains static assets like images, and the index.html file. The public folder is essential for placing any assets that should be available directly without needing to be bundled by Webpack (like images for the homepage, icons, etc.).

## Approach:

# Modular Approach: 
 The app follows a modular approach where each feature is broken down into small, reusable components. For instance, the Kanban board is made up of columns (BoardCols) and individual tasks (TaskCard), which can be independently maintained and updated.

# State Management with Zustand:
 We are using Zustand for state management. Zustand allows us to manage the global state without needing complex reducers and actions like with Redux. It simplifies the app's state updates and ensures that data is available throughout the app. For example, the tasks state is managed globally, and we can perform actions like adding a new task or updating the task status with simple state updates.

# Dynamic UI with React: 
React powers the dynamic rendering of the UI. We leverage React's component-based architecture to create reusable UI elements. For example, each task is rendered dynamically using the TaskCard component, and tasks are organized within columns (BoardCols).

# Styling with React-Bootstrap:
 React-Bootstrap is used for styling the UI components. It simplifies the design process by providing pre-built, responsive UI components like buttons, cards, modals, and form elements. The UI components are used to quickly build a clean and functional user interface.

# Drag-and-Drop Functionality with @dnd-kit: 
The drag-and-drop functionality is implemented using the @dnd-kit library. This allows users to move tasks across the Kanban board by dragging and dropping them from one column to another. The library provides hooks such as useDraggable and useDroppable to manage drag events and re-order the tasks. The drag events are managed by the handleDragEnd function, which updates the task's status in the global state.






