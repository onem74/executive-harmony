import { createFileRoute } from "@tanstack/react-router";
import { TrenzLanding } from "@/components/trenz/TrenzLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "keywords",
        content:
          "executive karaoke, private club, VIP lounge, bottle service, TRENZ, executive club, luxury karaoke",
      },
    ],
  }),
  component: TrenzLanding,
});