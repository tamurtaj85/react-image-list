import { itemDataQuilted } from '@/assets/imagesData';
import { ImageListContainer } from '@/components/imageListContainer';
import { Image, ImageListItem } from '@/components/imageListItem';

export const MasonryImageList = () => {
  return (
    <ImageListContainer variant='masonry'>
      {itemDataQuilted.map((item) => (
        <ImageListItem key={item.title} rowSpan={Math.random() * 10}>
          <Image img={item.img} title={item.title} />
        </ImageListItem>
      ))}
    </ImageListContainer>
  );
};
