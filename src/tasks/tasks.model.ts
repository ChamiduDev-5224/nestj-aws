export interface taskModel {
  id: string;
  name: string;
  description: string;
  status: taskStatus;
}

export enum taskStatus {
  ACTIVE = 1,
  DEACTIVE = 3,
  PENDING = 2,
}
