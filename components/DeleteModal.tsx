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
      <Button onClick={close}>Cancel</Button>
      <Button color="red" onClick={onDelete}>Delete</Button>
    </Modal>
  );
};

export default DeleteModal;
