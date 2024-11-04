"use server";

import { connectToDatabase } from "./mongoose";
import { CreateProjectParams, DeleteProjectParams, EditProjectParams } from "./shared.types";
import Project from "@/database/project.model";
import { revalidatePath } from "next/cache";

export async function getFeaturedProject() {
  try {
    // connect to DB
    connectToDatabase();
    const project = await Project.find({ isFeatured: true });
    return project;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllProject() {
  try {
    // connect to DB
    connectToDatabase();
    const project = await Project.find();
    return project;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProjectById(projectId: string) {
  try {
    // connect to DB
    connectToDatabase();
    const project = await Project.findById(projectId);
    return project;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createProject(params: CreateProjectParams) {
  try {
    // connect to DB
    connectToDatabase();

    // create the question, by calling the model but not parsing all the parameters because there's an extra work for tags
    await Project.create(params);

    revalidatePath("/admin/project");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function editProject(params: EditProjectParams) {
  try {
    // connect to DB
    connectToDatabase();
    const {
      projectId,
      title,
      imageUrl,
      description,
      isFeatured,
      codeUrl,
      url,
      path,
    } = params;

    // create the question, by calling the model but not parsing all the parameters because there's an extra work for tags
    const project = await Project.findById(projectId);
    if (!project) throw new Error("Project not found");

    project.title = title;
    project.description = description;
    project.codeUrl = codeUrl;
    project.imageUrl = imageUrl;
    project.isFeatured = isFeatured;
    project.url = url;
    console.log("project di db utk update:", project);
    await project.save();

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteProject(params: DeleteProjectParams) {
  try {
    connectToDatabase();
    const {projectId, path} = params;
    await Project.deleteOne({ _id: projectId });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
