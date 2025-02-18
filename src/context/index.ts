import { createContext } from 'react';

export const ImageListContext = createContext<
  Pick<ImageListContainerProps & {}, 'rowHeight' | 'variant'>
>({ rowHeight: 'auto', variant: 'standard' });
