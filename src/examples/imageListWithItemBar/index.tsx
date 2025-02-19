import { itemDataWithAction } from '@/assets/imagesData';
import {
  Image,
  ImageListContainer,
  ImageListItem,
  ImageListItemBar,
} from '@/components';

export const ImageListWithItemBar = () => {
  return (
    <ImageListContainer>
      {itemDataWithAction.map((item) => (
        <ImageListItem key={item.title}>
          <Image img={item.img} title={item.title} />
          <ImageListItemBar
            title={item.title}
            subTitle={item.author}
            actionIcon={
              <div
                style={{
                  width: 16,
                  height: 16,
                  padding: 4,
                  border: '1px white solid',
                  borderRadius: '100%',
                  textAlign: 'center',
                }}
              >
                i
              </div>
            }
          />
        </ImageListItem>
      ))}
    </ImageListContainer>
  );
};
