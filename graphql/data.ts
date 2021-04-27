import fg from "fast-glob"
import * as fs from "fs"
import yaml from "js-yaml"
import GeoPattern from "geopattern"

const postFiles = fg.sync(["content/*.yml"], { absolute: true })

export const posts = postFiles.map((filePath) => {
  const post = yaml.safeLoad(fs.readFileSync(filePath))

  const pattern = GeoPattern.generate(post.title)
  post.image = pattern.toDataUri()

  post.hostname = new URL(post.url).hostname
  post.createdAt = new Date(post.createdAt).toISOString()

  return post
});