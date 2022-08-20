export type MultiStepValuesType = {
  jumptToStep: (index: number, canMove?: () => boolean) => void;
  currentStep: number;
  stepCount: number;
  previousStep: () => void;
  nextStep: () => void;
  allowPage: (index: number) => void;
  pagesAllowed: boolean[];
};

export type MultiStepPropType = {
  startIndex: number;
  paginationStyles?: React.CSSProperties;
  paginationBoxWidth?: number;
  paginationArrowWidth?: number;
  allowAllPages?: boolean;
};
