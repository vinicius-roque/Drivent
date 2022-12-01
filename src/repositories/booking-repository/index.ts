import { prisma } from "@/config";

async function findBookings() {
  return prisma.booking.findMany();
}

const bookingRepository = {
  findBookings
};

export default bookingRepository;
