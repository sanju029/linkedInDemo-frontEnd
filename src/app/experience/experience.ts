import { User } from '../user';
export interface Experience {
  company: string;
  role: string;
  joiningYear: string;
  endingYear: string;
  duration: string;
  user?: User;
  experienceId: number;
}
