import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DIRECT_DATABASE_URL'),  // Use the direct (5432) URL for migrations
  },
});
