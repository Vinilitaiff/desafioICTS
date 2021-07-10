import { createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;  
}

interface ModalAddProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddProduct: (data: Product) => void;
}

function ModalAddProduct({ isOpen, setIsOpen, handleAddProduct }: ModalAddProductProps) {
  const formRef = createRef<FormHandles>();

  async function handleSubmit(data: Product) {
    handleAddProduct(data);
    setIsOpen();
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Produto</h1>

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-product-button">
          <p className="text">Adicionar Produto</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddProduct;
