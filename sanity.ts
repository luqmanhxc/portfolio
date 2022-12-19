import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-10-21", // https://www.sanity.io/docs/api-versioning
    useCdn: process.env.NODE_ENV === "production", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);
