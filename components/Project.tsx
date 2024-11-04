"use client";
import { createProject, editProject } from "@/lib/actions/project.action";
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
import { usePathname, useRouter } from "next/navigation";

interface ProjectProps {
  type?: string;
  projectDetail?: string;
}

export function Project({ type, projectDetail }: ProjectProps) {
  const parsedProjectDetail = projectDetail && JSON.parse(projectDetail || "");

  const pathname = usePathname(); // to know which url are we on now
  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: parsedProjectDetail?.title || "",
      url: parsedProjectDetail?.url || "",
      codeUrl: parsedProjectDetail?.url || "",
      description: parsedProjectDetail?.description || "",
      is_featured: parsedProjectDetail?.isFeatured || false,
      imageUrl: parsedProjectDetail?.imageUrl || "/assets/images/portfolio.png",
    },
    validate: {
      title: (value) => (value.trim().length < 2 ? "Title is too short" : null),
      url: (value) => (value.trim().length < 2 ? "URL is too short" : null),
      codeUrl: (value) => (value.trim().length < 2 ? "URL is too short" : null),
      description: (value) =>
        value.trim().length < 2 ? "Description is too short" : null,
      is_featured: (value) =>
        typeof value !== "boolean" ? "Invalid value for featured" : null,
      imageUrl: (value) =>
        value.trim().length < 2 ? "Image url is too short" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    console.log("Form values:", values);
    if (type === "edit") {
      await editProject({
        projectId: parsedProjectDetail._id,
        title: values.title,
        description: values.description,
        url: values.url,
        codeUrl: values.codeUrl,
        imageUrl: values.imageUrl,
        isFeatured: values.is_featured,
        path: pathname,
      });
      router.push(`/admin/project/${parsedProjectDetail._id}`);
    }
    else {
      await createProject({
        title: values.title,
        description: values.description,
        url: values.url,
        codeUrl: values.codeUrl,
        imageUrl: values.imageUrl,
        isFeatured: values.is_featured,
        path: pathname,
      });
      router.push('/admin/project/');
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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

      <TextInput
        label="Code Url"
        placeholder="Code Url"
        name="codeUrl"
        {...form.getInputProps("codeUrl")}
      />
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
            alt="projectImage"
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
