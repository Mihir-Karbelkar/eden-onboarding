import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { PURPLE, TEXT_GRAY } from '../../constants';
import { addUserDetails } from '../../redux/slices/wizard-form.slice';
import { UserDetailsFormType } from '../../types/wizard-form-types';
import useMultiStep from '../multi-step-component/useMultiStep';
const UserDetails = () => {
  const { nextStep } = useMultiStep();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserDetailsFormType>();
  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    dispatch(
      addUserDetails({
        fullName: data.fullName,
        displayName: data.displayName,
      })
    );
    nextStep();
  });
  return (
    <Box
      justifyContent="center"
      alignItems={{ md: 'center', sm: 'start' }}
      display="flex"
      flexDirection={'column'}
    >
      <Text fontSize={'3xl'} fontWeight="bold">
        Welcome! First things first...
      </Text>
      <Text fontSize={'large'} color={TEXT_GRAY} mt={2}>
        You can always change them later.
      </Text>
      <Box className="form1" mt="50px" width={{ md: '80%', sm: '100%' }}>
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={Boolean(errors?.fullName)}>
            <Text fontWeight={'medium'}>Full Name</Text>
            <Input
              placeholder="Steve Jobs"
              mt={2}
              {...register('fullName', { required: 'Full name is required.' })}
            />
            <FormErrorMessage>{errors?.fullName?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors?.displayName)}>
            <Text fontWeight={'medium'} mt={4}>
              Display Name
            </Text>
            <Input
              placeholder="Steve"
              mt={2}
              {...register('displayName', {
                required: 'Display name is required.',
              })}
            />
            <FormErrorMessage>{errors?.displayName?.message}</FormErrorMessage>
          </FormControl>
          <Button
            color={'white'}
            backgroundColor={PURPLE}
            mt={5}
            width={'100%'}
            type={'submit'}
            isDisabled={isSubmitting}
          >
            Create Workspace
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UserDetails;
