import DateTimePickerModal from "react-native-modal-datetime-picker";

interface Props {
  setDate: Function;
  setShowDate: Function;
  date: Date;
  showDate: boolean;
}

const DateInput: React.FC<Props> = ({
  setDate,
  setShowDate,
  date,
  showDate,
}) => {
  const handleConfirm = (date: Date) => {
    setDate(date);
    hideDatePicker();
  };

  const hideDatePicker = () => setShowDate(false);

  return (
    <DateTimePickerModal
      isVisible={showDate}
      mode="date"
      date={date}
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  );
};

export default DateInput;
