import React from 'react';
import { MultiStepValuesType } from '../../types/multi-step-types';

const MultiStepContext = React.createContext<MultiStepValuesType | null>(null);

export default MultiStepContext;
