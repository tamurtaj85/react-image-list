import { itemDataQuilted } from '@/assets/imagesData';
import { ImageListContainer } from '@/components/imageListContainer';
import { Image, ImageListItem } from '@/components/imageListItem';

export const QuiltedImageList = () => {
  return (
    <ImageListContainer cols={4}>
      {itemDataQuilted.map((item) => (
        <ImageListItem
          key={item.title}
          colSpan={item?.cols}
          rowSpan={item?.rows}
        >
          <Image img={item.img} title={item.title} />
        </ImageListItem>
      ))}
    </ImageListContainer>
  );
};
