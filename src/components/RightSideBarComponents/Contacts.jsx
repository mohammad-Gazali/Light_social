import React from 'react'
import Contact from './Contact'
import { contacts } from '../../constants/contacts'

const Contacts = () => {
  return (
    <ul className='fc_s w-full'>
        {contacts.map((contact) => {
            return <Contact key={contact.id} username={contact.name} img={contact.img} />
        })}
    </ul>
  )
}

export default Contacts