const fs = require('fs');
const path = require('path');

const src = 'src';
const sourceFilesPath = path.join(__dirname, src);

fs.readdirSync(sourceFilesPath).forEach((file: string) => {
	require(`./${src}/` + file);
});
