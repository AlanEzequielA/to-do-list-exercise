import TRow from "./trow"
import { Table, Th, Td } from "./styles"

const List = ({ tasks, deleteData, setEditedData }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Status</Th>
          <Th>Task</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? <tr><Td colSpan='3'><b>No data</b></Td></tr> : tasks.map(el => <TRow key={el.id} el={el} deleteData={deleteData} setEditedData={setEditedData} />)}
      </tbody>
    </Table>
  )

}

export default List