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
        font-size: 30px;
        max-width: 600px;
        font-weight: 300;
      }
    `}</style>
    <div className="title">
      <h1 className="title__heading">
        {title}
      </h1>
      <p className="title__sub">
        {description}
      </p>
    </div>
  </>
)

export default Title