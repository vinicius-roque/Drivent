import { prisma } from "@/config";

async function findBooking(userId: number) {
  return prisma.booking.findFirst({
    where: {
      userId
    },
    select: {
      id: true,
      Room: true
    }
  });
}

async function postBooking(roomId: number) {
  return prisma.booking;
}

const bookingRepository = {
  findBooking,
  postBooking
};

export default bookingRepository;
