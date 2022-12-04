import React from "react";
import Link from "next/link";

interface AnchorProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  href: string;
  title: string;
  label: string;
  rel?: string;
  target?: string;
  testId?: string;
}

const Anchor: React.FC<AnchorProps> = ({
  href,
  title,
  label,
  className,
  rel,
  testId,
  target,
  id,
  style,
}) => {
  return (
    <Link rel={rel} href={href}>
      <a
        href={href}
        style={style}
        className={className}
        id={id}
        title={title}
        target={target}
        data-testid={testId}
      >
        {label}
      </a>
    </Link>
  );
};

Anchor.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
  rel: undefined,
  target: undefined,
  testId: undefined,
};

export { Anchor };
