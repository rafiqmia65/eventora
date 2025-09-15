"use client";

import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Details from "@/components/events/eventDetails/Details";

const EventDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <div>
      <Details eventId={id} session={session}></Details>
    </div>
  );
};

export default EventDetailsPage;
