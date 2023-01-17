export interface BlogAndNote {
  title: string,
  slug: string,
  description: string,
  tags: string[],
  created: string,
  updated: string,
  blog: boolean,
  public: boolean,
  archive: boolean,
  markdown: string,
}
