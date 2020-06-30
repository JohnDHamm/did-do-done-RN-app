import React from 'react';
import {
  CenteredView,
  CloseIcon,
  CloseIconContainer,
  Container,
  Content,
  RecurDate,
  StyledInput,
  StyledPicker,
  StyledText,
} from './RecurEventModal.styles';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import { TouchableOpacity } from 'react-native';
import { COLORS, darkTheme, lightTheme } from '../../styles';
import IMAGES from '../../../assets/images';
import { getRecurDateString, getRecurFreqData } from '../../functions';
import { ThemeContext } from 'styled-components';
import moment from 'moment';

interface Props {
  date: Date;
  onClose: () => void;
  onSubmit: (data: RecurringInfo) => void;
  recurInfo: RecurringInfo | null;
}

interface Defaults {
  FREQ: number;
  METRIC: RecurFreqMetric;
}

const RECUR_DEFAULTS: Defaults = {
  FREQ: 4,
  METRIC: 'weeks',
};

const RecurEventModal: React.FC<Props> = ({
  date,
  onClose,
  onSubmit,
  recurInfo,
}) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [pickerValue, setPickerValue] = React.useState<RecurFreqMetric>('days');
  const [recurDate, setRecurDate] = React.useState<string>('some date');
  const [nextdate, setNextdate] = React.useState<number>(0);

  const theme = React.useContext(ThemeContext);

  const handleSubmit = () => {
    const data: RecurringInfo = {
      days: null,
      weeks: null,
      months: null,
      nextdate,
    };
    data[pickerValue] = parseInt(inputValue);
    onSubmit(data);
    onClose();
  };

  React.useEffect(() => {
    const displayDate = getRecurDateString(
      date,
      parseInt(inputValue),
      pickerValue
    );
    setRecurDate(displayDate);
    setNextdate(moment(date).add(parseInt(inputValue), pickerValue).valueOf());
  }, [inputValue, pickerValue]);

  React.useEffect(() => {
    if (recurInfo) {
      const { freq, metric } = getRecurFreqData(recurInfo);
      if (freq) {
        setInputValue(freq.toString());
      }
      if (metric) {
        setPickerValue(metric);
      }
    } else {
      setInputValue(RECUR_DEFAULTS.FREQ.toString());
      setPickerValue(RECUR_DEFAULTS.METRIC);
    }
  }, []);

  return (
    <Container>
      <CloseIconContainer>
        <TouchableOpacity onPress={onClose}>
          <CloseIcon source={IMAGES.CLOSE_ICON} />
        </TouchableOpacity>
      </CloseIconContainer>
      <Content>
        <SectionHeader
          text="do again:"
          color={COLORS.PRIMARY_PURPLE}
          textColor={COLORS.WHITE}
        />
        <CenteredView>
          <StyledText>every</StyledText>
          <StyledInput
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            blurOnSubmit={true}
            keyboardType="number-pad"
            returnKeyType="done"
          />
        </CenteredView>
        <StyledPicker
          selectedValue={pickerValue}
          onValueChange={(value) => setPickerValue(value)}
          itemStyle={{
            color: theme.text,
          }}
        >
          <StyledPicker.Item key="days" value="days" label="days" />
          <StyledPicker.Item key="weeks" value="weeks" label="weeks" />
          <StyledPicker.Item key="months" value="months" label="months" />
        </StyledPicker>
        <RecurDate>{recurDate}</RecurDate>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Button label="save" />
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default RecurEventModal;
