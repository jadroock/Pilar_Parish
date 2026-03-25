export interface MassTime {
  day: string;
  time: string;
  type: string;
}

export interface SacramentInfo {
  title: string;
  description: string;
  requirements?: string[];
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  contact: string;
  schedule: string;
}

export interface ParishEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Liturgical' | 'Community' | 'Youth' | 'Outreach';
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}
