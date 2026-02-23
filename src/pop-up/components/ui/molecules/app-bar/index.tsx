interface AppBarProps {
  logo: string;
}

function AppBar({ logo }: AppBarProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 p-4 justify-center bg-primary">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default AppBar;
