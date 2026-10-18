import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <main className='flex'>
        <div className='w-84'>
            <Sidebar />
        </div>

        {/* Main content */}
        <div className='p-5 w-full'>
            <Outlet />
        </div>
    </main>
  )
}

export default DashboardLayout