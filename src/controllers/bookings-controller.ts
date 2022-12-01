import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";

export async function getBookings(req: AuthenticatedRequest, res: Response) {
  res.send("ok");
}
