const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

// Load .env
dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.avi', '.mkv']

const ASSET_DIRS = ['src/assets/images', 'src/assets/videos', 'public/images']

const outputMapping = {}

function isImage(file) {
  return IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
}
function isVideo(file) {
  return VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
}

async function uploadFile(localPath, publicId, resourceType) {
  try {
    const result = await cloudinary.uploader.upload(localPath, {
      public_id: publicId,
      resource_type: resourceType,
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    })
    return result.secure_url
  } catch (err) {
    console.error(`Failed to upload ${localPath}:`, err)
    return null
  }
}

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDir(filePath, fileList)
    } else {
      fileList.push(filePath)
    }
  }
  return fileList
}

async function main() {
  for (const assetDir of ASSET_DIRS) {
    const files = walkDir(assetDir)
    for (const file of files) {
      const relPath = path.relative('.', file).replace(/\\/g, '/')
      let resourceType = null
      if (isImage(file)) resourceType = 'image'
      else if (isVideo(file)) resourceType = 'video'
      if (!resourceType) continue
      // Remove src/assets/ or public/ prefix for publicId
      let publicId = relPath
        .replace(/^src\/assets\//, '')
        .replace(/^public\//, '')
      publicId = publicId.replace(/\.[^.]+$/, '') // Remove extension
      console.log(`Uploading ${relPath} as ${resourceType} to Cloudinary...`)
      const url = await uploadFile(file, publicId, resourceType)
      if (url) {
        outputMapping[relPath] = url
      }
    }
  }
  fs.writeFileSync(
    'cloudinary-mapping.json',
    JSON.stringify(outputMapping, null, 2),
  )
  console.log('Upload complete! Mapping saved to cloudinary-mapping.json')
}

main()
