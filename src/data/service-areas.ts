import { offices } from "@/data/offices";

export const areaToOffice: Record<string, keyof typeof offices> = {
  "northern-beaches": "monaVale",
  "north-shore": "turramurra",
  "hills-district": "kenthurst",
  ryde: "epping",
  "inner-west": "gladesville",
  "eastern-suburbs": "gladesville",
  "western-sydney": "kenthurst",
  parramatta: "epping",
  penrith: "kenthurst",
  hawkesbury: "kenthurst",
  "north-west-sydney": "kenthurst",
  "south-sydney": "gladesville",
  "sutherland-shire": "gladesville",
  "st-george": "gladesville",
};

export const areaLabels: Record<string, string> = {
  "northern-beaches": "Northern Beaches",
  "north-shore": "North Shore",
  "hills-district": "Hills District",
  ryde: "Ryde",
  "inner-west": "Inner West",
  "eastern-suburbs": "Eastern Suburbs",
  "western-sydney": "Western Sydney",
  parramatta: "Parramatta",
  penrith: "Penrith",
  hawkesbury: "Hawkesbury",
  "north-west-sydney": "North West Sydney",
  "south-sydney": "South Sydney",
  "sutherland-shire": "Sutherland Shire",
  "st-george": "St George",
};

export const suburbSlugs = [
  "mosman",
  "dover-heights",
  "longueville",
  "northbridge",
  "castlecrag",
  "hunters-hill",
  "roseville",
  "lindfield",
  "wahroonga",
  "normanhurst",
  "turramurra",
];
