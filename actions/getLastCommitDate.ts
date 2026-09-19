import { octokit } from '@/lib/octokit';

// Shown in the footer. Never let a GitHub outage or rate limit take the site down.
export const getLastCommitDate = async (): Promise<Date | null> => {
  try {
    const { data } = await octokit.rest.repos.getBranch({
      owner: 'kpirabaharan',
      repo: 'next-portfolio',
      branch: 'master',
    });
    const date = data.commit.commit.committer?.date;
    return date ? new Date(date) : null;
  } catch (error) {
    console.error('Failed to fetch last commit date', error);
    return null;
  }
};
