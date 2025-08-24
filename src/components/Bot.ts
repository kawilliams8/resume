export const asciiArt = ` ____  __                _            ____        _    
| __ )| |_   _  ___  ___| | ___   _  | __ )  ___ | |_ 
|  _ \\| | | | |/ _ \\/ __| |/ / | | | |  _ \\ / _ \\| __|
| |_) | | |_| |  __/\\__ \\   <| |_| | | |_) | (_) | |_ 
|____/|_|\\__,_|\\___||___/_|\\_\\\\__, | |____/ \\___/ \\__|
                               |___/                   `;

interface TerminalCommand {
  command: string;
  output: Array<{
    text: string;
    type?: "output" | "error" | "success" | "info";
    delay?: number;
    tech?: string[];
  }>;
}

export const commands: Record<string, TerminalCommand> = {
  "bot status": {
    command: "bot status",
    output: [
      { text: "Fetching bot status...", type: "info", delay: 100 },
      { text: "✓ Bot is ONLINE", type: "success", delay: 1500 },
      { text: "├─ Uptime: Initialized in NOV-2024, 99.9% Success", delay: 200 },
      { text: "├─ Bot Schedule: 2 posts total per 24 HRS, UTC", delay: 300 },
      { text: "├─ Last post: Executed today", delay: 500 },
      { text: "├─ Post Queue: 38 posts scheduled", delay: 200 },
      {
        text: "└─ Health: All systems operational.",
        type: "success",
        delay: 700,
      },
      { text: "", delay: 300 },
    ],
  },
  "bot run": {
    command: "bot run",
    output: [
      {
        text: "Executing scheduled post sequence...",
        type: "info",
        delay: 500,
      },
      { text: "", delay: 1500 },
      {
        text: "[1/7] 🕐 Checking table of scheduled photo nodes...",
        delay: 800,
      },
      {
        text: "└─ Next post scheduled for: NOW",
        type: "success",
        delay: 400,
        tech: ["Cron", "Node.js"],
      },
      { text: "", delay: 600 },
      { text: "[2/7] 📊 Selecting next scheduled photo id...", delay: 1000 },
      {
        text: "├─ Photo id selection status: SUCCESS",
        type: "success",
        delay: 400,
        tech: ["SQLite", "Node.js"],
      },
      { text: "", delay: 200 },
      {
        text: "[3/7] ✨ Requesting data from Denver Public Library Digital Archive...",
        delay: 1200,
      },
      { text: "├─ Downloading image...", delay: 400 },
      { text: "├─ Resizing image...", delay: 1100 },
      {
        text: "├─ Scraping HTML and text values...",
        delay: 800,
      },
      {
        text: "└─ Content retrieval status: SUCCESS",
        type: "success",
        delay: 400,
      },
      { text: "[4/7] ✨ Generating content...", delay: 1200 },
      {
        text: "├─ POST $data to Anthropic: title, description, date, creator...",
        delay: 400,
      },
      {
        text: "├─ Format with Claude AI Models...",
        delay: 800,
        tech: ["OpenAI", "TypeScript"],
      },
      {
        text: "├─ Content generated (247 chars): SUCCESS",
        type: "success",
        delay: 400,
      },
      { text: "└─ Hash tags generated: SUCCESS", type: "success", delay: 400 },
      { text: "", delay: 200 },
      { text: "[5/7] 🔍 Validating content...", delay: 800 },
      { text: "├─ ✓ Length check: PASS", type: "success", delay: 200 },
      { text: "├─ ✓ Duplicate check: PASS", type: "success", delay: 200 },
      {
        text: "├─ ✓ Rate limit check: PASS",
        type: "success",
        delay: 200,
      },
      {
        text: "└─ ✓ Bluesky Content guidelines: PASS",
        type: "success",
        delay: 200,
      },
      { text: "", delay: 200 },
      { text: "[6/7] 🎨 Preparing for Bluesky API...", delay: 600 },
      {
        text: "├─ Image upload...",
        delay: 100,
      },
      {
        text: "├─ Image upload endpoint response: OK",
        delay: 1800,
        type: "success",
      },
      { text: "├─ Extracting hash tags", delay: 300 },
      { text: "├─ Extracting Archive link url", delay: 300 },
      { text: "├─ Adding rich text formatting", delay: 300 },
      { text: "└─ Preparing API payload", delay: 300, tech: ["TypeScript"] },
      { text: "", delay: 200 },
      {
        text: "[7/7] 🚀 Publishing to Bluesky...",
        delay: 800,
        tech: ["Bluesky API", "AWS"],
      },
      { text: "└─ Post published successfully!", type: "success", delay: 600 },
      { text: "", delay: 300 },
    ],
  },
  "bot tech": {
    command: "bot tech",
    output: [
      { text: "Loading tech stack...", type: "info", delay: 300 },
      { text: "", delay: 900 },
      { text: "🛠️ Core Technologies:", type: "info", delay: 300 },
      {
        text: "├─ Runtime: Node.js v20.8.1 (Ubuntu 24.04.2)",
        delay: 100,
        tech: ["Node.js", "AWS", "npm", "TypeScript"],
      },
      {
        text: "├─ Language: TypeScript 5.6.3",
        delay: 100,
        tech: ["JavaScript", "TypeScript"],
      },
      { text: "├─ Database: SQLite 5.1.1", delay: 100, tech: ["SQLite"] },
      {
        text: "├─ Secret Management: GitHub Actions",
        delay: 200,
        tech: ["GitHub"],
      },
      {
        text: "├─ Scheduler: Cron 3.2.1 (every 12 hours)",
        delay: 100,
        tech: ["Cron"],
      },
      {
        text: "├─ Image Processing: Axios, Cheerio 1.0.0, Process 0.11.10, Sharp 0.33.5",
        delay: 300,
        tech: ["Axios", "Cheerio"],
      },
      {
        text: "├─ AI Text Processing: Claude 0.39.0, Cheerio 1.0.0",
        delay: 100,
        tech: ["Anthropic-AI/SDK", "Cheerio"],
      },
      {
        text: "├─ API: Bluesky AT Proto API 0.13.15",
        delay: 100,
        tech: ["AT Proto API"],
      },
      { text: "", delay: 100 },
      { text: "📦 Key Dependencies:", delay: 200 },
      { text: "├─ @atproto/api: ^0.13.15", delay: 100 },
      { text: "├─ anthropic-ai/sdk: ^0.39.0", delay: 100 },
      { text: "├─ cron: ^3.2.1", delay: 100 },
      { text: "├─ sqlite3: ^5.1.7", delay: 200 },
      { text: "└─ sqlite: ^5.1.1", delay: 100 },
      { text: "", delay: 300 },
    ],
  },
};
