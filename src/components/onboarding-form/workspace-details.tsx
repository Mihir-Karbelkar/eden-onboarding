import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { PURPLE, TEXT_GRAY } from '../../constants';
import { addWorkspaceDetails } from '../../redux/slices/wizard-form.slice';
import { WorkspaceDetailsFormType } from '../../types/wizard-form-types';
import useMultiStep from '../multi-step-component/useMultiStep';
const WorkspaceDetails = () => {
  const { nextStep } = useMultiStep();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WorkspaceDetailsFormType>();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(
      addWorkspaceDetails({
        workspaceName: data.workspaceName,
        workspaceUrl: data.workspaceUrl,
      })
    );
    nextStep();
  });
  const { colorMode } = useColorMode();
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection={'column'}
    >
      <Text fontSize={'3xl'} fontWeight="bold">
        Let's set up a home for all your work
      </Text>
      <Text fontSize={'large'} color={TEXT_GRAY} mt={2}>
        You can always create another workspace later.
      </Text>
      <Box className="form1" mt="50px" width={{ md: '80%', sm: '100%' }}>
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={Boolean(errors?.workspaceName)}>
            <Text fontWeight={'medium'}>Workspace Name</Text>
            <Input
              placeholder="Eden"
              mt={2}
              {...register('workspaceName', {
                required: 'Workspace name is required.',
              })}
            />
            <FormErrorMessage>
              {errors?.workspaceName?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <Text fontWeight={'medium'} mt={4} display="flex">
              Workspace URL <Text color={TEXT_GRAY}>(Optional)</Text>
            </Text>
            <InputGroup>
              <InputLeftAddon
                backgroundColor={colorMode === 'light' ? '#F4F6F9' : 'auto'}
                color={colorMode === 'light' ? TEXT_GRAY : 'auto'}
                children="www.eden.com/"
              />
              <Input placeholder="Example" {...register('workspaceUrl')} />
            </InputGroup>
          </FormControl>
          <Button
            color={'white'}
            backgroundColor={PURPLE}
            mt={5}
            width={'100%'}
            type="submit"
            isDisabled={isSubmitting}
          >
            Create Workspace
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default WorkspaceDetails;
