import { MainNav } from '@/components/shad_custom/main-nav'
import TeamSwitcher from '@/components/shad_custom/team-switcher'
import { UserNav } from '@/components/shad_custom/user-nav'
import { Search } from '@/components/shad_custom/search'
import React from 'react'

export default function DashBoardLayout({children}:{ children: React.ReactNode }) {
  return (
    <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        {children}
    </div>
  )
}
