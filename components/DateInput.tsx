import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
    setDate: Function,
    setShowDate: Function,
    date: Date
}

const DateInput: React.FC<Props> = ({setDate, setShowDate, date}) => {

    const onChange = (e: any, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setShowDate(false)

    }

    return (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
    )
}

export default DateInput