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
