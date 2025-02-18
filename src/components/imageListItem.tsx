import { ImageListContext } from '@/context';
import React, { useContext } from 'react';

export const ImageListItem: React.FC<ImageListItemProps> = ({
  colSpan = 1,
  rowSpan = 1,
  children,
  style,
  ...rest
}) => {
  const { variant } = useContext(ImageListContext);

  const safeColSpan = colSpan ?? 1;
  const safeRowSpan = rowSpan ?? 1;

  return (
    <>
      <div
        id='image-list-item'
        style={{
          // border: '1px red dashed',
          //
          gridColumn: `span ${safeColSpan} / span ${safeColSpan}`,
          gridRow:
            variant === 'masonry'
              ? `span ${Math.round(Math.random() * safeRowSpan)}`
              : `span ${safeRowSpan} / span ${safeRowSpan}`,
          // flex container
          display: 'flex',
          flex: 1,
          alignItems: variant === 'woven' ? 'center' : 'start',
          //
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    </>
  );
};

export const Image: React.FC<ImageItemProps> = ({
  title,
  img,
  style,
  className,
  loading = 'lazy',
  ...rest
}) => {
  const { variant } = useContext(ImageListContext);

  return (
    <img
      id='image-item'
      srcSet={img}
      src={img}
      alt={title}
      loading={loading}
      className={`${variant === 'woven' ? 'wovenStyles' : ''} ${className}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }}
      {...rest}
    />
  );
};
