import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState(null)

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <Link to ="/"><li>Contacts List</li></Link>
          <Link to="/contacts/add"><li>Add New Contact</li></Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsList />}></Route>
          <Route path="/contacts/add" element={<ContactsAdd />}></Route>
          <Route path="/contacts/:id" element={<ContactsView />}></Route>
          </Routes>
      </main>
    </>
  )
}
