import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";

interface PictureProps extends ImageProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  testId?: string;
  src: string | StaticImageData;
  width?: number;
  height?: number;
}

const Picture: React.FC<PictureProps> = ({
  className,
  id,
  style,
  src,
  alt,
  width,
  testId,
  height,
}) => {
  return (
    <picture
      data-testid={testId}
      style={{ position: "relative", width, height, ...style }}
      className={className}
      id={id}
    >
      <Image src={src} alt={alt} layout="fill" />
    </picture>
  );
};

Picture.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
  testId: undefined,
  width: undefined,
  height: undefined,
};

export { Picture };
