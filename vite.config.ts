import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// this package is required to use path resolution set in tsconfig.app.json
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
