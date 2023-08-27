import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { getFilteredEvents } from '@/data';

import EventList from '@/components/EventList';

function FilteredEvents() {

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [events, setFilteredEvents] = useState([]);


    const handleChangeMonth = (e) => {
        setSelectedMonth(e.target.value)
    }
    const handleChangeYear = (e) => {
        setSelectedYear(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateFilter = {
            year: selectedYear,
            month: selectedMonth
        };
        const filteredEvents = getFilteredEvents(dateFilter);
        setFilteredEvents(filteredEvents);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='space-x-10'>
                {/* year */}
                <select className='border-2 rounded  px-4 py-2' onChange={handleChangeYear}>
                    <option >year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>


                {/* month */}
                <select className='border-2 px-4 py-2' onChange={handleChangeMonth}>
                    <option >month</option>
                    <option value="jan">January</option>
                    <option value="feb">Febraury</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                </select>
                <Button>Submit</Button>
            </form>

            {/* pass filtered */}
            {events.length > 0 ? <EventList events={events} /> : (<p>no events found</p>)}
        </div>
    )
}

export default FilteredEvents