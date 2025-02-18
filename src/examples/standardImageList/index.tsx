import { itemData } from '@/assets/imagesData';
import { ImageListContainer } from '@/components/imageListContainer';
import { Image, ImageListItem } from '@/components/imageListItem';

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
