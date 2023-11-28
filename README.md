# Date_Picker
date passing format like 
```js
const [date, setDate] = useState(new Date())

const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
const monthName = date.toLocaleDateString('en-US', { month: 'long' });
const dayNumber = date.getDate();
const year = date.getFullYear();

 <Text>{`${dayName}, ${monthName} ${dayNumber}, ${year}`}</Text
 ```
follow this link - https://www.codingninjas.com/studio/library/react-native-date-picker 

*To change the color theme follow link - https://medium.com/@dexiouz/step-by-step-guide-on-how-to-change-background-and-text-color-of-android-date-time-picker-in-react-fbf1a7dea17e
