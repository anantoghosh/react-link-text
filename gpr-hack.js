import { writeFileSync, readFileSync } from "fs";

const file = readFileSync("./package.json", {
  encoding: "utf-8",
});

const json = JSON.parse(file);

json.name = "@anantoghosh/react-linkify-it";

writeFileSync("./package.json", JSON.stringify(json, undefined, 2));
