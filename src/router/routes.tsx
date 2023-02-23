import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import VideoPage from '../pages/videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/videos',
        element: <VideoPage />,
      },
    ],
  },
]);
export default router;
