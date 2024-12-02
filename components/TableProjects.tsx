"use client";

import { Button, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCheckbox, IconEdit, IconSquareX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { deleteProject } from "@/lib/actions/project.action";
import { usePathname } from "next/navigation";

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
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );
  const [opened, { open, close }] = useDisclosure(false);

  const pathname = usePathname();

  const handleOpenDeleteModal = (project: ProjectProps) => {
    setSelectedProject(project);
    open();
  };

  const handleDelete = async () => {
    console.log("Deleting project:", selectedProject);
    await deleteProject({ projectId: selectedProject!.id, path: pathname });
    close();
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.url}</Table.Td>
      <Table.Td>{element.isFeatured && <IconCheckbox />}</Table.Td>
      <Table.Td>
        <Button component={Link} href={`/admin/project/${element.id}`}><IconEdit size={16} /></Button>
        <Button onClick={() => handleOpenDeleteModal(element)} color="red"><IconSquareX size={16} /></Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Table.ScrollContainer minWidth={500}>
        <Table striped withTableBorder withColumnBorders>
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
    </>
  );
};

export default TableProjects;
