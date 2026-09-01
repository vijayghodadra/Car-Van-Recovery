export interface RoadData {
  name: string;
  slug: string;
  descriptionContext: string;
}

export interface JunctionData {
  name: string;
  slug: string;
  junctionNumber: number;
  nearbyRoads: string[];
  nearbyLocations: string[];
  descriptionContext: string;
}

export interface LocationData {
  name: string;
  slug: string;
  type: 'city' | 'town' | 'village' | 'area';
  county: string;
  nearbyRoads: string[];
  nearbyJunctions: string[];
  nearbyLocations: string[];
  descriptionContext: string;
}

export const roads: RoadData[] = [
  { name: "M11", slug: "m11", descriptionContext: "The primary motorway connecting London to Cambridge, essential for commuter and commercial traffic." },
  { name: "A14", slug: "a14", descriptionContext: "A major dual carriageway intersecting with the M11, serving northern Cambridge and extending towards the coast." },
  { name: "A10", slug: "a10", descriptionContext: "A key route linking Cambridge southwards towards Royston and Hertfordshire." },
  { name: "A11", slug: "a11", descriptionContext: "Connecting the M11 near South Cambridge towards Newmarket and Norwich." },
  { name: "A1307", slug: "a1307", descriptionContext: "A significant local road running from Cambridge towards Haverhill." },
  { name: "A505", slug: "a505", descriptionContext: "Providing a vital east-west link from Royston through to the M11 at Duxford." },
  { name: "A428", slug: "a428", descriptionContext: "Connecting Cambridge westwards towards St Neots and Bedford." },
  { name: "A603", slug: "a603", descriptionContext: "A local route linking the M11 at Junction 12 directly into central Cambridge." },
];

export const junctions: JunctionData[] = [
  { name: "M11 Junction 4", slug: "junction-4", junctionNumber: 4, nearbyRoads: [], nearbyLocations: ["chigwell"], descriptionContext: "Serving the southern end of the M11 near Woodford and Chigwell." },
  { name: "M11 Junction 5", slug: "junction-5", junctionNumber: 5, nearbyRoads: [], nearbyLocations: ["loughton"], descriptionContext: "Providing access to Loughton and Debden." },
  { name: "M11 Junction 6", slug: "junction-6", junctionNumber: 6, nearbyRoads: [], nearbyLocations: ["epping"], descriptionContext: "The major interchange with the M25, serving Epping." },
  { name: "M11 Junction 7", slug: "junction-7", junctionNumber: 7, nearbyRoads: [], nearbyLocations: ["harlow"], descriptionContext: "The main access point for Harlow and surrounding Essex areas." },
  { name: "M11 Junction 7a", slug: "junction-7a", junctionNumber: 7.5, nearbyRoads: [], nearbyLocations: ["harlow"], descriptionContext: "Providing additional access to North Harlow." },
  { name: "M11 Junction 8", slug: "junction-8", junctionNumber: 8, nearbyRoads: ["a120"], nearbyLocations: ["stansted", "bishops-stortford"], descriptionContext: "Crucial junction serving London Stansted Airport and Bishop's Stortford." },
  { name: "M11 Junction 9", slug: "junction-9", junctionNumber: 9, nearbyRoads: ["a11"], nearbyLocations: ["saffron-walden", "great-chesterford"], descriptionContext: "Where the M11 splits, with the A11 heading towards Newmarket." },
  { name: "M11 Junction 10", slug: "junction-10", junctionNumber: 10, nearbyRoads: ["a505"], nearbyLocations: ["duxford", "whittlesford", "sawston", "royston"], descriptionContext: "Serving Duxford Imperial War Museum and acting as a key link to Royston via the A505." },
  { name: "M11 Junction 11", slug: "junction-11", junctionNumber: 11, nearbyRoads: ["a10"], nearbyLocations: ["trumpington", "harston", "hauxton", "great-shelford"], descriptionContext: "The primary southern access to Cambridge, connecting to the A10." },
  { name: "M11 Junction 12", slug: "junction-12", junctionNumber: 12, nearbyRoads: ["a603"], nearbyLocations: ["grantchester", "barton", "cambridge"], descriptionContext: "Connecting to the A603 for direct access to Cambridge city centre and Grantchester." },
  { name: "M11 Junction 13", slug: "junction-13", junctionNumber: 13, nearbyRoads: ["a1303"], nearbyLocations: ["madingley", "cambridge"], descriptionContext: "Serving West Cambridge and the Madingley area." },
  { name: "M11 Junction 14", slug: "junction-14", junctionNumber: 14, nearbyRoads: ["a14"], nearbyLocations: ["girton", "histon", "milton", "cambridge"], descriptionContext: "The major Girton Interchange where the M11 meets the A14." },
];

