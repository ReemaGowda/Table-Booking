const bookings = [{
	bookingId: 1,
	firstName: 'Reema',
	lastName: 'gowda',
	diningDate: '22/05/2022',
	diningTime : '02:00 pm',
	phone: '12213213',
	Guests: '5'
}];

class BookingApi {
	static saveBooking(booking){
		return new Promise((resolve, reject) => {
			booking.bookingId = ++BookingApi.lastId;
			bookings.splice(0, 0, booking);
			resolve(booking);
		});
	}

	static updateBooking(bookingToUpdate){
		return new Promise((resolve,rject)=> {
			let index = bookings.findIndex((booking)=> booking.bookingId === bookingToUpdate.bookingId);
			bookings[index].isSeated = true;
			resolve(bookings);
		});
	}
	static listBookings() {
		return new Promise((resolve, reject) => {
			resolve(bookings);
		});
	}
}

BookingApi.lastId = 2;
export default BookingApi;