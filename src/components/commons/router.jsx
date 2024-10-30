import {
  createBrowserRouter,
} from "react-router-dom";
import StoreIndex from "../store/StoreIndex";
import ProductIndex from "../producs/ProductIndex";
import ProductForm from "../producs/productForm";
import StoreForm from "../store/storeForm";

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
    path: "/productos/crear",
    element: <ProductForm />,
  },
  {
    path: "/tiendas",
    element: <StoreIndex />,
  },
  {
    path: "/tiendas/crear",
    element: <StoreForm />,
  },
]);
export default router