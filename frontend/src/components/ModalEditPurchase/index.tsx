import { createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface Purchase {
  id: string;
  total: number;
  typeOfPurchase: string;
  status: string;
  product_id: string;
}

interface editingPurchase {
  purchase: Purchase;
  editModalOpen: boolean;
}

interface ModalEditPurchaseProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdatePurchase: (data: Purchase) => void;
  editingPurchase: editingPurchase;
}

function ModalEditPurchase({
  isOpen,
  setIsOpen,
  handleUpdatePurchase,
  editingPurchase,
}: ModalEditPurchaseProps) {
  const formRef = createRef<FormHandles>();

  async function handleSubmit(data: Purchase) {
    handleUpdatePurchase(data);
    setIsOpen();
  } 

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingPurchase}>
        <h1>Editar Compra</h1>        
        
        <Input name="total" placeholder="Total" />

        <Input name="typeOfPurchase" placeholder="Tipo da Pagamento" />
        <Input name="status" placeholder="Status" />

        <button type="submit" data-testid="edit-purchase-button">
          <div className="text">Editar Compra</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditPurchase;
