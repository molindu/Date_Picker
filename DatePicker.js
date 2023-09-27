// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function QuickScan() {
//     return (
//         <View>
//             <Text>QuickScan</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { View, Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function QuickScan() {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={showDatepicker} title="Show Date Picker" />
            {showDatePicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <Text>Date: {date.toDateString()}</Text>
        </View>
    );
}
