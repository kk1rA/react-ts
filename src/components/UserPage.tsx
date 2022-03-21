import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IUser } from '../types/type';
import List from './List';
import UserItem from './UserItem';

const UserPage: React.FC = () => {
  const [users, SetUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      SetUsers(response.data);
    } catch(e) {
      alert(e);
    }
  }

  return (
    <div>
        <List 
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  )
}

export default UserPage