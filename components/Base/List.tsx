import React from "react";

interface ListProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
  listType?: "ol" | "ul";
  testId?: string;
}

const List: React.FC<ListProps> = ({
  className,
  id,
  style,
  children,
  listType = "ul",
  testId,
}) => {
  const ListTag: keyof JSX.IntrinsicElements = `${listType}`;
  return (
    <ListTag data-testid={testId} style={style} className={className} id={id}>
      {children}
    </ListTag>
  );
};

List.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
  testId: undefined,
  listType: "ul",
};

export { List };
