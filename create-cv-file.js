const fs = require("fs")
const path = require("path")

const directoryPath = path.join(process.cwd(), "public")
const filePath = path.join(directoryPath, "Vinay_CV.pdf")

// Create an empty file (0 bytes) as a placeholder
fs.writeFileSync(filePath, "")

console.log("Placeholder CV file created at:", filePath)

