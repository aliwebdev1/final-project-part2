import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div className='my-5 py-5'>
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-gray pe-md-5">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={chair} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;