import { getSingleService } from '@/actions/server/service';
import { ServiceBooking } from '@/components/Services/ServiceBooking';
import React from 'react';

const BookingServicePage =async({params}) => {
    const {id} = await params
    const service = await getSingleService(id)
    console.log(service);
    
    
    return (
        <div>
            {/* Booking {id} */}
            <ServiceBooking service={service}></ServiceBooking>
        </div>
    );
};

export default BookingServicePage;