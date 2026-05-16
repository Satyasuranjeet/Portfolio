import { useState, useEffect } from 'react';
import axios from 'axios';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        setRepos(response.data);
      } catch (err) {
        setError('Failed to fetch repositories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return { repos, loading, error };
}
