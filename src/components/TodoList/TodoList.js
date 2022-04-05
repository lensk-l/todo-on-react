import React, {useEffect, useState} from "react";
import s from './todoList.module.css'
import {Button, ButtonGroup, Container, FormControl, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil, faSquare, faSquareCheck, faTrashCan} from '@fortawesome/free-solid-svg-icons'



function TodoList({todo, setTodosWithSave}) {

    const [editId, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const [filtered, setFilter] = useState(todo);

    useEffect( ()=> {
        setFilter(todo)
    }, [todo])

    function deleteItem(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodosWithSave(newTodo)
    }

    function changeStatus(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodosWithSave(newTodo)
    }

    function editTodo(id, text) {
        setValue(text)
        setEdit(id)
    }

    function updateTask(id) {
        const newTodo = [...todo].filter(task => {
            if (task.id === id) {
                task.title = value
            }
            return task
        })
        setTodosWithSave(newTodo)
        setEdit(null)
    }
    function todoFilter(status) {
        if(status === 'all'){
            setFilter(todo);
        } else {
            let newTodo = [...todo].filter(task => task.status===status)
            setFilter(newTodo)
        }

    }




    return (
        <Container className={s.containerTask}>
            <ButtonGroup className={s.buttGroup} aria-label="Basic example">
                <Button variant="secondary" onClick={()=>todoFilter('all')}>All task</Button>
                <Button variant="success" onClick={()=>todoFilter(true)}>Done tasks</Button>
                <Button variant="danger" onClick={()=>todoFilter(false)}>Not finished tasks</Button>
            </ButtonGroup>
            {
                filtered.map(item => (
                    <Row className={s.taskItem} key={item.id}>
                        <div key={item.id} onDoubleClick={() => editTodo(item.id, item.title)}>
                            {
                                editId === item.id
                                    ? <div className={s.taskBlock2}>
                                        <FormControl className={s.input} value={value}
                                                     onChange={(e) => setValue(e.target.value)}
                                        />
                                        <Button className={s.update} variant="outline-success"
                                                onClick={() => updateTask(item.id)}>
                                            <FontAwesomeIcon icon={faPencil}/>
                                        </Button>
                                    </div>
                                    : <div className={s.taskBlock}>
                                        <p className={item.status ? s.closed : ""}>{item.title}</p>
                                        <Button variant="outline-danger"
                                                onClick={() => deleteItem(item.id)}><FontAwesomeIcon
                                            icon={faTrashCan}/></Button>
                                        <Button variant="outline-success" onClick={() => changeStatus(item.id)}>
                                            {
                                                item.status === true
                                                    ? <FontAwesomeIcon icon={faSquareCheck}/>
                                                    : <FontAwesomeIcon icon={faSquare}/>
                                            }

                                        </Button>
                                    </div>
                            }
                        </div>
                    </Row>
                ))
            }
        </Container>
    )
}

export default TodoList;