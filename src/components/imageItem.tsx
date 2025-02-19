import { ImageListContext } from '@/context';
import { useContext } from 'react';
import { DEFAULT_ROW_HEIGHT } from './imageListContainer';

export const Image: React.FC<ImageItemProps> = ({
  title,
  img,
  rootProps = {},
}) => {
  const { variant } = useContext(ImageListContext);
  const {
    style,
    srcSet,
    src,
    alt,
    className,
    loading = 'lazy',
    ...rest
  } = rootProps;

  return (
    <img
      id='image-item'
      srcSet={srcSet ?? img}
      src={src ?? img}
      alt={alt ?? title}
      loading={loading}
      className={`${variant === 'woven' ? 'wovenStyles' : ''} ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: DEFAULT_ROW_HEIGHT,
        objectFit: 'cover',
        ...style,
      }}
      {...rest}
    />
  );
};
