import { Button, Modal, Text } from "@mantine/core";

interface DeleteModalProps {
    name: string;
    opened: boolean;
    close: () => void;
    onDelete: () => void;
  }

const DeleteModal = ({ name, opened, close, onDelete }: DeleteModalProps) => {
  return (
    <Modal opened={opened} onClose={close} withCloseButton={false}>
      <Text>Are you sure you want to delete <span className="font-bold">{name}</span>?</Text>
      <div className="flex">
        <Button onClick={close}>Cancel</Button>
        <Button color="red" onClick={onDelete}>Delete</Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
