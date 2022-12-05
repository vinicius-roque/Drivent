import { notFoundError, forbiddenError } from "@/errors";
import bookingRepository from "@/repositories/booking-repository";
import hotelRepository from "@/repositories/hotel-repository";
import hotelService from "../hotels-service";

async function getBookings(userId: number) {
  const booking = await bookingRepository.findBooking(userId);

  if (!booking) {
    throw notFoundError();
  }

  return booking;
}

async function postBooking(userId: number, roomId: number) {
  await hotelService.getHotels(userId);

  const room = await hotelRepository.findRoomsById(roomId);
  if (!room) {
    throw notFoundError();
  }

  const bookings = await bookingRepository.getBookingsById(roomId);
  const existingBooking = await bookingRepository.findBooking(userId);
  if (bookings.length >= room.capacity || existingBooking) {
    throw forbiddenError();
  }

  const booking = await bookingRepository.postBooking(userId, roomId);

  return booking;
}

async function putBookings(bookingId: number, userId: number, roomId: number) {
  await hotelService.getHotels(userId);

  const room = await hotelRepository.findRoomsById(roomId);
  const bookings = await bookingRepository.getBookingsById(roomId);
  const existingBooking = await bookingRepository.findBooking(userId);

  if (bookings.length >= room.capacity || !existingBooking || existingBooking.id !== bookingId || roomId === existingBooking.id) {
    throw forbiddenError();
  }

  const booking = await bookingRepository.putBookings(bookingId, roomId);

  return booking;
}

const bookingService = {
  getBookings,
  postBooking,
  putBookings
};

export default bookingService;
