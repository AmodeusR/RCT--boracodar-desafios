import { MainPage, NotFoundPage, Challenges } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MusicPlayer } from "./challenges";

import "./styles/home.scss";

const router = createBrowserRouter([{
  path: "/",
  element: <MainPage />,
  errorElement: <NotFoundPage />
}, {
  path:"desafios",
  element: <Challenges />,
  children: [{
    path:"music-player",
    element: <MusicPlayer />
  }]
}]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
