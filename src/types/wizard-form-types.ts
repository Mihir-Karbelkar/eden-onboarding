export type WizardFormType = UserDetailsFormType &
  WorkspaceDetailsFormType &
  UsageFormType;
export type UserDetailsFormType = {
  fullName: string;
  displayName: string;
};
export type WorkspaceDetailsFormType = {
  workspaceName: string;
  workspaceUrl: string;
};
export type UsageFormType = {
  workspaceFor: WorkspaceForType;
};
export type WorkspaceForType = 'individual' | 'team';
