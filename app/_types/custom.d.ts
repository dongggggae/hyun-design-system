// Nav Link

type Links = {
  name: string;
  href: string;
  type?: string;
  info?: string | string[] | undefined;
  children?: Links[];
};
