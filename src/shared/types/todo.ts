export type TTask = { id: number; text: string; completed: boolean };

export enum EFilter {
  All = 'All',
  Active = 'Active',
  completed = 'Completed',
}
