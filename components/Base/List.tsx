import React from "react";

interface ListProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
  listType: "ol" | "ul";
}

const List: React.FC<ListProps> = ({
  className,
  id,
  style,
  children,
  listType,
}) => {
  const ListTag: keyof JSX.IntrinsicElements = `${listType}`;
  return (
    <ListTag style={style} className={className} id={id}>
      {children}
    </ListTag>
  );
};

List.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
};

export { List };
