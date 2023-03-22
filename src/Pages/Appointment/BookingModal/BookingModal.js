import { format } from 'date-fns';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const BookingModal = ({ show, handleClose, option, selectedDate }) => {
    const { name, slots } = option;
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(slot, name, email, phone);
        const booking = {
            appointmentData: date,
            treatment: option.name,
            patient: name,
            slot,
            email,
            phone
        }

        // To Do : send data to the server 
        //dispya success message / alert
        console.log(booking);
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleBooking}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='data' defaultValue={date} disabled />
                    </Form.Group>
                    <Form.Select name="slot" className="mb-3" aria-label="Default select example">
                        {
                            slots.map((slot, i) => <option
                                key={i}
                                value={slot}>
                                {slot}
                            </option>)
                        }
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="name" type="text" placeholder="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="email" type="text" placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="phone" type="number" placeholder="phone" />
                    </Form.Group>
                    <button className='btn btn-primari' type="submit">
                        Submit
                    </button>
                </Form>
            </Modal.Body>

        </Modal>
    );
};

export default BookingModal;