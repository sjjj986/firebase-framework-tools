import type { RouteHas } from "next/dist/lib/load-custom-routes.js";

export interface RoutesManifestRewriteObject {
  beforeFiles?: RoutesManifestRewrite[];
  afterFiles?: RoutesManifestRewrite[];
  fallback?: RoutesManifestRewrite[];
}

export interface RoutesManifestRedirect {
  source: string;
  destination: string;
  locale?: false;
  internal?: boolean;
  statusCode: number;
  regex: string;
  has?: RouteHas[];
  missing?: RouteHas[];
}

export interface RoutesManifestRewrite {
  source: string;
  destination: string;
  has?: RouteHas[];
  missing?: RouteHas[];
  regex: string;
}

export interface RoutesManifestHeader {
  source: string;
  headers: { key: string; value: string }[];
  has?: RouteHas[];
  missing?: RouteHas[];
  regex: string;
}

// Next.js's exposed interface is incomplete here
export interface RoutesManifest {
  version: number;
  pages404: boolean;
  basePath: string;
  redirects: Array<RoutesManifestRedirect>;
  rewrites?: Array<RoutesManifestRewrite> | RoutesManifestRewriteObject;
  headers: Array<RoutesManifestHeader>;
  staticRoutes: Array<{
    page: string;
    regex: string;
    namedRegex?: string;
    routeKeys?: { [key: string]: string };
  }>;
  dynamicRoutes: Array<{
    page: string;
    regex: string;
    namedRegex?: string;
    routeKeys?: { [key: string]: string };
  }>;
  dataRoutes: Array<{
    page: string;
    routeKeys?: { [key: string]: string };
    dataRouteRegex: string;
    namedDataRouteRegex?: string;
  }>;
  i18n?: {
    domains?: Array<{
      http?: true;
      domain: string;
      locales?: string[];
      defaultLocale: string;
    }>;
    locales: string[];
    defaultLocale: string;
    localeDetection?: false;
  };
}
