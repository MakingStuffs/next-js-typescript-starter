import React from "react";

interface ListItemProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  className,
  id,
  style,
  children,
}) => {
  return (
    <li style={style} className={className} id={id}>
      {children}
    </li>
  );
};

ListItem.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
};

export { ListItem };
