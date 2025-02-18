type ImageListContainerProps = {
  cols?: number;
  rowHeight?: number | string;
  variant?: 'standard' | 'woven' | 'masonry';
  gap?: number;
} & React.ComponentPropsWithoutRef<'div'>;

type ImageListItemProps = {
  colSpan?: number;
  rowSpan?: number;
} & React.ComponentPropsWithoutRef<'div'>;

type ImageItemProps = {
  title: string;
  img: string;
} & React.ComponentPropsWithoutRef<'img'>;
