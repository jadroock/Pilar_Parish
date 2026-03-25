import { MassTime, SacramentInfo, Ministry, ParishEvent, NewsPost } from './types';

export const MASS_SCHEDULE: MassTime[] = [
  { day: 'Monday - Friday', time: '6:00 AM', type: 'Daily Mass' },
  { day: 'Saturday', time: '6:00 AM', type: 'Daily Mass' },
  { day: 'Saturday', time: '5:00 PM', type: 'Anticipated Sunday Mass' },
  { day: 'Sunday', time: '7:00 AM', type: 'Sunday Mass (Ilocano)' },
  { day: 'Sunday', time: '9:00 AM', type: 'Sunday Mass (English)' },
  { day: 'Sunday', time: '5:00 PM', type: 'Sunday Mass' },
];

export const CONFESSION_SCHEDULE = 'Saturday: 4:00 PM - 5:00 PM or by appointment';

export const SACRAMENTS: SacramentInfo[] = [
  {
    title: 'Baptism',
    description: 'Welcoming new members into the family of God. Held every Sunday after the 9:00 AM Mass.',
    requirements: ['Birth Certificate', 'Godparents Information', 'Pre-Jordan Seminar'],
  },
  {
    title: 'Holy Matrimony',
    description: 'Celebrating the union of man and woman in Christ. Please contact the parish office at least 6 months in advance.',
  },
  {
    title: 'Anointing of the Sick',
    description: 'Spiritual and physical healing for those who are seriously ill or elderly. Available anytime upon request.',
  },
];

export const MINISTRIES: Ministry[] = [
  {
    id: 'choir',
    name: 'Parish Choir',
    description: 'Leading the congregation in worship through music and song.',
    contact: 'Maria Santos',
    schedule: 'Rehearsals: Saturdays, 2:00 PM',
  },
  {
    id: 'youth',
    name: 'Fatima Youth Ministry',
    description: 'Empowering young people to live as disciples of Jesus Christ.',
    contact: 'Juan Dela Cruz',
    schedule: 'Meetings: 1st & 3rd Sundays, 1:00 PM',
  },
  {
    id: 'outreach',
    name: 'Social Action & Outreach',
    description: 'Serving the poor and marginalized in our community through various programs.',
    contact: 'Elena Reyes',
    schedule: 'Monthly Food Drive: Last Saturday',
  },
];

export const EVENTS: ParishEvent[] = [
  {
    id: '1',
    title: 'Lenten Retreat 2026',
    date: '2026-04-10',
    time: '8:00 AM - 5:00 PM',
    location: 'Parish Hall',
    description: 'A day of reflection and prayer as we prepare for the Paschal Mystery.',
    category: 'Liturgical',
  },
  {
    id: '2',
    title: 'Parish Fiesta Celebration',
    date: '2026-05-13',
    time: 'All Day',
    location: 'Church Grounds',
    description: 'Celebrating our Patroness, Our Lady of Fatima, with Mass and community festivities.',
    category: 'Community',
  },
];

export const NEWS: NewsPost[] = [
  {
    id: '1',
    title: 'New Parish Council Members Appointed',
    date: 'March 20, 2026',
    excerpt: 'We are pleased to announce the new members of our Parish Pastoral Council...',
    content: 'Full content here...',
    category: 'Announcements',
  },
  {
    id: '2',
    title: 'Renovation of the Parish Hall Begins',
    date: 'March 15, 2026',
    excerpt: 'Work has officially started on the improvements to our community space...',
    content: 'Full content here...',
    category: 'News',
  },
];
