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

async function postBooking(userId: number, roomId: number) {
  return prisma.booking.create({
    data: {
      userId,
      roomId
    }
  });
}

async function getBookingsById(roomId: number) {
  return prisma.booking.findMany({
    where: {
      roomId
    }
  });
}

const bookingRepository = {
  findBooking,
  postBooking,
  getBookingsById
};

export default bookingRepository;
