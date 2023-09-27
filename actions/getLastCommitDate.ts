import { octokit } from '@/lib/octokit';

export const getLastCommitDate = async () => {
  const { data } = await octokit.rest.repos.getBranch({
    owner: 'kpirabaharan',
    repo: 'next-portfolio',
    branch: 'master',
  });

  return new Date(data.commit.commit.committer?.date ?? '2023-09-26T05:05:54Z');
};
