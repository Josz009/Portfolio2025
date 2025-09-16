import { GitHubRepo } from '../types';

const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter and sort repositories
    return repos
      .filter(repo => !repo.fork) // Exclude forked repos
      .sort((a, b) => {
        // Prioritize repos with homepages (live demos)
        if (a.homepage && !b.homepage) return -1;
        if (!a.homepage && b.homepage) return 1;
        
        // Then sort by stars
        return b.stargazers_count - a.stargazers_count;
      });
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export function mapRepoToProject(repo: GitHubRepo) {
  // Map GitHub repo data to our project structure
  const securityKeywords = ['security', 'threat', 'penetration', 'vulnerability', 'cyber'];
  const isSecurityProject = securityKeywords.some(keyword => 
    repo.name.toLowerCase().includes(keyword) || 
    (repo.description?.toLowerCase().includes(keyword) ?? false)
  );

  return {
    title: formatRepoName(repo.name),
    description: repo.description || 'No description available',
    liveUrl: repo.homepage,
    githubUrl: repo.html_url,
    techStack: detectTechStack(repo),
    category: isSecurityProject ? 'cybersecurity' : 'development',
    metrics: {
      stars: `${repo.stargazers_count} stars`,
      forks: `${repo.forks_count} forks`,
      language: repo.language || 'Multiple',
      updated: formatDate(repo.updated_at)
    }
  };
}

function formatRepoName(name: string): string {
  // Convert repo name to title case and replace hyphens/underscores
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

function detectTechStack(repo: GitHubRepo): string[] {
  const stack: string[] = [];
  
  // Add primary language
  if (repo.language) {
    stack.push(repo.language);
  }
  
  // Detect common frameworks from repo name or description
  const content = `${repo.name} ${repo.description || ''}`.toLowerCase();
  
  if (content.includes('react')) stack.push('React');
  if (content.includes('vue')) stack.push('Vue');
  if (content.includes('angular')) stack.push('Angular');
  if (content.includes('node')) stack.push('Node.js');
  if (content.includes('express')) stack.push('Express');
  if (content.includes('firebase')) stack.push('Firebase');
  if (content.includes('typescript')) stack.push('TypeScript');
  if (content.includes('python')) stack.push('Python');
  if (content.includes('django')) stack.push('Django');
  if (content.includes('flask')) stack.push('Flask');
  
  // Add from topics if available
  if (repo.topics && repo.topics.length > 0) {
    repo.topics.forEach(topic => {
      const formatted = topic.charAt(0).toUpperCase() + topic.slice(1);
      if (!stack.includes(formatted)) {
        stack.push(formatted);
      }
    });
  }
  
  return [...new Set(stack)]; // Remove duplicates
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) return 'This week';
  if (diffDays < 30) return 'This month';
  if (diffDays < 90) return 'Last 3 months';
  if (diffDays < 180) return 'Last 6 months';
  return 'Over 6 months ago';
}