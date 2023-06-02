// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { IpfsStorage } = initSchema(schema);

export { IpfsStorage };
