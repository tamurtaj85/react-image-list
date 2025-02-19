import { itemDataQuilted } from '@/assets/imagesData';
import { Image, ImageListContainer, ImageListItem } from '@/components';

export const MasonryImageList = () => {
  return (
    <ImageListContainer variant='masonry'>
      {itemDataQuilted.map((item) => (
        <ImageListItem key={item.title}>
          <Image img={item.img} title={item.title} />
        </ImageListItem>
      ))}
    </ImageListContainer>
  );
};
