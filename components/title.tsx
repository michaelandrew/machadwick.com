import { Montserrat } from '@next/font/google'

type TitleProps = {
  title: string,
  description: string
};

const montserrat = Montserrat()

const Title = ({ title, description }: TitleProps) => (
  <>
    <style>{`
      .title {
        margin: 24px;
        bottom: 0;
        position: fixed;
        width: calc(100% - 48px);
        font-family: ${montserrat.style.fontFamily}, Helvetica, Arial, sans-serif;
      }

      .title__heading {
        margin: 0;
        font-size: 44px;
        font-weight: 600;
        letter-spacing: -1px;
      }

      .title__sub {
        margin: 0;
        font-size: 30px;
        max-width: 600px;
        font-weight: 300;
      }

      .title__contact {
        margin-top: 48px;
      }
      
      .title__contact a {
        color: #000;
        font-weight: 400;
        text-decoration: none;
      }

      .title__contact a:hover {
        border-bottom: 1px solid #000;
      }
      
      .title__contact a:not(:first-child) {
        margin-left: 4px;
        padding-left: 4px;
      }
      
      .title__contact a:not(:last-child)::after {
        content: '/';
        margin-left: 4px;
        padding-left: 4px;
      }
    `}</style>
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
  </>
)

export default Title