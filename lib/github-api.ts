// GitHub API client for admin operations

export interface GitHubFileContent {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
}

export interface GitHubUploadResponse {
  content: GitHubFileContent;
  commit: {
    sha: string;
    message: string;
  };
}

export class GitHubAPI {
  private token: string;
  private owner: string;
  private repo: string;
  private baseUrl = 'https://api.github.com';

  constructor(token: string, owner: string, repo: string) {
    this.token = token;
    this.owner = owner;
    this.repo = repo;
  }

  private getHeaders(): HeadersInit {
    return {
      'Authorization': `token ${this.token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    };
  }

  /**
   * Get file content from repository
   */
  async getFile(path: string): Promise<GitHubFileContent> {
    const url = `${this.baseUrl}/repos/${this.owner}/${this.repo}/contents/${path}`;
    const response = await fetch(url, {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to get file: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Upload or update file in repository
   */
  async uploadFile(
    path: string,
    content: string,
    message: string,
    sha?: string
  ): Promise<GitHubUploadResponse> {
    const url = `${this.baseUrl}/repos/${this.owner}/${this.repo}/contents/${path}`;
    
    const body: any = {
      message,
      content: Buffer.from(content).toString('base64'),
    };

    if (sha) {
      body.sha = sha;
    }

    const response = await fetch(url, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Delete file from repository
   */
  async deleteFile(path: string, sha: string, message: string): Promise<void> {
    const url = `${this.baseUrl}/repos/${this.owner}/${this.repo}/contents/${path}`;
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers: this.getHeaders(),
      body: JSON.stringify({
        message,
        sha,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete file: ${response.statusText}`);
    }
  }

  /**
   * Update config file (teams-creators, clients, reviews)
   */
  async updateConfig(
    configType: 'teams-creators' | 'clients' | 'reviews',
    data: any
  ): Promise<GitHubUploadResponse> {
    const pathMap = {
      'teams-creators': 'js/teams-creators-config.js',
      'clients': 'js/clients-config.js',
      'reviews': 'js/reviews-config.js',
    };

    const path = pathMap[configType];
    const content = this.generateConfigContent(configType, data);
    const message = `Update ${configType} config`;

    try {
      const existingFile = await this.getFile(path);
      return await this.uploadFile(path, content, message, existingFile.sha);
    } catch (error) {
      // File doesn't exist, create it
      return await this.uploadFile(path, content, message);
    }
  }

  /**
   * Generate config file content
   */
  private generateConfigContent(configType: string, data: any): string {
    const varName = configType === 'teams-creators' ? 'modelsData' :
                    configType === 'clients' ? 'modelsImagesData' :
                    'reviewsData';

    return `// Configuration for ${configType}\n\nwindow.${varName} = ${JSON.stringify(data, null, 2)};`;
  }
}

