// Types for admin panel

export interface AdminAuth {
  isAuthenticated: boolean;
  token?: string;
}

export interface GitHubConfig {
  owner: string;
  repo: string;
  token: string;
}

export interface FileUpload {
  file: File;
  path: string;
  content: string; // Base64
}

export type AdminTab = 'models' | 'images' | 'reviews';

