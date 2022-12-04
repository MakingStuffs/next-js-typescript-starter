import React from "react";

export const HeadingLevels = [1, 2, 3, 4, 5, 6] as const;
export type HeadingLevel = typeof HeadingLevels[number];

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  className?: string;
  id?: string;
  style: React.CSSProperties;
  testId?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  style,
  content,
  className,
  id,
  testId,
}) => {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  return (
    <Tag data-testid={testId} className={className} id={id} style={style}>
      {content}
    </Tag>
  );
};

Heading.defaultProps = {
  className: undefined,
  id: undefined,
  testId: undefined,
};

export { Heading };
