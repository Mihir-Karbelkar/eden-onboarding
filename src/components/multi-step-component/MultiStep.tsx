import { Box, useColorMode } from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react';
import {
  MultiStepPropType,
  MultiStepValuesType,
} from '../../types/multi-step-types';
import MultiStepContext from './MultiStepContext';
import { useMediaQuery } from '@chakra-ui/react';
import useMultiStep from './useMultiStep';
import { LIGHT_GRAY, PURPLE } from '../../constants';

const MultiStep: React.FC<React.PropsWithChildren<MultiStepPropType>> = (
  props
) => {
  const {
    startIndex,
    children,
    paginationStyles,
    paginationBoxWidth = 40,
    paginationArrowWidth = 40,
  } = props;
  const [currentStep, setCurrentStep] = useState<number>(startIndex);
  const componentChildren = React.Children.toArray(children);
  const stepCount = componentChildren.length;

  const nextStep = () => {
    if (currentStep < stepCount - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const jumptToStep = (index: number) => {
    if (index >= 0 && index < stepCount) {
      setCurrentStep(index);
    }
  };

  const multiStepValue: MultiStepValuesType = {
    previousStep,
    nextStep,
    currentStep,
    jumptToStep,
    stepCount,
  };

  return (
    <MultiStepContext.Provider value={multiStepValue}>
      <Box
        width={'100%'}
        className={'stepper-scrollbar'}
        style={{ ...paginationStyles }}
      >
        <MultiStepPagination
          currentStep={currentStep}
          stepCount={stepCount}
          arrowWidth={paginationArrowWidth}
          boxWidth={paginationBoxWidth}
        />
      </Box>

      {componentChildren?.[currentStep]}
    </MultiStepContext.Provider>
  );
};

type MultiStepPaginationProps = {
  currentStep: number;
  stepCount: number;
  boxWidth?: number;
  arrowWidth?: number;
};

const MultiStepPagination = (props: MultiStepPaginationProps) => {
  const { currentStep, stepCount, arrowWidth = 40, boxWidth = 40 } = props;
  const { jumptToStep } = useMultiStep();
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  const { colorMode } = useColorMode();

  useEffect(() => {
    const elementToCenter = document.getElementById(`page-${currentStep}`);
    elementToCenter?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }, [currentStep]);

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        minW={'fit-content'}
        paddingLeft={
          isMobile ? `calc(${2 * arrowWidth + boxWidth}px + 1rem)` : 0
        }
        paddingRight={
          isMobile ? `calc(${2 * arrowWidth + boxWidth}px + 1rem)` : 0
        }
      >
        {Array.from({ length: stepCount }, (_, index) => index).map((step) => {
          const leftArrow =
            step > 0
              ? {
                  position: 'absolute',
                  content: `''`,
                  borderTop: `2px solid ${
                    step <= currentStep ? PURPLE : LIGHT_GRAY
                  }`,
                  top: '50%',
                  transform: `translate(calc(-${arrowWidth / 2}px - ${
                    boxWidth / 2
                  }px), -50%)`,
                  width: `${arrowWidth}px`,
                  height: '1px',
                  // backgroundColor: `${step <= currentStep ? PURPLE : LIGHT_GRAY}`,
                }
              : {};
          const rightArrow =
            step < stepCount - 1
              ? {
                  position: 'absolute',
                  content: `''`,
                  borderTop: `2px solid ${
                    step <= currentStep ? PURPLE : LIGHT_GRAY
                  }`,
                  top: '50%',
                  transform: `translate(calc(${arrowWidth / 2}px + ${
                    boxWidth / 2
                  }px), -50%)`,
                  width: `calc(${arrowWidth}px + 1px)`,
                  height: '1px',
                  // backgroundColor: `${step <= currentStep ? PURPLE : LIGHT_GRAY}`,
                }
              : {};

          return (
            <Fragment key={`step-${step}`}>
              <Box
                ml={`${arrowWidth}px`}
                mr={`${arrowWidth}px`}
                id={`page-${step}`}
                outline={'none'}
                _focusVisible={{
                  outline: 'none',
                }}
              >
                <Box
                  width={`${boxWidth}px`}
                  height={`${boxWidth}px`}
                  borderRadius={'50%'}
                  border={`1px solid ${
                    step <= currentStep
                      ? PURPLE
                      : colorMode === 'dark'
                      ? 'white'
                      : LIGHT_GRAY
                  }`}
                  display="flex"
                  position={'relative'}
                  justifyContent={'center'}
                  alignItems="center"
                  backgroundColor={step <= currentStep ? PURPLE : 'auto'}
                  textColor={
                    step <= currentStep || colorMode === 'dark'
                      ? 'white'
                      : 'black'
                  }
                  _before={leftArrow}
                  _after={rightArrow}
                  onClick={() => {
                    jumptToStep(step);
                  }}
                  cursor="pointer"
                >
                  {step + 1}
                </Box>
              </Box>
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default MultiStep;
