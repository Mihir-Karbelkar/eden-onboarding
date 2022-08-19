import { Fragment } from 'react';
import './App.css';
import MultiStep from './components/multi-step-component';
import { Box, Image, Container, Text, useMediaQuery } from '@chakra-ui/react';
import Logo from './assets/logo.png';
import UserDetails from './components/onboarding-form/user-details';
import WorkspaceDetails from './components/onboarding-form/workspace-details';
import UsageDetails from './components/onboarding-form/usage-details';
import WizardComplete from './components/onboarding-form/wizard-complete';

function App() {
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  return (
    <Fragment>
      <Container centerContent pt={isMobile ? '5vh' : '10vh'}>
        <Box
          display="flex"
          alignItems={'center'}
          mb={isMobile ? '5vh' : '10vh'}
        >
          <Image
            src={Logo}
            marginRight={3}
            height={isMobile ? '42px' : '100%'}
          />
          <Text fontSize={isMobile ? '5xl' : '4xl'} fontWeight="bold">
            Eden
          </Text>
        </Box>
        <MultiStep
          startIndex={0}
          paginationStyles={{ marginBottom: isMobile ? '5vh' : '10vh' }}
          paginationBoxWidth={isMobile ? 60 : 40}
          paginationArrowWidth={isMobile ? 20 : 40}
        >
          <UserDetails />
          <WorkspaceDetails />
          <UsageDetails />
          <WizardComplete />
        </MultiStep>
      </Container>
    </Fragment>
  );
}

export default App;
