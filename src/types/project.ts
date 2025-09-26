export interface IProject {
  _id: string;
  projectTitle: string;
  description: string;
  projectImage: string[];
  liveLink: string;
  gitRepoLinkFrontend: string;
  gitRepoLinkBackend: string;
  technology: ITechnology[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ITechnology {
  technologyName: string;
  technologyImage: string;
  _id: string;
}
