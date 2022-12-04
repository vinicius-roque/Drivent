import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getBookings, insertBooking } from "@/controllers";

const bookingsRouter = Router();

bookingsRouter
  .all("/*", authenticateToken)
  .get("/", getBookings)
  .post("/", insertBooking);

export { bookingsRouter };
