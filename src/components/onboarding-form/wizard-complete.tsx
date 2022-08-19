import { Box, Button, Text, useMediaQuery } from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';
import useMultiStep from '../multi-step-component/useMultiStep';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PURPLE, TEXT_GRAY } from '../../constants';
const WizardComplete = () => {
  const { nextStep } = useMultiStep();
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  const userName = useSelector<RootState>(
    (state) => state.wizardForm.displayName
  );
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
        {`Congratulations, ${userName}`}
      </Text>
      <Text fontSize={isMobile ? 'medium' : 'large'} color={TEXT_GRAY} mt={2}>
        You have completed onboarding, you can start using Eden!
      </Text>
      <Button
        color={'white'}
        backgroundColor={PURPLE}
        mt={8}
        width={'100%'}
        onClick={nextStep}
      >
        Launch Eden
      </Button>
    </Box>
  );
};

export default WizardComplete;
