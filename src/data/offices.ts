export type Office = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  mapEmbed: string;
};

export const offices: Record<string, Office> = {
  monaVale: {
    name: "Mona Vale Office",
    address: "1747A Pittwater Rd, Mona Vale NSW 2103",
    lat: -33.6784,
    lng: 151.3005,
    phone: "(02) 5849 6376",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.1789106143306!2d151.30047157594365!3d-33.67843127329999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d558489e9db55%3A0x2b949b6c978e47a8!2sYour%20Local%20Pergola%20Builder!5e0!3m2!1sen!2ses!4v1776264891415!5m2!1sen!2ses",
  },
  turramurra: {
    name: "Turramurra Office",
    address: "99 Eastern Rd, Turramurra NSW 2074",
    lat: -33.7209,
    lng: 151.1286,
    phone: "(02) 5849 6376",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.538972799065!2d151.12858157594525!3d-33.72087657328347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a785f697bb39%3A0x965caff1dae811e4!2sYour%20Local%20Pergola%20Builder!5e0!3m2!1sen!2ses!4v1776264871346!5m2!1sen!2ses",
  },
  turramurraPrinces: {
    name: "Turramurra Office",
    address: "18 Princes St, Turramurra NSW 2074",
    lat: -33.7243,
    lng: 151.132,
    phone: "(02) 5849 6376",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13583.874666620546!2d151.13204082933873!3d-33.72434955742177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a980ce5a2a6b%3A0xde92f520c01dc937!2sYour%20Local%20Pergola%20Installer!5e0!3m2!1sen!2ses!4v1776264982264!5m2!1sen!2ses",
  },
  epping: {
    name: "Epping Office",
    address: "119A Midson Rd, Epping NSW 2121",
    lat: -33.7756,
    lng: 151.069,
    phone: "(02) 5849 6376",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.4233002733226!2d151.0689596759474!3d-33.77556547326241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a5d44b80b5ad%3A0xa7925cdcac9ac1a5!2sYour%20Local%20Pergola%20Builder!5e0!3m2!1sen!2ses!4v1776264846551!5m2!1sen!2ses",
  },
  gladesville: {
    name: "Gladesville Office",
    address: "10 Linsley St, Gladesville NSW 2111",
    lat: -33.8323,
    lng: 151.1227,
    phone: "(02) 5849 6376",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.2256832095927!2d151.12272387594967!3d-33.832290073240635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a5bc6ca4dba3%3A0xf5d8fd2037dda17f!2sYour%20Local%20Pergola%20Installer!5e0!3m2!1sen!2ses!4v1776264915043!5m2!1sen!2ses",
  },
  kenthurst: {
    name: "Kenthurst Office",
    address: "4 Nelson St, Kenthurst NSW 2156",
    lat: -33.6609,
    lng: 151.0034,
    phone: "(02) 5849 6376",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.8562712335447!2d151.00340077594285!3d-33.660885873306924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d5f3c54ac5911%3A0x94d3c51073bc8423!2sYour%20Local%20Pergola%20Builder!5e0!3m2!1sen!2ses!4v1776264813839!5m2!1sen!2ses",
  },
};

export const officeDisplayOrder: (keyof typeof offices)[] = [
  "monaVale",
  "turramurra",
  "turramurraPrinces",
  "epping",
  "gladesville",
  "kenthurst",
];

/** Google Maps embed for the site-wide contact sidebar — Gladesville listing (Your Local Pergola Installer). */
export const defaultContactMapEmbedUrl = offices.gladesville.mapEmbed;
