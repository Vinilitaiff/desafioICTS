import { useEffect, useState } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import ModalAddProduct from "../../components/ModalAddProduct";
import ModalEditProduct from "../../components/ModalEditProduct";
import { ProductsContainer } from "./styles";
import Product from "../../components/Product";

interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;  
}

interface editingProduct {
  product: IProduct;
  editModalOpen: boolean;
}

function Dashboard() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [editingProduct, setEditingProduct] = useState({} as editingProduct);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<IProduct[]>("/products");
      setProducts(response.data);
    }
    console.log("entrei aqui");
    loadProducts();
  }, []);

  async function handleAddProduct(product: IProduct) {
    try {      
      const response = await api.post<IProduct>("/products", {
        ...product,        
      });

      setProducts([...products, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const handleEditProduct = (product: IProduct) => {
    setEditingProduct({ product, editModalOpen: true });
    setEditModalOpen(true);
  };

  const handleUpdateProduct = async (product: IProduct) => {
    try {
      const productUpdated = await api.put(`/products`, {
        ...editingProduct,
        ...product,
      });

      const productsUpdated = products.map((f) =>       
        f.id !== `${editingProduct.product.id}` ? f : productUpdated.data
      );      

      setProducts(productsUpdated);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    await api.delete(`/products/${id}`);

    const productsFiltered = products.filter((product) => product.id !== id);

    setProducts(productsFiltered);
  };

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddProduct
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddProduct={handleAddProduct}
      />
      <ModalEditProduct
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}        
        editingProduct={editingProduct}
        handleUpdateProduct={handleUpdateProduct}
      />

      <ProductsContainer data-testid="products-list">
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleDelete={handleDeleteProduct}
              handleEditProduct={handleEditProduct}
            />
          ))}
      </ProductsContainer>
    </>
  );
}

export default Dashboard;
