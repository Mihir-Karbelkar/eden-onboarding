import {
  Box,
  Button,
  Code,
  Text,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';
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
  const id = 'payload-toast';
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
          if (!toast.isActive(id)) {
            toast({
              id,
              position: 'bottom',

              status: 'info',
              render: () => {
                return (
                  <Box
                    p={2}
                    backgroundColor={PURPLE}
                    color="white"
                    borderRadius={'10px'}
                    textAlign={'center'}
                  >
                    Check console log for payload.
                  </Box>
                );
              },
            });
            console.log('Payload: ', JSON.stringify(formState, null, 2));
          }
        }}
      >
        Launch Eden
      </Button>
    </Box>
  );
};

export default WizardComplete;
