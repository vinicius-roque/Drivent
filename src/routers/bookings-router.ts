import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getBookings, insertBooking, updateBooking } from "@/controllers";

const bookingsRouter = Router();

bookingsRouter
  .all("/*", authenticateToken)
  .get("/", getBookings)
  .post("/", insertBooking)
  .put("/:bookingId", updateBooking);

export { bookingsRouter };
