export type MultiStepValuesType = {
  jumptToStep: (index: number) => void;
  currentStep: number;
  stepCount: number;
  previousStep: () => void;
  nextStep: () => void;
};

export type MultiStepPropType = {
  startIndex: number;
  paginationStyles?: React.CSSProperties;
  paginationBoxWidth?: number;
  paginationArrowWidth?: number;
};
