import { createSlice } from '@reduxjs/toolkit';
import { WizardFormType } from '../../types/wizard-form-types';

const initialState: WizardFormType = {
  fullName: '',
  displayName: '',
  workspaceName: '',
  workspaceUrl: '',
  workspaceFor: 'individual',
};

const wizardFormSlice = createSlice({
  name: 'wizard-form',
  initialState,
  reducers: {
    addUserDetails(state, action) {
      return {
        ...state,
        fullName: action.payload.fullName,
        displayName: action.payload.displayName,
      };
    },
    addWorkspaceDetails(state, action) {
      return {
        ...state,
        workspaceName: action.payload.workspaceName,
        workspaceUrl: action.payload.workspaceUrl,
      };
    },
    addUsageDetails(state, action) {
      return {
        ...state,
        workspaceFor: action.payload.workspaceFor,
      };
    },
  },
});

export const { addUsageDetails, addWorkspaceDetails, addUserDetails } =
  wizardFormSlice.actions;
export default wizardFormSlice.reducer;
