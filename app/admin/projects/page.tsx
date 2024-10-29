"use client";
import { Text, Table, Title } from "@mantine/core";
import {
  IconCheckbox,
  IconEdit,
  IconRowRemove,
  IconSquareX,
} from "@tabler/icons-react";
import Link from "next/link";

const elements = [
  {
    id: 1,
    title: "Project A",
    description: 101.01,
    url: "https://example.com/A",
    is_featured: false,
  },
  {
    id: 2,
    title: "Project B",
    description: 102.02,
    url: "https://example.com/B",
    is_featured: false,
  },
  {
    id: 3,
    title: "Project C",
    description: 103.03,
    url: "https://example.com/C",
    is_featured: true,
  },
  {
    id: 4,
    title: "Project D",
    description: 104.04,
    url: "https://example.com/D",
    is_featured: false,
  },
  {
    id: 5,
    title: "Project E",
    description: 105.05,
    url: "https://example.com/E",
    is_featured: true,
  },
  {
    id: 6,
    title: "Project F",
    description: 106.06,
    url: "https://example.com/F",
    is_featured: false,
  },
  {
    id: 7,
    title: "Project G",
    description: 107.07,
    url: "https://example.com/G",
    is_featured: false,
  },
  {
    id: 8,
    title: "Project H",
    description: 108.08,
    url: "https://example.com/H",
    is_featured: false,
  },
];

const Projects = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.url}</Table.Td>
      <Table.Td>{element.is_featured && <IconCheckbox />}</Table.Td>
      <Table.Td className="flex">
        <Link
          href={`/admin/projects/${element.id}`}
          className="flex items-center justify-start gap-1"
        >
          <IconEdit />
        </Link>
        <IconSquareX />
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
    </div>
  );
};

export default Projects;
