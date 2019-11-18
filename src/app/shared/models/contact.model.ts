export interface Contact {
  id: number;
  firstName: string;
  lastName?: string;
  nickName?: string;
  gender?: number; // 0: Female - 1: Male
  birthday?: Date;
  avatar?: string;
  address?: string;
  email?: string;
  phone?: string;
  company?: string;
  job?: string;
  favorite?: boolean;
  description?: string;
}
