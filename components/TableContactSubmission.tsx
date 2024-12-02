"use client";

import { Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconSquareX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { usePathname } from "next/navigation";
import { getCreatedAt } from "@/lib/utils";

interface ContactSubmissionProps {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

interface TableContactSubmissionProps {
  elements: ContactSubmissionProps[];
}

const TableContactSubmission: React.FC<TableContactSubmissionProps> = ({ elements }) => {
  const [selectedContact, setSelectedContact] = useState<ContactSubmissionProps | null>(
    null
  );
  const [opened, { open, close }] = useDisclosure(false);

  const pathname = usePathname();

  const handleOpenDeleteModal = (project: ContactSubmissionProps) => {
    setSelectedContact(project);
    open();
  };

  const handleDelete = async () => {
    console.log("Deleting contact:", selectedContact);
    close();
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
      <Link
          href={`${pathname}/${element.id}`}
        >
          {element.subject}
        </Link>
      </Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.message}</Table.Td>
      <Table.Td>{getCreatedAt(element.createdAt)}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Table.ScrollContainer minWidth={500}>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Subject</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Message</Table.Th>
              <Table.Th>Created At</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {selectedContact && (
        <DeleteModal
          name={selectedContact.subject}
          opened={opened}
          close={close}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default TableContactSubmission;
