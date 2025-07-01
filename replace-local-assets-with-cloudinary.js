const fs = require('fs')
const path = require('path')

const mapping = JSON.parse(fs.readFileSync('cloudinary-mapping.json', 'utf8'))
const exts = ['.tsx', '.ts', '.js', '.jsx']
const srcDir = path.join(__dirname, 'src')

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDir(filePath, fileList)
    } else if (exts.includes(path.extname(file))) {
      fileList.push(filePath)
    }
  }
  return fileList
}

function replaceInFile(filePath, mapping) {
  let content = fs.readFileSync(filePath, 'utf8')
  let replaced = false
  for (const [local, cloudUrl] of Object.entries(mapping)) {
    // Replace both with and without leading './' or '/'
    const patterns = [
      local,
      './' + local,
      '/' + local.replace(/^src\//, ''),
      local.replace(/^src\//, ''),
      local.replace(/^public\//, ''),
    ]
    for (const pat of patterns) {
      // Only replace if found as a string (in quotes)
      const regex = new RegExp(
        `(['"])${pat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`,
        'g',
      )
      if (regex.test(content)) {
        content = content.replace(regex, `'${cloudUrl}'`)
        replaced = true
      }
    }
  }
  if (replaced) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log('Updated:', filePath)
  }
}

const files = walkDir(srcDir)
files.forEach((file) => replaceInFile(file, mapping))
console.log('All done!')
