import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import appoinmentBanner from '../../../assets/images/bg.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div style={{ background: `url(${appoinmentBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='my-5 py-5'>
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