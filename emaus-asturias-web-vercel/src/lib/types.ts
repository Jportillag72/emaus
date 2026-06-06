export type Community = "emaus_hombres" | "emaus_mujeres" | "effeta" | "bartimeo";

export type RetreatStatus =
  | "proximamente"
  | "inscripciones_abiertas"
  | "completo"
  | "finalizado";

export type RequestStatus = "nueva" | "en_revision" | "contestada" | "archivada";

export type Retreat = {
  id: string;
  title: string;
  slug: string;
  community: Community;
  start_date: string;
  end_date: string;
  location: string;
  image_url: string | null;
  short_description: string;
  full_description: string;
  status: RetreatStatus;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
};

export type News = {
  id: string;
  title: string;
  slug: string;
  category: string;
  featured_image_url: string | null;
  excerpt: string;
  content: string;
  published_at: string;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
};

export type ContactRequest = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  community_interest: string;
  message: string;
  privacy_accepted: boolean;
  status: RequestStatus;
  created_at: string;
};

export type EditablePage = {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo_title: string | null;
  seo_description: string | null;
  updated_at?: string;
};

export type SiteSetting = {
  id?: string;
  setting_key: string;
  setting_value: string;
  updated_at?: string;
};
