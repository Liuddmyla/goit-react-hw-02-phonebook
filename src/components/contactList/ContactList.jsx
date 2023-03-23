import { ContactListItem } from "../contactListItem/ContactListItem"

export const ContactList = ({visibleContacts}) => {
    return (
        <ul>
            {(visibleContacts).map(contact => ( 
                <li key={contact.id}>                    
                    <ContactListItem contact={contact}/>
                </li>  
            ))}
        </ul>
    )
}