export const locations: LocationData[] = [
  // Major Hubs
  {
    name: "Cambridge",
    slug: "cambridge",
    type: "city",
    county: "Cambridgeshire",
    nearbyRoads: ["m11", "a14", "a10", "a428"],
    nearbyJunctions: ["junction-11", "junction-12", "junction-13", "junction-14"],
    nearbyLocations: ["trumpington", "grantchester", "girton", "histon"],
    descriptionContext: "As the central hub, Cambridge is surrounded by major arteries like the A14 and M11, requiring rapid recovery response for both city center and highway breakdowns."
  },
  {
    name: "Royston",
    slug: "royston",
    type: "town",
    county: "Hertfordshire",
    nearbyRoads: ["a505", "a10"],
    nearbyJunctions: ["junction-10"],
    nearbyLocations: ["duxford", "whittlesford"],
    descriptionContext: "Located on the Hertfordshire/Cambridgeshire border, Royston is heavily reliant on the A505 and A10 for connections to the M11."
  },
  {
    name: "Bishop's Stortford",
    slug: "bishops-stortford",
    type: "town",
    county: "Hertfordshire",
    nearbyRoads: ["a120", "m11"],
    nearbyJunctions: ["junction-8"],
    nearbyLocations: ["stansted", "sawbridgeworth"],
    descriptionContext: "A key market town right on the M11 corridor, essential for local and airport-related traffic."
  },
  {
    name: "Stansted",
    slug: "stansted",
    type: "town",
    county: "Essex",
    nearbyRoads: ["a120", "m11"],
    nearbyJunctions: ["junction-8"],
    nearbyLocations: ["bishops-stortford"],
    descriptionContext: "Serving one of the UK's busiest airports, ensuring roads around Stansted and M11 J8 are kept clear is a priority."
  },
  {
    name: "Harlow",
    slug: "harlow",
    type: "town",
    county: "Essex",
    nearbyRoads: ["m11"],
    nearbyJunctions: ["junction-7", "junction-7a"],
    nearbyLocations: ["epping", "sawbridgeworth"],
    descriptionContext: "A major new town in Essex directly serviced by the M11, generating significant commercial and commuter traffic."
  },
  
  // South Cambridge & J10/J11 Villages
  {
    name: "Duxford",
    slug: "duxford",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["m11", "a505"],
    nearbyJunctions: ["junction-10"],
    nearbyLocations: ["whittlesford", "sawston", "hinxton", "pampisford"],
    descriptionContext: "Situated just off M11 Junction 10 and the A505, Duxford is a critical point for local vehicle recovery."
  },
  {
    name: "Sawston",
    slug: "sawston",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a1301", "a505"],
    nearbyJunctions: ["junction-10"],
    nearbyLocations: ["pampisford", "whittlesford", "great-shelford"],
    descriptionContext: "One of the largest villages in South Cambridgeshire, closely connected to the M11 corridor."
  },
  {
    name: "Trumpington",
    slug: "trumpington",
    type: "area",
    county: "Cambridgeshire",
    nearbyRoads: ["a10", "m11"],
    nearbyJunctions: ["junction-11"],
    nearbyLocations: ["cambridge", "great-shelford", "grantchester", "hauxton"],
    descriptionContext: "A major suburb of Cambridge, acting as the primary gateway from M11 Junction 11."
  },
  {
    name: "Great Shelford",
    slug: "great-shelford",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a1301"],
    nearbyJunctions: ["junction-11"],
    nearbyLocations: ["little-shelford", "trumpington", "stapleford", "sawston"],
    descriptionContext: "A busy village just south of Cambridge, with frequent traffic connecting to the M11 via Trumpington."
  },
  {
    name: "Whittlesford",
    slug: "whittlesford",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a505"],
    nearbyJunctions: ["junction-10"],
    nearbyLocations: ["duxford", "sawston"],
    descriptionContext: "Located immediately next to M11 Junction 10, making it a common spot for roadside assistance."
  },
  {
    name: "Grantchester",
    slug: "grantchester",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a603"],
    nearbyJunctions: ["junction-12", "junction-11"],
    nearbyLocations: ["cambridge", "trumpington", "barton"],
    descriptionContext: "A historic village near Cambridge, situated between the M11 and the city."
  },
  {
    name: "Harston",
    slug: "harston",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a10"],
    nearbyJunctions: ["junction-11"],
    nearbyLocations: ["hauxton", "foxton", "trumpington"],
    descriptionContext: "Located directly on the busy A10 road just south of the M11 J11 interchange."
  },
  {
    name: "Hauxton",
    slug: "hauxton",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a10", "m11"],
    nearbyJunctions: ["junction-11"],
    nearbyLocations: ["harston", "trumpington", "little-shelford"],
    descriptionContext: "Sitting right beside the M11 and A10, ensuring rapid access for breakdown recovery units."
  },

  // North/West Cambridge & J14 Area
  {
    name: "Girton",
    slug: "girton",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a14", "m11"],
    nearbyJunctions: ["junction-14"],
    nearbyLocations: ["histon", "oakington", "cambridge"],
    descriptionContext: "Located right at the major Girton Interchange where the M11 and A14 meet."
  },
  {
    name: "Histon",
    slug: "histon",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a14"],
    nearbyJunctions: ["junction-14"],
    nearbyLocations: ["impington", "girton", "cottenham"],
    descriptionContext: "Just north of Cambridge, heavily reliant on the A14 for transport links."
  },
  {
    name: "Milton",
    slug: "milton",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a10", "a14"],
    nearbyJunctions: ["junction-14"],
    nearbyLocations: ["waterbeach", "histon", "cambridge"],
    descriptionContext: "A major junction point on the A14 serving traffic heading north on the A10."
  },
  {
    name: "Waterbeach",
    slug: "waterbeach",
    type: "village",
    county: "Cambridgeshire",
    nearbyRoads: ["a10"],
    nearbyJunctions: [],
    nearbyLocations: ["milton", "cottenham"],
    descriptionContext: "Located along the A10 north of Cambridge, a key route requiring reliable vehicle recovery."
  },

  // Further M11 Corridor Towns
  {
    name: "Epping",
    slug: "epping",
    type: "town",
    county: "Essex",
    nearbyRoads: ["m11", "m25"],
    nearbyJunctions: ["junction-6"],
    nearbyLocations: ["harlow", "loughton", "chigwell"],
    descriptionContext: "A vital junction point connecting the M11 with the M25 motorway network."
  },
  {
    name: "Loughton",
    slug: "loughton",
    type: "town",
    county: "Essex",
    nearbyRoads: ["m11"],
    nearbyJunctions: ["junction-5"],
    nearbyLocations: ["chigwell", "epping"],
    descriptionContext: "Situated near the southern end of the M11, serving commuter routes into London."
  },
  {
    name: "Chigwell",
    slug: "chigwell",
    type: "town",
    county: "Essex",
    nearbyRoads: ["m11"],
    nearbyJunctions: ["junction-4"],
    nearbyLocations: ["loughton"],
    descriptionContext: "Located at the start of the M11 corridor in Greater London / Essex borders."
  },
];
