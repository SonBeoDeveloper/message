"use client"
import { FC, ReactNode, useEffect, useState } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { useSidebarWidth } from '@/hooks/use-sidebar-width';

type SharedLayoutProp = {
    children: ReactNode;
    SidebarComponent: FC<any>;
    SidebarProp?: any
}

const SharedLayout: FC<SharedLayoutProp> = ({ children, SidebarComponent, SidebarProp }) => {
    const [isRendered, setIsRendered] = useState(false);
    const { setSidebarWidth, sidebarWidth } = useSidebarWidth()
    useEffect(() => {
        setIsRendered(true)
    }, [])
    if (!isRendered) return null
    return (
        <>
            <ResizablePanelGroup direction='horizontal'>
                <ResizablePanel
                    onResize={width => setSidebarWidth(width)}
                    defaultSize={30}
                    maxSize={40}
                    minSize={20}>
                    <SidebarComponent {...SidebarProp} />
                </ResizablePanel>
                <ResizableHandle className='border-r border-r-gray-800' withHandle />
                <ResizablePanel className='!overflow-y-auto my-20'>
                    <div className="h-full hidden md:block">{children}</div>
                </ResizablePanel>
            </ResizablePanelGroup>
            <div className="md:hidden">{children}</div>

        </>

    )
}

export default SharedLayout