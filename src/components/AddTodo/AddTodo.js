import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {Button, Col, FormControl, Row} from "react-bootstrap";
import s from './addTodo.module.css'


function AddTodo({todo, setTodosWithSave}) {
    const [value, setValue] = useState('')
    function addTask(){
        if(value) {
            setTodosWithSave(
                [...todo, {
                    id: uuidv4(),
                    title: value,
                    status: false
                }]
            )
            setValue('')
        }
    }



    return(
            <Row className={s.addForm}>
                <Col>
                    <FormControl placeholder={'Add new Task'} value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
                    <Button onClick={addTask}>Add</Button>
                </Col>
            </Row>
    )
}

export default AddTodo;