export type User = {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
};

export type NewUser = {
  name: string;
  email: string;
};

export type CandidateUser = {
  name?: string;
  email?: string;
};
