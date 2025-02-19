type ImageListContainerProps = {
  cols?: number;
  rowHeight?: number | string | 'auto';
  variant?: 'standard' | 'woven' | 'masonry';
  gap?: number;
  rootProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;
} & Pick<React.ComponentPropsWithoutRef<'div'>, 'children'>;

type ImageListItemProps = {
  colSpan?: number;
  rowSpan?: number;
  rootProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;
} & Pick<React.ComponentPropsWithoutRef<'div'>, 'children'>;

type ImageItemProps = {
  title: string;
  img: string;
  rootProps?: React.ComponentPropsWithoutRef<'img'>;
};
