import { itemData } from '@/assets/imagesData';
import { Image, ImageListContainer, ImageListItem } from '@/components';

export const StandardImageList = () => {
  return (
    <ImageListContainer>
      {itemData.map((item) => (
        <ImageListItem key={item.title}>
          <Image img={item.img} title={item.title} />
        </ImageListItem>
      ))}
    </ImageListContainer>
  );
};
