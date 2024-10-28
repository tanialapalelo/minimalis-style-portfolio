"use client"
import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Autocomplete, Loader, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';

export function Project() {
  
  const result = {
    id: 1,
    title: "Project A",
    description: "This is a project",
    url: "https://example.com/A",
    is_featured: true,
  };

  const form = useForm({
    initialValues: {
      title: result.title || "",
      url: result.url || "",
      description: result.description || "",
      is_featured: result.is_featured || false,
    },
    validate: {
      title: (value) => (value.trim().length < 2 ? "Title is too short" : null),
      url: (value) => (value.trim().length < 2 ? "URL is too short" : null),
      description: (value) => (value.trim().length < 2 ? "Description is too short" : null),
      is_featured: (value) => (typeof value !== "boolean" ? "Invalid value for featured" : null),
    },
  });

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Title"
          placeholder="Title"
          name="title"
          {...form.getInputProps('title')}
        />
        <TextInput
          label="Url"
          placeholder="Url"
          name="url"
          {...form.getInputProps('url')}
        />
      </SimpleGrid>

      <Checkbox
        label="Featured"
        mt="md"
        {...form.getInputProps("is_featured", { type: "checkbox" })}
        />
      <Textarea
        mt="md"
        label="description"
        placeholder="Your description"
        maxRows={10}
        minRows={5}
        autosize
        name="description"
        {...form.getInputProps('description')}
      />

      <Group justify="center" mt="xl">
        <Button type='submit' color="rgba(0, 0, 0, 1)" size="md">
            Submit
          </Button>
      </Group>
    </form>
  );
}