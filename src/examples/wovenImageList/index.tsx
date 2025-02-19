import { itemData } from '@/assets/imagesData';
import { Image, ImageListContainer, ImageListItem } from '@/components';

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
