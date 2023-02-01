import React from 'react'; 
import { Header } from '../../components';

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header acronym="MC" />
      {children}
    </>
  )
}