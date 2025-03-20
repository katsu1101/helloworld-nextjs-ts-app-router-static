import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "docs", ".nojekyll");

// `.nojekyll` ファイルを作成（存在しない場合のみ）
fs.writeFileSync(filePath, "");

console.log("✅ .nojekyll created successfully!");
