import './Header.css'

import React from 'react'; 

type HeaderProps = {
  acronym: string,
};

export const Header = ({ acronym }: HeaderProps) => {
  return (
    <header className="header">
      {acronym}
    </header>
  )
}