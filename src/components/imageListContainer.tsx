import { ImageListContext } from '@/context';
import React from 'react';

export const DEFAULT_ROW_HEIGHT = 165;

export const ImageListContainer: React.FC<ImageListContainerProps> = ({
  cols = 3,
  rowHeight = 'auto',
  variant = 'standard',
  gap = 4,
  children,
  rootProps = {},
}) => {
  const { style, ...rest } = rootProps;

  // get children length to determine the number of rows and their specified height
  const rowCount = Math.round(React.Children.count(children) / cols);
  const rowHeightUnit = typeof rowHeight === 'number' ? 'px' : '';
  const computedRowHeight =
    typeof rowHeight === 'number'
      ? rowHeight < DEFAULT_ROW_HEIGHT
        ? DEFAULT_ROW_HEIGHT
        : rowHeight
      : rowHeight;

  return (
    <div
      id='image-list-container'
      style={{
        height: 500,
        width: 450,
        //
        overflowY: 'auto',
        // grid structuring
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        ...(variant === 'masonry'
          ? { gridAutoRows: `${computedRowHeight + rowHeightUnit} auto` }
          : {
              gridTemplateRows: `repeat(${rowCount}, minmax(${computedRowHeight + rowHeightUnit}, 1fr))`,
            }),
        gap: gap + 'px',
        // override styles
        ...style,
      }}
      {...rest}
    >
      <ImageListContext.Provider
        value={{ rowHeight: computedRowHeight, variant, rowCount }}
      >
        {children}
      </ImageListContext.Provider>
    </div>
  );
};
