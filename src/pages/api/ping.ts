import { exec } from "child_process";

export default function handler(req: any, res: any) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  exec(`ping ${url}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: `Error: ${error.message}` });
    }

    if (stderr) {
      return res.status(500).json({ error: `Stderr: ${stderr}` });
    }

    return res.status(200).json({ output: stdout });
  });
}
