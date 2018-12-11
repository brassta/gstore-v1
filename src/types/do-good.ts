export interface HumanitarianProject {
  projectId: string;
  name: string;
  title: string;
  text: string;
  learnMoreLink: string;
  goal: number;
  donated: number;
  coverImageUrl: string;
}

// other props (such as project id or smth) will be added later
export interface Donation {
  amount: number;
  projectId: string;
}
