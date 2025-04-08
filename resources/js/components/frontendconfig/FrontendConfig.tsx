import { BreadcrumbItem } from '@/types';
import React, { ReactNode } from 'react';
import Navbar from './navbar/Navbar';

interface FrontendConfigProps {
  children: ReactNode;
  navigation?: boolean;
    //  breadcrumbs?: BreadcrumbItem[];
}

function FrontendConfig({ children, navigation = false, }: FrontendConfigProps) {
  return (
    <div>
      {navigation && (
       <Navbar/>
      )}
      <div>
        {children}
      </div>
    </div>
  );
}

export default FrontendConfig;
