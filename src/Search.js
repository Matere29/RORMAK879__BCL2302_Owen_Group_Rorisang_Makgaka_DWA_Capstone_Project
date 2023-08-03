import React, {useState} from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Search() {
    const [search, setSearch] = useState('')
  return (
    <Container className="d-flex flex-column py-2" style={{height: "100vh"}}>
       <Form.Control type="search"
        placeholder="episodes "
         value={search}
         onChange={e=> setSearch(e.target.value)}
         />
 <div className="flex-grow-1 my-2" style={{overFlowY:'auto'}} >
    Episodes
 </div>
 <div>Bottom</div>
    </Container>
  )
}

