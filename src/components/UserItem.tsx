import React from 'react'
import { IUser } from '../types/type'

interface UserItemProps {
    user: IUser;
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
  return (
    <div style={{padding: 15, border: '3px solid green', marginBottom: 20}}>
        {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}.
    </div>
  )
}

export default UserItem;