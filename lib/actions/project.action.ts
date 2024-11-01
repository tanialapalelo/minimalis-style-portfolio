"use server";

import { connectToDatabase } from "./mongoose";
import { CreateProjectParams } from "./shared.types";
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

    revalidatePath("/admin/projects");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
