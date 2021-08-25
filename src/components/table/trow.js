import React, { useState } from 'react'
import { EditButton, DeleteButton, Tdcheckbox, Td } from './styles'

const TRow = ({ el, deleteData, setEditedData }) => {
  const [mark, setMark] = useState('no marca')

  const changed = (e) => {
    if (e === false) {
      console.log(mark)
      setMark('no marca')
    } else {
      setMark('marca')
      console.log(mark)
    }
  }

  return (
    <tr>
      <Tdcheckbox><input type='checkbox' onChange={(e) => changed(e.target.checked)} /></Tdcheckbox>
      {mark === 'marca' ? <Td >{el.description}</Td> : <Td checked={true} >{el.description}</Td> }
      <Td>
        <EditButton onClick={() => setEditedData(el)} >Edit</EditButton>
        <DeleteButton onClick={() => deleteData(el)} >Delete</DeleteButton>
      </Td>
    </tr>
  )
}

export default TRow
