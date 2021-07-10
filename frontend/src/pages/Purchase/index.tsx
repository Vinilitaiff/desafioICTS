import { useEffect, useState } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import ModalAddPurchase from "../../components/ModalAddPurchase";
import ModalEditPurchase from "../../components/ModalEditPurchase";
import { PurchasesContainer } from "./styles";
import Purchase from "../../components/Purchase";

interface IPurchase {
  id: string;
  total: number;
  typeOfPurchase: string;
  status: string;
  product_id: string;
}

interface editingPurchase {
  purchase: IPurchase;
  editModalOpen: boolean;
}

function Dashboard() {
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  const [editingPurchase, setEditingPurchase] = useState({} as editingPurchase);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadPurchases() {
      const response = await api.get<IPurchase[]>("/purchases");
      setPurchases(response.data);
    }
    loadPurchases();
  }, []);

  async function handleAddPurchase(purchase: IPurchase) {
    try {
      const response = await api.post<IPurchase>("/purchases", {
        ...purchase,
        available: true,
      });

      setPurchases([...purchases, response.data]);
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

  const handleEditPurchase = (purchase: IPurchase) => {
    setEditingPurchase({ purchase, editModalOpen: true });
    setEditModalOpen(true);
  };

  const handleUpdatePurchase = async (purchase: IPurchase) => {
    try {
      const purchaseUpdated = await api.put(`/purchases`, {
        ...editingPurchase,
        ...purchase,
      });

      const purchasesUpdated = purchases.map((f) =>
        f.id !== `${editingPurchase.purchase.id}` ? f : purchaseUpdated.data
      );

      setPurchases(purchasesUpdated);
    } catch (err) {
      console.log(err);
    }
  };
  

  const handleDeletePurchase = async (id: string) => {
    await api.delete(`/purchases/${id}`);

    const purchasesFiltered = purchases.filter((purchase) => purchase.id !== id);

    setPurchases(purchasesFiltered);
  };

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddPurchase
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddPurchase={handleAddPurchase}
      />
      <ModalEditPurchase
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingPurchase={editingPurchase}
        handleUpdatePurchase={handleUpdatePurchase}
      />

      <PurchasesContainer data-testid="purchases-list">
        {purchases &&
          purchases.map((purchase) => (
            <Purchase
              key={purchase.id}
              purchase={purchase}
              handleDelete={handleDeletePurchase}
              handleEditPurchase={handleEditPurchase}              
            />         
          ))}
      </PurchasesContainer>
    </>
  );
}

export default Dashboard;
