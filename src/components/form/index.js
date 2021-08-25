import React, { useState, useEffect } from 'react'
import { Input, Button } from './styles'

const initialForm = {
  id: null,
  description: ''
}

const Form = ({ createData, updateData, editedData, setEditedData }) => {
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if (editedData) {
      setForm(editedData)
    } else {
      setForm(initialForm)
    }
  }, [editedData])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.description) {
      alert('Required Data')
      return
    }
    if (form.id === null) {
      createData(form)
    } else {
      updateData(form)
    }

    handleReset(e)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleReset = (e) => {
    setForm(initialForm)
    setEditedData(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' name='description' placeholder='Task' value={form.description} onChange={handleChange} />
      <Button>Save</Button>
      {editedData && <Button onClick={handleReset}>Reset</Button>}
    </form>
  )
}

export default Form
