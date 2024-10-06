import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BasicDatePicker from './BasicDatePicker';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

export default function FilterTabs(props) {
    const [date, setDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [alertDisplayClass, setAlertDisplayClass] = useState("d-none")
    const [alertMsg, setAlertMsg] = useState("")

    // Check if date selected is valid == not in the future or before 1995
    const isValidDate = (dateValue) => {
        const firstAvailableDate = new Date("1995-06-16")
        const today = new Date()
        const selectedDate = new Date(dateValue)
        if (selectedDate <= firstAvailableDate) {
            setAlertMsg("There are no records available for dates prior to 16 June 1995. Please select a more recent date.")
            setAlertDisplayClass("")
            return false
        }
        if (selectedDate > today) {
            setAlertMsg("There's no way to tell what tomorrow's photo will be. Please select a date that already occured.")
            setAlertDisplayClass("")
            return false
        }
        return true
    }

    // update query and alert box for first tab using "date" param
    const handleQueryDate = () => {
        if (!isValidDate(date)) return
        const query = "?date=" + date
        props.setter(query)
        setAlertDisplayClass("d-none")
    }

    // update query and alert box for second tab using "start_date" and "end_date" params
    const handleQueryDateRange = () => {
        if (!(isValidDate(startDate) || isValidDate(endDate))) return
        const selectedStartDate = new Date(startDate)
        const selectedEndDate = new Date(endDate)
        if (selectedStartDate >= selectedEndDate) {
            setAlertMsg("Start Date can't be after End Date. Please select a valid date range and try again")
            setAlertDisplayClass("")
            return
        }
        const query = "?start_date=" + startDate + "&end_date=" + endDate
        props.setter(query)
        setAlertDisplayClass("d-none")
    }

    return (
        <div className="row justify-content-center">
            <div className="col-xl-8">
                
                <Tabs>
                    <TabList>
                        <Tab>Search by Date</Tab>
                        <Tab>Search by Date Range</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='mx-3 mt-4 mb-5'>
                            <h4 className="mb-3">Select a date and it will show you the APOD for that date</h4>
                            <div className="row justify-content-between">
                                <div className="col-sm-3">
                                    <BasicDatePicker setter={setDate} datePickerName="Date" />
                                </div>
                                <div className="col mt-sm-auto ml-sm-auto mt-4 text-end">
                                    <button onClick={handleQueryDate} type="button" className="btn btn-primary btn-lg">Find APOD</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='mx-3 mt-4 mb-5'>
                            <h4 className="mb-3">Select a date and it will show you the APOD for that date</h4>
                            <div className="row justify-content-between">
                                <div className="col-sm-3">
                                    <BasicDatePicker setter={setStartDate} datePickerName="Start Date" />
                                </div>
                                <div className="col-sm-3">
                                    <BasicDatePicker setter={setEndDate} datePickerName="End Date" />
                                </div>
                                <div className="col mt-sm-auto ml-sm-auto mt-4 text-end">
                                    <button onClick={handleQueryDateRange} type="button" className="btn btn-primary btn-lg">Find APOD</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>

                <div className={"alert alert-warning mt-3 " + alertDisplayClass} role="alert">
                    {alertMsg}
                </div>
                
            </div>
        </div>

    );
};