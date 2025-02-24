import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { createAuth } from "@keystone-next/auth";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { insertSeedData } from "./seed-data";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    // TODO: Add in initial roles here
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      async onConnect(keystone) {
        console.log("Connected to database");
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
      // TODO: Add data seeding here
    },
    lists: createSchema({
      // Schema items go in here
      User,
      Product,
      ProductImage,
      // CartItem,
      // OrderItem,
      // Order,
      // Role,
    }),
    ui: {
      // TODO: change this for roles
      //   Show the UI only for people who pass this test
      isAccessAllowed: ({ session }) => {
        return session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: `id name email`,
    }),
    //   TODO: Add session
  })
);
