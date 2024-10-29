"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Button,
  Checkbox,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconEdit } from "@tabler/icons-react";
import Image from "next/image";

export function Project() {
  const result = {
    id: 1,
    title: "Project A",
    description: "This is a project",
    url: "https://example.com/A",
    imageUrl: "/assets/images/portfolio.png",
    is_featured: true,
  };

  const form = useForm({
    initialValues: {
      title: result.title || "",
      url: result.url || "",
      description: result.description || "",
      is_featured: result.is_featured || false,
      imageUrl: result.imageUrl || "",
    },
    validate: {
      title: (value) => (value.trim().length < 2 ? "Title is too short" : null),
      url: (value) => (value.trim().length < 2 ? "URL is too short" : null),
      description: (value) =>
        value.trim().length < 2 ? "Description is too short" : null,
      is_featured: (value) =>
        typeof value !== "boolean" ? "Invalid value for featured" : null,
      imageUrl: (value) =>
        value.trim().length < 2 ? "Image url is too short" : null,
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.validate()) {
      // Handle form submission here
      console.log("Form values:", form.values);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Title"
          placeholder="Title"
          name="title"
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Url"
          placeholder="Url"
          name="url"
          {...form.getInputProps("url")}
        />
      </SimpleGrid>

      <Checkbox
        label="Featured"
        mt="md"
        {...form.getInputProps("is_featured", { type: "checkbox" })} // https://mantine.dev/form/use-form/
      />
      <Textarea
        mt="md"
        label="Description"
        placeholder="Your description"
        maxRows={10}
        minRows={5}
        autosize
        name="description"
        {...form.getInputProps("description")}
      />

      <div className="flex items-center justify-between">
        <Text mt={"md"}>Attach Image</Text>
        {form.values.imageUrl && (
          <Button
            leftSection={<IconEdit size={14} />}
            onClick={() => form.setFieldValue("imageUrl", "")}
            size="md"
            my={"md"}
          >
            Edit
          </Button>

          // <button
          //   type="button"
          //   onClick={() => form.setFieldValue("imageUrl", "")}
          //   className="py-1 px-3 focus:outline-none hover:bg-gray-200"
          // >
          //   + edit image
          // </button>
        )}
      </div>

      {form.values.imageUrl ? (
        <div className="col-span-6 sm:col-span-4 shadow">
          <Image
            src={form.values.imageUrl}
            alt="productImage"
            width="1000"
            height="100"
            className="object-cover w-full h-[250px]"
          />
        </div>
      ) : (
        <UploadDropzone
          endpoint={"projectImage"}
          onClientUploadComplete={(url: any) => {
            console.log("files", url);
            form.setFieldValue("imageUrl", url?.[0].url);
            window.alert("Upload completed");
          }}
          onUploadError={(error) => {
            window.alert(`${error?.message}`);
          }}
        />
      )}
      <Group justify="center" mt="xl">
        <Button type="submit" color="rgba(0, 0, 0, 1)" size="md">
          Submit
        </Button>
      </Group>
    </form>
  );
}
