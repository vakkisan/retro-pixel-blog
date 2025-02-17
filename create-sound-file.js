const fs = require("fs")
const path = require("path")

const directoryPath = path.join(process.cwd(), "public", "sounds")
const filePath = path.join(directoryPath, "success.mp3")

// Create the directory if it doesn't exist
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true })
}

// Create an empty file (0 bytes) as a placeholder
fs.writeFileSync(filePath, "")

console.log("Placeholder sound file created at:", filePath)

