import { ChatContact } from './ChatContact'
import { Group } from './Group'
import { UserContact } from './UserContact'

export type Contacts {
    chats: ChatContact[]
    groups: Group[]
    users: UserContact[]
}