import { FiEdit3, FiTrash } from "react-icons/fi";

import { Container } from "./styles";

interface ProductProps {
  product: Product;
  handleEditProduct: (product: Product) => void;
  handleDelete: (id: string) => void;
}
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

function Product({ product, handleEditProduct, handleDelete }: ProductProps) {

  function setEditingProduct() {
    handleEditProduct(product);    
  }

  return (
    <Container >      
      <section className="body">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">
          R$ <b>{product.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={setEditingProduct}
            data-testid={`edit-product-${product.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(product.id)}
            data-testid={`remove-product-${product.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>
       
      </section>
    </Container>
  );
}
export default Product;
