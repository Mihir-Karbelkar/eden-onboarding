import { Box, Text, useColorMode } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { PURPLE, TEXT_GRAY } from '../constants';

const CardContent = (props: {
  isChecked: boolean | undefined;
  isMobile: boolean;
  CardIcon: IconType;
  title: string;
  description: string;
}) => {
  const { isChecked, isMobile, CardIcon, title, description } = props;
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box
        display="flex"
        alignItems={isMobile ? 'center' : 'start'}
        flexDirection="column"
      >
        <CardIcon
          size={isMobile ? '2em' : '1.5em'}
          color={isChecked ? PURPLE : colorMode === 'dark' ? 'white' : 'black'}
        />
      </Box>
      <Text mt={4} fontWeight="bold">
        {title}
      </Text>
      <Text color={TEXT_GRAY} mt={'auto'} fontSize="medium">
        {description}
      </Text>
    </Box>
  );
};

export default CardContent;
