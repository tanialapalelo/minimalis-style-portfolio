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

