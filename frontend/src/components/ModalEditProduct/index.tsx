import { createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;  
}

interface editingProduct {
  product: Product;
  editModalOpen: boolean;
}

interface ModalEditProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateProduct: (data: Product) => void;
  editingProduct: editingProduct;
}

function ModalEditProduct({
  isOpen,
  setIsOpen,
  handleUpdateProduct,
  editingProduct,
}: ModalEditProductProps) {
  const formRef = createRef<FormHandles>();

  async function handleSubmit(data: Product) {    
    handleUpdateProduct(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingProduct}>
        <h1>Editar Produto</h1>

        <Input name="name" placeholder="Ex: Roupa" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-product-button">
          <div className="text">Editar Produto</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditProduct;
