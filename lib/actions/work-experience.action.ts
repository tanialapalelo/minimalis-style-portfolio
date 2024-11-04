"use server";

import WorkExperience from "@/database/work-experience.model";
import { connectToDatabase } from "./mongoose";
import {  CreateWorkExperienceParams, EditWorkExperienceParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getAllWorkExperience() {
  try {
    // connect to DB
    connectToDatabase();
    const workExperience = await WorkExperience.find();
    return workExperience;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getWorkExperienceById(workExperienceId: string) {
  try {
    // connect to DB
    connectToDatabase();
    const workExperience = await WorkExperience.findById(workExperienceId);
    return workExperience;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createWorkExperience(params: CreateWorkExperienceParams) {
  try {
    // connect to DB
    connectToDatabase();

    // create the question, by calling the model but not parsing all the parameters because there's an extra work for tags
    await WorkExperience.create(params);

    revalidatePath(params.path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function editWorkExperience(params: EditWorkExperienceParams) {
  try {
    // connect to DB
    connectToDatabase();
    const {
      workExperienceId,
      jobTitle,
      company,
      startDate,
      endDate,
      description,
      path,
    } = params;

    // create the question, by calling the model but not parsing all the parameters because there's an extra work for tags
    const workExperience = await WorkExperience.findById(workExperienceId);
    if (!workExperience) throw new Error("Work Experience not found");

    workExperience.jobTitle = jobTitle;
    workExperience.description = description;
    workExperience.startDate = startDate;
    workExperience.endDate = endDate;
    workExperience.company = company;
    
    await workExperience.save();

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
