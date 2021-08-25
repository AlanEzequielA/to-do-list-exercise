import React, { useState } from 'react'
import { ComponentsWrapper, H1 } from './styles'
import { FormWrapper } from './form/styles'
import Form from "../components/form"
import List from "../components/table"
import Head from "next/head"

const initialTasks = [{ description: 'terminar el to do list', status: false, id: 1 }, { description: 'terminar el to do list', status: false, id: 2 }]

const Components = () => {
  const [tasks, setTasks] = useState(initialTasks)
  const [editedData, setEditedData] = useState(null)

  const createData = (data) => {
    data.id = Date.now()
    setTasks([...tasks, data])
  }

  const deleteData = (data) => {
    let confirmDelete = window.confirm(`Do you really want to delete "${data.description}" ?`) 
    if (confirmDelete) {
      let newTasks = tasks.filter((el) => el.id !== data.id)
      setTasks(newTasks)
    } else{
      return
    }
  }

  const updateData = (form) => {
    let newTasks = tasks.map((el) => (el.id === form.id ? form : el))
    setTasks(newTasks)
  }

  return (
    <ComponentsWrapper >
      <Head>
        <title>To do List</title>
      </Head>
      <H1 >To do List</H1>
      <FormWrapper>
        {editedData ? <h3>Edit Task</h3> : <h3>Add Task</h3> }
        <Form setEditedData={setEditedData} editedData={editedData} createData={createData} updateData={updateData} />
      </FormWrapper>
      <List tasks={tasks} deleteData={deleteData} setEditedData={setEditedData} />
    </ComponentsWrapper >
  )
}

export default Components
