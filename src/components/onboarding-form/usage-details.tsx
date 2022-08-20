import {
  Box,
  Button,
  Text,
  useMediaQuery,
  useRadioGroup,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { PURPLE, TEXT_GRAY, USAGE_CARD_CONTENT } from '../../constants';
import { addUsageDetails } from '../../redux/slices/wizard-form.slice';
import { RootState } from '../../redux/store';
import { WizardFormType } from '../../types/wizard-form-types';
import CardContent from '../card-content';
import useMultiStep from '../multi-step-component/useMultiStep';
import UsageRadioCard from '../usage-radio-card';

const UsageDetails = () => {
  const { nextStep } = useMultiStep();
  const dispatch = useDispatch();
  const workspaceFor = useSelector<RootState, WizardFormType['workspaceFor']>(
    (state) => state.wizardForm.workspaceFor
  );
  const { getRadioProps, getRootProps } = useRadioGroup({
    name: 'useage-radio',
    defaultValue: workspaceFor || 'individual',
    onChange: (workspaceFor) => dispatch(addUsageDetails({ workspaceFor })),
  });
  const group = getRootProps();
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection={'column'}
    >
      <Text fontSize={'3xl'} fontWeight="bold">
        How are you planning to use Eden?
      </Text>
      <Text fontSize={'large'} color={TEXT_GRAY} mt={2}>
        We'll streamline your experience accordingly.
      </Text>
      <Box
        className="form1"
        mt="50px"
        width={'100%'}
        display="flex"
        flexDirection={'column'}
        alignItems="center"
      >
        <Box width={{ md: '80%', sm: '100%' }}>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            marginLeft={'-15px'}
            {...group}
          >
            {Object.entries(USAGE_CARD_CONTENT).map(([value, data]) => {
              const radio = getRadioProps({ value });

              return (
                <UsageRadioCard
                  cardCSS={{
                    flex: '1 1',
                    marginLeft: '15px',
                    marginBottom: '20px',
                  }}
                  key={value}
                  {...radio}
                >
                  <Box padding={5}>
                    <CardContent
                      title={data.title}
                      CardIcon={data.CardIcon}
                      description={data.description}
                      isChecked={radio.isChecked}
                      isMobile={isMobile}
                    />
                  </Box>
                </UsageRadioCard>
              );
            })}
          </Box>
          <Button
            color={'white'}
            backgroundColor={PURPLE}
            mt={2}
            onClick={nextStep}
            width="100%"
          >
            Create Workspace
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UsageDetails;
