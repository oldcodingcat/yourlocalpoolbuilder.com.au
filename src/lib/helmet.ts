import * as HelmetModule from "react-helmet-async";

type HelmetExports = typeof HelmetModule & {
  default?: Partial<typeof HelmetModule>;
};

const H = HelmetModule as HelmetExports;

export const Helmet: typeof HelmetModule.Helmet = (H.Helmet ?? H.default?.Helmet) as typeof HelmetModule.Helmet;
export const HelmetProvider: typeof HelmetModule.HelmetProvider = (H.HelmetProvider ??
  H.default?.HelmetProvider) as typeof HelmetModule.HelmetProvider;
