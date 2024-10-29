import {
  createBrowserRouter,
} from "react-router-dom";
import StoreIndex from "../store/StoreIndex";
import ProducsIndex from "../producs/ProducsIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreIndex />,
  },
  {
    path: "/productos",
    element: <ProducsIndex />,
  },
  {
    path: "/tiendas",
    element: <StoreIndex />,
  },
]);
export default router