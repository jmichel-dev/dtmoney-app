import Modal from "react-modal";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewModalTransaction: () => void;
}
export const NewTransactionModal: React.FC<NewTransactionModalProps> = (
  props
) => {
  return (
    <Modal
      isOpen={props.isNewTransactionModalOpen}
      onRequestClose={props.onCloseNewModalTransaction}
    >
      <h1>Modal content</h1>
    </Modal>
  );
};
