import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'bootstrap/dist/css/bootstrap.css';

export default function BasicDatePicker(props) {
    const [value, setValue] = React.useState(dayjs());
    const date = value.format('YYYY-MM-DD').toString()
    props.setter(date)
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label={props.datePickerName}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    format="DD-MM-YYYY"
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}