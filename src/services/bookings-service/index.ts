import { notFoundError } from "@/errors";
import bookingRepository from "@/repositories/booking-repository";

async function getBookings(userId: number) {
  const booking = await bookingRepository.findBooking(userId);

  if (!booking) {
    throw notFoundError();
  }

  return booking;
}

const bookingService = {
  getBookings
};

export default bookingService;
