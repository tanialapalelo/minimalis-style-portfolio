"use client";

import { Table, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCheckbox,
  IconEdit,
  IconSquareX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  url: string;
  codeUrl: string;
  imageUrl: string;
  isFeatured: boolean;
}

interface TableProjectsProps {
  elements: ProjectProps[];
}

const TableProjects: React.FC<TableProjectsProps> = ({ elements }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const handleOpenDeleteModal = (project: ProjectProps) => {
    setSelectedProject(project);
    open();
  };

  const handleDelete = () => {
    console.log("Deleting project:", selectedProject);
    close();
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.url}</Table.Td>
      <Table.Td>{element.isFeatured && <IconCheckbox />}</Table.Td>
      <Table.Td className="flex">
        <Link
          href={`/admin/projects/${element.id}`}
          className="flex items-center justify-start gap-1"
        >
          <IconEdit />
        </Link>
        <IconSquareX onClick={() => handleOpenDeleteModal(element)} style={{ cursor: "pointer" }} />
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <Title order={2} mb={"md"}>List of Projects</Title>

      <Table.ScrollContainer minWidth={500}>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
            <Table.Tr>
                <Table.Th>Title</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Url</Table.Th>
                <Table.Th>Is Featured</Table.Th>
                <Table.Th>Action</Table.Th>
            </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      
      {selectedProject && (
        <DeleteModal
          name={selectedProject.title}
          opened={opened}
          close={close}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
};

export default TableProjects;
