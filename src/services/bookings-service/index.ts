import { Response } from "express";

async function getBookings(res: Response) {
  res.send("ok");
}

const bookingService = {
  getBookings
};

export default bookingService;
