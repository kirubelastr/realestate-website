import { buildConfig } from "payload/config";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from"@payloadcms/bundler-webpack";
import path from "path";
import { Users } from "./collections/users";
import dotenv from "dotenv"

dotenv.config({
    path: path.resolve(__dirname,"../.env"),
})

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [
        Users,
    ],
    routes: {
        admin: '/sell',
    },
    admin: {
        user: "users",
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- Realestate',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
          },
    },
    rateLimit: {
        max: 500,
    },
    editor: slateEditor({}),
    db: postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URI,
        },
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
})