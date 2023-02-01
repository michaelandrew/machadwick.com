import './Title.css'

import React from 'react'; 

type TitleProps = {
  title: string,
  description: string
};

export const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="title">
      <h1 className="title__heading">
        {title}
      </h1>
      <p className="title__sub">
        {description}
      </p>
      <div className="title__contact">
        <a href="https://github.com/michaelandrew"
          rel="noopener noreferrer" 
          target="_blank">
          Github
        </a>
      </div>
    </div>
  )
}