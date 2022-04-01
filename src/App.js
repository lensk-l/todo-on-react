import './App.css';
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";


function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first Todo',
            status: true,
        },
        {
            id: 2,
            title: 'second Todo',
            status: true,
        },
        {
            id: 3,
            title: 'third Todo',
            status: false,
        }
    ])
    return (

        <Container>
            <Header/>
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </Container>
    );
}

export default App;
