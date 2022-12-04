import { notFoundError } from "@/errors";
import bookingRepository from "@/repositories/booking-repository";
import { Response } from "express";

async function getBookings(userId: number) {
  const booking = await bookingRepository.findBooking(userId);

  if (!booking) {
    throw notFoundError();
  }

  return booking;
}

async function postBooking(res: Response) {
  res.send("Ok");
}

const bookingService = {
  getBookings,
  postBooking
};

export default bookingService;
