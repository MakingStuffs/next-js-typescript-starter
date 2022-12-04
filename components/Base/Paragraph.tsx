import React from "react";

interface ParagraphProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
  testId?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  id,
  style,
  testId,
  children,
}) => {
  return (
    <p data-testid={testId} style={style} className={className} id={id}>
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
  testId: undefined,
};

export { Paragraph };
