import React from 'react';
import styles from "./toDoList.module.css"
// import { Component } from "react";

const ToDoList = ({ todos, onDeleteToDo }) => (
    <ul>
        {todos.map(({ id, text }) => (
            <li className={styles.item} key={id}>
                <p className={styles.text}> {text}</p>
                <button onClick={() => onDeleteToDo(id)} className={styles.button}>Delete</button>
            </li>
        ))}
    </ul>
);


export default ToDoList;
