import { Box, Text, useColorMode } from '@chakra-ui/react';
import { RiUserFill, RiTeamFill } from 'react-icons/ri';
import { PURPLE, TEXT_GRAY } from '../constants';
import { UsageRadioOptionsType } from '../types/component-types';

const CardContent = (props: {
  value: UsageRadioOptionsType;
  isChecked: boolean | undefined;
  isMobile: boolean;
}) => {
  const { value, isChecked, isMobile } = props;
  const { colorMode } = useColorMode();
  switch (value) {
    case 'individual':
      return (
        <Box>
          <Box
            display="flex"
            alignItems={isMobile ? 'center' : 'start'}
            flexDirection="column"
          >
            <RiUserFill
              size={isMobile ? '2em' : '1.5em'}
              color={
                isChecked ? PURPLE : colorMode === 'dark' ? 'white' : 'black'
              }
            />
          </Box>

          <Text mt={4} fontWeight="bold">
            For myself
          </Text>
          <Text color={TEXT_GRAY} mt={4} fontSize="medium">
            Write better. Think more clearly. Stay organized
          </Text>
        </Box>
      );
    case 'team':
      return (
        <Box>
          <Box
            display="flex"
            alignItems={isMobile ? 'center' : 'start'}
            flexDirection="column"
          >
            <RiTeamFill
              size={isMobile ? '2em' : '1.5em'}
              color={
                isChecked ? PURPLE : colorMode === 'dark' ? 'white' : 'black'
              }
            />
          </Box>
          <Text mt={4} fontWeight="bold">
            With my team
          </Text>
          <Text color={TEXT_GRAY} mt={4} fontSize="medium">
            Wikis, docs, tasks & projects, all in one place.
          </Text>
        </Box>
      );
  }
};

export default CardContent;
