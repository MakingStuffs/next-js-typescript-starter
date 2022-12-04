import React from "react";

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const Header: React.FC<HeaderProps> = ({ className, id, style }) => {
  return <header style={style} className={className} id={id} />;
};

Header.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
};

export { Header };
