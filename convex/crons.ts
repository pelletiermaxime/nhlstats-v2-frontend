import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.hourly(
  "sync NHL standings",
  {
    minuteUTC: 0,
  },
  internal.standings.syncStandingsAction,
  { year: 2026 }
);

export default crons;
