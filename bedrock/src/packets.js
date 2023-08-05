const cp = require("child_process");
const path = require("path");

module.exports = async (version, outputDir) => {
  const cwd = path.join(__dirname, "deps", "bedrock-protocol");
  cp.execSync("npm install", { cwd });

  await require("./deps/bedrock-protocol/tools/genPacketDumps").dumpPackets(version, true);
}
