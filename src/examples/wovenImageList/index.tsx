import { itemData } from '@/assets/imagesData';
import { ImageListContainer } from '@/components/imageListContainer';
import { Image, ImageListItem } from '@/components/imageListItem';

export const WovenImageList = () => {
  return (
    <ImageListContainer variant='woven' rowHeight={250}>
      {itemData.map((item) => (
        <ImageListItem key={item.title}>
          <Image img={item.img} title={item.title} />
        </ImageListItem>
      ))}
    </ImageListContainer>
  );
};
