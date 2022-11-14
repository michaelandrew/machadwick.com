import { Karla } from '@next/font/google'

type HeaderProps = {
  acronym: string,
};

const karla = Karla()

const Header = ({ acronym }: HeaderProps) => (
  <>
    <style>{`
      .header {
        margin: 24px;
        font-size: 28px;
        font-weight: 500;
        font-family: ${karla.style.fontFamily}, Helvetica, Arial, sans-serif;
      }
    `}</style>
    <header className="header">
      {acronym}
    </header>
  </>
)

export default Header