// import React, {
//   useEffect,
//   useState,
//   createContext,
//   useContext,
//   useMemo,
// } from "react";
// import { Products } from "@/typings";
// interface Props {
//   children: React.ReactNode;
// }
// interface IProduct {
//   products: Products[] | null;
// }

// export const ProductContext = createContext<IProduct>({ products: null  });

// const ProductProvider = ({ children }: Props) => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch("https://api.escuelajs.co/api/v1/products");
//       const data = await response.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);
//   const memoedValue = useMemo(() => ({ products }), [products]);
//   return (
//     <ProductContext.Provider value={memoedValue}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;
