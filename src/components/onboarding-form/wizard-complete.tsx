import {
  Box,
  Button,
  Code,
  Text,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';
import useMultiStep from '../multi-step-component/useMultiStep';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PURPLE, TEXT_GRAY } from '../../constants';
import { WizardFormType } from '../../types/wizard-form-types';
const WizardComplete = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  const formState = useSelector<RootState, WizardFormType>(
    (state) => state.wizardForm
  );
  const toast = useToast();
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection={'column'}
    >
      <Box
        width={'70px'}
        height="70px"
        borderRadius={'50%'}
        display="flex"
        justifyContent={'center'}
        alignItems="center"
        backgroundColor={PURPLE}
      >
        <MdCheck color={'white'} size="25px" />
      </Box>
      <Text fontSize={isMobile ? '25px' : '3xl'} fontWeight="bold" mt={10}>
        {`Congratulations, ${formState?.displayName}`}
      </Text>
      <Text fontSize={isMobile ? 'medium' : 'large'} color={TEXT_GRAY} mt={2}>
        You have completed onboarding, you can start using Eden!
      </Text>
      <Button
        color={'white'}
        backgroundColor={PURPLE}
        mt={8}
        width={'100%'}
        onClick={() => {
          toast({
            position: isMobile ? 'bottom' : 'bottom-left',
            status: 'info',
            render: () => {
              return (
                <Box
                  backgroundColor={PURPLE}
                  display="flex"
                  flexDirection={'column'}
                  alignItems="center"
                  paddingTop={4}
                  paddingBottom={4}
                  borderRadius="10px"
                >
                  <Text color="white" fontWeight={'bold'}>
                    Form Data Across Pages
                  </Text>
                  <Code
                    as="pre"
                    borderRadius="10px"
                    mt={2}
                    backgroundColor="#edf2f7"
                    p={2}
                    color="black"
                    children={JSON.stringify(formState, null, 2)}
                  />
                </Box>
              );
            },
          });
        }}
      >
        Launch Eden
      </Button>
    </Box>
  );
};

export default WizardComplete;
