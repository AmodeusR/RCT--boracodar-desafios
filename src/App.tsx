import { useState } from "react";
import "./styles/home.scss";
import MainPage from "./components/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import MusicPlayer from "./challenges/MusicPlayer";

const router = createBrowserRouter([{
  path: "/",
  element: <MainPage />,
  errorElement: <NotFoundPage />
}, {
  path:"music-player",
  element: <MusicPlayer />
}]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
