
import { Partner, Filters } from './types';

export const MOCK_PARTNERS: Partner[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    major: 'Computer Science',
    subject: 'Computer Science',
    matchPercentage: 98,
    bio: 'Looking for someone to grind Leetcode problems with on Tuesday nights. I prefer a quiet environment but love discussing solutions after.',
    tags: ['Python', 'Algorithms', 'Night Owl'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBtN4g2PVm6wdAlXn1B1ac0CM0YexQawIC4i2xKlgsa89APzHLxMpj_2jj5KCNO4Vyx4K_QbnYeo466VYXKMy-lnlVOoDz3aIEIwLR9yGj5xLS8nkdsi7siRRQImo5ewdeKBBoRPiYFQV0YLyimtn3RynLFAHxjAd7cjKcnqBQsSvcc0VEmuxhRsK3K7xRF60r_hV2pACuz8mICODZrqjD_mAH3QRT7GwAh7vciuhLDwBjrg_NLndRElmAYzTZwVzJBQ6T-kBDlA8t',
    availability: ['Weekdays', 'Evenings'],
    studyStyle: ['Quiet Focus'],
    location: 'Remote'
  },
  {
    id: '2',
    name: 'David Kim',
    major: 'Pre-Med',
    subject: 'Biology',
    matchPercentage: 92,
    bio: 'Studying for the MCAT. I use flashcards heavily and like to quiz each other. Available mostly on weekends.',
    tags: ['Biology', 'Anatomy', 'Active'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu_Y6UMMvhgHJGliL4eTieESs1FJscnSK1uIeiPrVyR1p1jNH8IlCqTrVc19LTgOgu11HNUTwugD7FcR6kbBHnYZNSsrGXd7RmgILUnMJysIhpDzzsq6sSyHjBdrwO9l3LPjCxGR21-rQtQM6WY8xV-zRLvmYit7ojF69I1OGC91FGzD6bJpztuP8pQ2-uwtHSRQqEO23wqkmVnRdK5uXrLlA_rJWdjoAfCbwxOPxqj2Hcx2GiahVolqSVr0b8NlqEun6vOrCkD6EO',
    availability: ['Weekends'],
    studyStyle: ['Collaborative'],
    location: 'In-Person'
  },
  {
    id: '3',
    name: 'Emily Chen',
    major: 'Mathematics',
    subject: 'Mathematics',
    matchPercentage: 85,
    bio: "Need help with Calculus III. I'm great at Statistics and can trade tutoring time! I prefer libraries.",
    tags: ['Calculus', 'Stats', 'Silent'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpFiy8P6G4XJDlTQ3HRv_gtlYlznwKNDKLMR7wssyaANyN-Kye01bfLrvOtsj15gmJ7rtLOYebkBx0GqXsXCketzRTkJjgmV4Cg4KerNeuOnMFYuhM5qPTm5SZm7vZ5vQPr-rob7lgI-L1LVhhS97tbMmS_laPf2csAFP6KEuNCLf8AFbDPJcAX5oYRKLJA_XQ-VjWEv4JWr2xfjMvyBnazedlW4S17_K7VqtuL63bLrwewcXVkxZAUBar4Rl90TIhfccmNr6WOkK6',
    availability: ['Weekdays'],
    studyStyle: ['Quiet Focus'],
    location: 'In-Person'
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    major: 'History',
    subject: 'History',
    matchPercentage: 80,
    bio: 'Writing my thesis on Modern European History. Looking for a writing buddy to keep me accountable.',
    tags: ['Research', 'Writing', 'Pomodoro'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJRXr7Kt1pAmHMIJ_SaGJVEp-elfN2vSHyhQQ7cy2_EMe1rAlrVROu9jhO5RxehlWZr-XDyVFtQ0rqnGifNOIVbkuGIiEWQLPFz_KjkiBqsuc2Vj9U798eWOMu_usmOUb98ht34IUi7acVQcqRKvEnb_oJ1Mmc7l5Q-CSfAmuCKrubajF14qHQ5owh-yApJVTDCOIeQGO2oCqV3GQwh78c89i-QDfLHVwsLOmZScRLxSExoaVwODJ8spYPylXBEFp4hbg3zX_edUiN',
    availability: ['Evenings'],
    studyStyle: ['Pomodoro'],
    location: 'Remote'
  },
  {
    id: '5',
    name: 'Alex Rivera',
    major: 'Linguistics',
    subject: 'Languages',
    matchPercentage: 95,
    bio: 'Native Spanish speaker looking to practice French conversation. Available for coffee shop meetups.',
    tags: ['French', 'Spanish', 'Verbal'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAep5XJbG9C3IgF4P7tD2rFzDnoBznLPm5j_AuCAwIubQTiPB_0XSsOy3spYdeh7mkUZisUkHOnAqKoJEl4UxQTGWEVD3jVhguyrx9kbSvjnSOH8GudDVuDK85_DmvQUPpFwVxrBP3Lr4kKo15pfixXQ9Ctl8mSXJezq40djViyP_Q_Cw-gbClWI5KV1NKpNUoSD0vVZPEY1C1ACyDrqB120CUgw0y6HQAVC_l7-epZf0keAA9L9z1lqSzYuykk9Ecqcj8cVAGfpDhF',
    availability: ['Weekdays', 'Evenings'],
    studyStyle: ['Collaborative'],
    location: 'In-Person'
  },
  {
    id: '6',
    name: 'Jessica Lee',
    major: 'Physics',
    subject: 'Physics',
    matchPercentage: 88,
    bio: 'Reviewing mechanics and thermodynamics. I like drawing out problems on whiteboards. Collaborative only!',
    tags: ['Mechanics', 'Lab', 'Visual'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSFDLYaYcBlP1v51xYlasG4JAwUQjABI8oh9Gjh0JoLBmLb5tPS9gWRzKPOeRS5Hmj2KzIh40ERHwgC_YgkOWSu3ekVEze9-H2048fPGRk8moKQw1pXBWEqAWF4Lk_36J5IJCfOv9upyCajLOOzzdU1Q4qxHli-dfCK4pUMR7JZj1-Z5KFc0YSdVwUYTu5ur_rxdLg2i406g5dBmiJRIi22cSMt6GfXQQD88t-heRPLwmY6z0oph0Rp5dAzWIEOoQG6ML-ty028y9s',
    availability: ['Weekends'],
    studyStyle: ['Collaborative'],
    location: 'In-Person'
  }
];

export const INITIAL_FILTERS: Filters = {
  availability: ['Weekdays', 'Evenings'],
  studyStyle: ['Collaborative'],
  location: 'Any',
  searchQuery: '',
  selectedSubject: 'All Subjects'
};

export const SUBJECTS = ['All Subjects', 'Mathematics', 'Computer Science', 'Languages', 'Physics', 'History', 'Biology'];
