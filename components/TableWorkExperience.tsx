"use client";

import { Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconSquareX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { usePathname } from "next/navigation";
import { getJoinedDate } from "@/lib/utils";

interface WorkExpProps {
  id: string;
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

interface TableWorkExperienceProps {
  elements: WorkExpProps[];
}

const TableWorkExperience: React.FC<TableWorkExperienceProps> = ({ elements }) => {
  const [selectedWorkExp, setSelectedWorkExp] = useState<WorkExpProps | null>(
    null
  );
  const [opened, { open, close }] = useDisclosure(false);

  const pathname = usePathname();

  const handleOpenDeleteModal = (project: WorkExpProps) => {
    setSelectedWorkExp(project);
    open();
  };

  const handleDelete = async () => {
    console.log("Deleting project:", selectedWorkExp);
    // await deleteProject({ projectId: selectedWorkExp!.id, path: pathname });
    close();
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.jobTitle}</Table.Td>
      <Table.Td>{element.company}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{getJoinedDate(element.startDate)}</Table.Td>
      <Table.Td>{getJoinedDate(element.endDate)}</Table.Td>
      <Table.Td className="flex">
        <Link
          href={`${pathname}/${element.id}`}
          className="flex items-center justify-start gap-1"
        >
          <IconEdit />
        </Link>
        <IconSquareX
          onClick={() => handleOpenDeleteModal(element)}
          style={{ cursor: "pointer" }}
        />
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Table.ScrollContainer minWidth={500}>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Job Title</Table.Th>
              <Table.Th>Company</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Start Date</Table.Th>
              <Table.Th>End Date</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {selectedWorkExp && (
        <DeleteModal
          name={selectedWorkExp.jobTitle}
          opened={opened}
          close={close}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default TableWorkExperience;
