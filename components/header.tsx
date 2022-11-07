type HeaderProps = {
  acronym: string,
};

const Header = ({ acronym }: HeaderProps) => (
  <header className="header">
    {acronym}
  </header>
)

export default Header