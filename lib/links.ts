import { ExternalLinkIcon } from 'lucide-react';
import { FaGithub, FaYoutube } from 'react-icons/fa6';

/**
 * Labels an outbound link by what it points at, so a repo, a demo video and a
 * hosted site never get the same wording. `fallback` names anything else.
 */
export const linkMeta = (url: string, fallback: string) =>
  url.includes('youtube.com')
    ? { label: 'Video', Icon: FaYoutube }
    : url.includes('github.com')
      ? { label: 'Code', Icon: FaGithub }
      : { label: fallback, Icon: ExternalLinkIcon };
