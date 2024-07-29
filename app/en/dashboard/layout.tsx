import Sidebar from '@/components/_components/sidebar';
import SidebarEn from '@/components/_components/sidebarEn';

import React from 'react' 


const layout = async({ children }: Readonly<{
  children: React.ReactNode;
}>) => {


  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SidebarEn/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
       {children}
      </div>
    </div>
  )
}

export default layout