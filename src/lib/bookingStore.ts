export interface Booking {
  id: string;
  customerName: string;
  whatsapp: string;
  email: string;
  shoeType: string;
  material: string;
  serviceType: string;
  collectionDate: string;
  collectionTime: string;
  deliveryMethod: string;
  photoUrls: string[];
  notes: string;
  status: "pending" | "paid" | "in_progress" | "completed";
  createdAt: string;
}

const STORAGE_KEY = "footwear_laundry_bookings";

export const getBookings = (): Booking[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const addBooking = (booking: Omit<Booking, "id" | "status" | "createdAt">): Booking => {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: `FL-${String(1000 + bookings.length + 1)}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  return newBooking;
};

export const updateBookingStatus = (id: string, status: Booking["status"]) => {
  const bookings = getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index !== -1) {
    bookings[index].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }
};
