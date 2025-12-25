import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ShortsContainer from "./components/ShortsContainer";
import SportsContainer from "./components/SportsContainer";
import PodcastContainer from "./components/PodcastContainer";
import MusicContainer from "./components/MusicContainer"; 
import GamingContainer from "./components/GamingContainer"; 
import NewsContainer from "./components/NewsContainer"; 


const AppLayout = () => (
  <>
    <Head />
    <Body />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'results',
        element:<MainContainer/>
      },
      {
        path:'shorts',
        element:<ShortsContainer/>
      },
      {
        path:'sports',
        element:<SportsContainer/>
      },
      {
        path:'podcast',
        element:<PodcastContainer/>
      },
      {
        path:'music',
        element:<MusicContainer/>
      },
      {
        path:'gaming',
        element:<GamingContainer/>
      },
      {
        path:'news',
        element:<NewsContainer/>
      },
      
      {
        path:'watch',
        element:<WatchPage/>
      },
    ]
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
