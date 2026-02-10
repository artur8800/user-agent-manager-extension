'use client';

interface AppBarProps {
  logo: string;
}

function AppBar({ logo }: AppBarProps) {
  return (
    <div className="flex items-center gap-2 p-4 justify-center bg-primary">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default AppBar;
