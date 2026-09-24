export type ServiceAreaServed = {
  /** Verified with client before publishing. */
  verified: boolean;
  name: string;
};

/**
 * Only Melbourne (client-provided) is currently published.
 * Brunswick and Hoppers Crossing are referenced in public social
 * posts but are NOT yet verified with the client — add here once verified.
 */
export const serviceAreas: ServiceAreaServed[] = [
  { verified: true, name: "Melbourne" },
];

export const pendingSuburbAreas: { name: string; source: string }[] = [
  {
    name: "Brunswick",
    source: "Referenced in public social posts — needs client confirmation",
  },
  {
    name: "Hoppers Crossing",
    source: "Referenced in public social posts — needs client confirmation",
  },
];

export const coverageCopy = {
  heading: "Melbourne-wide property services",
  intro:
    "MPM Services is a Melbourne-based property services business covering Melbourne, VIC. We work with homeowners, landlords, property managers and commercial operators across the city.",
  note: "This list is kept deliberately short. Additional suburbs will be added as they are confirmed, so this page stays honest and useful rather than stretched across dozens of thin pages.",
};