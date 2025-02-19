import { createContext } from 'react';

export const ImageListContext = createContext<
  Pick<ImageListContainerProps, 'rowHeight' | 'variant'> & { rowCount: number }
>({ rowHeight: 'auto', variant: 'standard', rowCount: 0 });
