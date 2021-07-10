import { createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";

interface Purchase {
  id: string;
  total: number;
  typeOfPurchase: string;
  status: string;
  product_id: string;
}

interface ModalAddPurchaseProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddPurchase: (data: Purchase) => void;
}

function ModalAddPurchase({ isOpen, setIsOpen, handleAddPurchase }: ModalAddPurchaseProps) {
  const formRef = createRef<FormHandles>();

  async function handleSubmit(data: Purchase) {
    handleAddPurchase(data);
    setIsOpen();
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Compra</h1>

        <Input name="total" placeholder="Total" />
        <Input name="typeOfPurchase" placeholder="Tipo da Pagamento" />
        <Input name="status" placeholder="Status" />        
        <Input name="product_id" placeholder="ID do Produto" />

        <button type="submit" data-testid="add-purchase-button">
          <p className="text">Adicionar Compra</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddPurchase;
