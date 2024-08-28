"use client"
import React, { FC, ReactNode } from 'react'
import SharedLayout from './shared-layout'
import ChatSidebar from './chat-sidebar'

type ChatsLayoutProps = {
    children: ReactNode
}
const ChatsLayout: FC<ChatsLayoutProps> = ({ children }) => {
    return (
        <SharedLayout SidebarComponent={() => <ChatSidebar />}>{children}</SharedLayout>
    )
}

export default ChatsLayout