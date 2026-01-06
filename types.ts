
export interface Partner {
  id: string;
  name: string;
  subject: string;
  major: string;
  matchPercentage: number;
  bio: string;
  tags: string[];
  imageUrl: string;
  availability: ('Weekdays' | 'Weekends' | 'Evenings')[];
  studyStyle: ('Quiet Focus' | 'Collaborative' | 'Pomodoro')[];
  location: 'Remote' | 'In-Person';
}

export interface Filters {
  availability: string[];
  studyStyle: string[];
  location: string;
  searchQuery: string;
  selectedSubject: string;
}
