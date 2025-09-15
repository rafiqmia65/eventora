import BookingsList from "@/components/dashboard/mybookingEvents/BookingsList";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Your Booked Events
      </h1>
      <BookingsList />
    </div>
  );
}
