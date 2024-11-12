export type SidebarLinks = Record<
  "navMain",
  {
    title: string;
    url: string;
    isNew?: boolean;
    items: {
      title: string;
      url: string;
      isNew?: boolean;
      items: [];
    }[];
  }[]
>;
