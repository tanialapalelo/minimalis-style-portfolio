export interface GetProjectById {
  projectId: string;
}

export interface CreateProjectParams {
  title: string;
  description: string;
  url: string;
  codeUrl: string;
  imageUrl: string;
  isFeatured: boolean;
  path: string;
}

export interface EditProjectParams {
  projectId: string;
  title: string;
  description: string;
  url: string;
  codeUrl: string;
  imageUrl: string;
  isFeatured: boolean;
  path: string;
}

export interface DeleteProjectParams {
  projectId: string;
  path: string;
}

export interface GetWorkExperienceById {
  projectId: string;
}

export interface CreateWorkExperienceParams {
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
  path: string;
}

export interface EditWorkExperienceParams {
  workExperienceId: string;
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
  path: string;
}
