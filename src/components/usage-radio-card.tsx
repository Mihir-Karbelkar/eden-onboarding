import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';
import { PURPLE } from '../constants';
import { UsageRadioCardType } from '../types/component-types';

const UsageRadioCard = (
  props: React.PropsWithChildren<UsageRadioCardType & UseRadioProps>
) => {
  const { cardCSS } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label" style={cardCSS}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          borderColor: PURPLE,
        }}
        height="100%"
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default UsageRadioCard;
