const fs = require("fs");
const path = require("path");

const atprotoDID = process.env.ATPROTO_DID;

if (!atprotoDID) {
	console.error("couldn't find ATPROTO_DID!");
	process.exit(1);
};

const wellKnownDirPath = path.join(__dirname, "public", ".well-known");
const atprotoDIDFilePath = path.join(wellKnownDirPath, "atproto-did");
const indexFilePath = path.join(__dirname, "public", "index.html");

fs.mkdirSync(wellKnownDirPath, {
	recursive: true
});

fs.writeFileSync(atprotoDIDFilePath, atprotoDID);

const indexContent = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="0; url=https://bsky.app/profile/${atprotoDID}">
        <title>Redirecting...</title>
    </head>
</html>
`;

fs.writeFileSync(indexFilePath, indexContent);
