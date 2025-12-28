import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";


const posts = defineCollection({
    loader: glob({
            pattern: "**/*.md",
            base: "./src/content/",
        }),
    schema: z.object({
        title: z.string(),
        launch_date: z.date(),
        status: z.enum(['Active', 'Inactive', 'Decommissioned']),
        tags: z.string().array(),
        destination: z.string(),
        publishedAt: z.string().date().optional(),
		updatedAt: z.string().date().optional(),
    }),
});

export const collections = { posts };