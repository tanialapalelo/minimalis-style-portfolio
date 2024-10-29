import { getUserById } from '@/lib/actions/user.action'
import { Title } from '@mantine/core';
import React from 'react'

const AdminDashboard = async () => {
  const userId = "fakeId";
  if (!userId) return null;
  const mongoUser = getUserById(userId);
  
  return (
    <div>
      <Title order={2}>Welcome {mongoUser.name || 'Admin'}</Title>
    </div>
  )
}

export default AdminDashboard