import cloudinaryMapping from '../../cloudinary-mapping.json'

type CloudinaryMapping = {
  [key: string]: string
}

type CloudinaryTransformation = {
  width?: number
  height?: number
  quality?: number
  format?: 'auto' | 'webp' | 'jpg' | 'png'
  blur?: number
}

export const getCloudinaryUrl = (
  localPath: string,
  transformations: CloudinaryTransformation = {},
) => {
  // Get the base URL from the mapping
  const mapping = cloudinaryMapping as CloudinaryMapping
  const baseUrl = mapping[localPath]
  if (!baseUrl) {
    console.warn(`No Cloudinary URL found for ${localPath}`)
    return localPath
  }

  // Split the URL into parts
  const [baseWithVersion, ...pathParts] = baseUrl.split('/upload/')
  const path = pathParts.join('/upload/')

  // Build transformation string
  const transforms = []
  if (transformations.width) transforms.push(`w_${transformations.width}`)
  if (transformations.height) transforms.push(`h_${transformations.height}`)
  if (transformations.quality) transforms.push(`q_${transformations.quality}`)
  if (transformations.format) transforms.push(`f_${transformations.format}`)
  if (transformations.blur) transforms.push(`e_blur:${transformations.blur}`)

  // If no transformations, return original URL
  if (transforms.length === 0) return baseUrl

  // Insert transformations after /upload/
  return `${baseWithVersion}/upload/${transforms.join(',')}/${path}`
}

// Helper function to get thumbnail version
export const getThumbnailUrl = (localPath: string) => {
  return getCloudinaryUrl(localPath, {
    width: 400,
    quality: 80,
    format: 'auto',
  })
}

// Helper function to get full-size version
export const getFullSizeUrl = (localPath: string) => {
  return getCloudinaryUrl(localPath, {
    quality: 90,
    format: 'auto',
  })
}
