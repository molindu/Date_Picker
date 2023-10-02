# Date_Picker
date passing format like 
const [date, setDate] = useState(new Date())

const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
const monthName = date.toLocaleDateString('en-US', { month: 'long' });
const dayNumber = date.getDate();
const year = date.getFullYear();

 <Text>{`${dayName}, ${monthName} ${dayNumber}, ${year}`}</Text
 
follow this link - https://www.codingninjas.com/studio/library/react-native-date-picker 
