import './App.css';
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";


function App() {
    const [todo, setTodo] = useState(localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []);

    const setTodosWithSave = (newTodo) => {
        setTodo(newTodo);
        localStorage.setItem('todo', JSON.stringify(newTodo))
    }

    return (

        <Container>
            <Header/>
            <AddTodo todo={todo} setTodosWithSave={setTodosWithSave}/>
            <TodoList todo={todo} setTodosWithSave={setTodosWithSave}/>
        </Container>
    );
}

export default App;
