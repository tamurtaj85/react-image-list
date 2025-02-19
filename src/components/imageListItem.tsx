import { ImageListContext } from '@/context';
import React, { useContext } from 'react';

export const ImageListItem: React.FC<ImageListItemProps> = ({
  colSpan = 1,
  rowSpan = 1,
  children,
  rootProps = {},
}) => {
  const { variant, rowCount } = useContext(ImageListContext);

  const { style, ...rest } = rootProps;

  const safeColSpan = colSpan ?? 1;
  const safeRowSpan = rowSpan ?? 1;

  return (
    <>
      <div
        id='image-list-item'
        style={{
          // border: '1px red dashed',
          position: 'relative',
          // grid spanning for children
          gridColumn: `span ${safeColSpan} / span ${safeColSpan}`,
          gridRow:
            variant === 'masonry'
              ? `span ${Math.round(Math.random() * (rowSpan ?? rowCount))}`
              : `span ${safeRowSpan} / span ${safeRowSpan}`,
          // flex container
          display: 'flex',
          flexDirection: 'column',
          justifyContent: variant === 'woven' ? 'center' : 'start',
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
