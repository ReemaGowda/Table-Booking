import React from 'react';
import InputField from '../../components/common/InputField';
import DateField from '../../components/common/DateField';
import TimeField from '../../components/common/TimeField';

const BookingForm = ({ booking, onSave, onChange }) => {
	return (
		<form>
			<InputField
				
				name="firstName"
				value={booking.firstName}
				label="First Name"
				onChange={onChange}/>

			<InputField name="lastName"
				value={booking.lastName}
				label="Last Name"
				onChange={onChange}/>

			<DateField name="diningDate"
				value={booking.diningDate}
				label="Dining Date"
				onChange={onChange} />
			
			<TimeField name="diningTime"
				value={booking.diningTime}
				label="Dining Time"
				onChange={onChange} />

			<InputField name="coverNo"
				value={booking.coverNo}
				label="How many Guests?"
				onChange={onChange}/>

			<InputField name="phone"
				value={booking.phone}
				label="Phone"
				onChange={onChange}/>

			<input
				type="submit"
				className="btn btn-primary"
				onClick={onSave}/>
		</form>
	);
};

BookingForm.propTypes = {
	booking: React.PropTypes.object.isRequired
};

export default BookingForm;