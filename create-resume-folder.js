const fs = require("fs")
const path = require("path")

const directoryPath = path.join(process.cwd(), "public", "resume")
const filePath = path.join(directoryPath, "Vinay_Resume.pdf")

// Create the directory if it doesn't exist
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true })
}

// Create an empty file (0 bytes) as a placeholder
fs.writeFileSync(filePath, "")

console.log("Placeholder resume file created at:", filePath)

