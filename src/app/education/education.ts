import {User} from '../user'
export interface Education {
  college: string;
  joiningYear: string;
  endingYear: string;
  course: string;
  duration: string;
  grade: string;
  user?: User;
  educationId: number;
}
