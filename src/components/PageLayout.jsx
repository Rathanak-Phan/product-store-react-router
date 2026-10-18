import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function PageLayout() {
  return (
    <div>
        {/* Header */}
        <div>
            <Header />
        </div>

        {/* Page content */}
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default PageLayout