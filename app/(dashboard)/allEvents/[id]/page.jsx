import Details from "@/components/dashboard/allEvents/Details";

export default function EventDetailsPage({ params }) {
  const { id } = params;

  return (
    <div>
      <Details eventId={id} />
    </div>
  );
}

