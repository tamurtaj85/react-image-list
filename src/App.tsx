import './App.css';
import {
  ImageListWithItemBar,
  MasonryImageList,
  QuiltedImageList,
  StandardImageList,
  WovenImageList,
} from './examples';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div>
        <p>Standard Image List</p>
        <StandardImageList />
      </div>
      <div>
        <p>Quilted Image List</p>
        <QuiltedImageList />
      </div>
      <div>
        <p>Woven Image List</p>
        <WovenImageList />
      </div>
      <div>
        <p>Masonry Image List</p>
        <MasonryImageList />
      </div>
      <div>
        <p>Image List With Item Bar</p>
        <ImageListWithItemBar />
      </div>
    </div>
  );
}

export default App;
