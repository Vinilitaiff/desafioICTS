import { FiEdit3, FiTrash } from "react-icons/fi";

import { Container } from "./styles";

interface PurchaseProps {
  purchase: Purchase;
  handleEditPurchase: (purchase: Purchase) => void;
  handleDelete: (id: string) => void;
}
interface Purchase {
  id: string;
  total: number;
  typeOfPurchase: string;
  status: string;
  product_id: string;
}

function Purchase({ purchase, handleEditPurchase, handleDelete }: PurchaseProps) {

  function setEditingPurchase() {
    handleEditPurchase(purchase);
  }

  return (
    <Container >     
      <section className="body">
        <h2>{purchase.typeOfPurchase}</h2>
        <p>{purchase.status}</p>
        <p className="price">
          R$ <b>{purchase.total}</b>
        </p>
        <p>ID: {purchase.product_id}</p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={setEditingPurchase}
            data-testid={`edit-purchase-${purchase.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(purchase.id)}
            data-testid={`remove-purchase-${purchase.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>
       
      </section>
    </Container>
  );
}
export default Purchase;
