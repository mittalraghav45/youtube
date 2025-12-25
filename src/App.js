import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ShortsContainer from "./components/ShortsContainer";

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
