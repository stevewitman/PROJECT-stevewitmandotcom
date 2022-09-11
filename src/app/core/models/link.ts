export interface Link {
  id: string;
  url: string;
  slug: string;
  active: boolean;
  public: boolean;
  show: boolean;
  title: string;
  notes?: string;
  dateAdded?: Date;
}
