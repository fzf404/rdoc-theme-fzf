const fs = require('fs');

const pathName = '.cache/md';
const jsonPath = '.rdoc-dist/search.json';
const cnamePath = '.rdoc-dist/CNAME'

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item) => {
    if (item.endsWith('.md')) {
      filesList.push(`/#/${item.replace(/___/g, '/').replace('.md', '')}`);
    }
  });
  return filesList;
}

const filesList = readFileList(pathName);

fs.writeFile(jsonPath, JSON.stringify(filesList, '', '\t'), err => err);
fs.writeFile(cnamePath, 'note.fzf404.art', err => err);