import {
  createBrowserRouter,
} from "react-router-dom";
import StoreIndex from "../store/StoreIndex";
import ProductIndex from "../producs/ProductIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreIndex />,
  },
  {
    path: "/productos",
    element: <ProductIndex />,
  },
  {
    path: "/tiendas",
    element: <StoreIndex />,
  },
]);
export default router