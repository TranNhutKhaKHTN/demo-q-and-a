// import { exec, fork } from "child_process";

// export default function handler(req: any, res: any) {
//   const { url } = req.query;

//   if (!url) {
//     return res.status(400).json({ error: "URL is required" });
//   }

//   //   fork("./.next/server/collection.worker.js", url, { cwd: process.cwd() });
//   try {
//     // const paymentId = req.body.paymentId as string;
//     fork("./.next/server/collection.worker.js", [url], {
//       cwd: process.cwd(),
//     });
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({});
//   }

//   res.status(200).json({});

//   //   exec(`ping ${url}`, (error, stdout, stderr) => {
//   //     if (error) {
//   //       return res.status(500).json({ error: `Error: ${error.message}` });
//   //     }

//   //     if (stderr) {
//   //       return res.status(500).json({ error: `Stderr: ${stderr}` });
//   //     }

//   //     return res.status(200).json({ output: stdout });
//   //   });
// }

// // pages/api/ping.js

// // export default async function handler(req, res) {
// //   const { url } = req.query;

// //   if (!url) {
// //     return res.status(400).json({ error: "URL is required" });
// //   }

// //   const start = Date.now();

// //   try {
// //     const response = await fetch(url, { method: "HEAD" }); // Use HEAD request for minimal data
// //     const end = Date.now();

// //     if (!response.ok) {
// //       return res
// //         .status(response.status)
// //         .json({ error: `Request failed with status ${response.status}` });
// //     }

// //     const pingTime = end - start;
// //     return res.status(200).json({
// //       ping: pingTime,
// //       status: response.status,
// //       statusText: response.statusText,
// //     });
// //   } catch (error) {
// //     return res.status(500).json({ error: `Error: ${error.message}` });
// //   }
// // }
"use strict";

import ping from "ping";

export default async function handler(req: any, res: any) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await ping.promise.probe(url, {
      timeout: 10,
    });

    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(500).json({ error: `Error: ${error.message}` });
  }
}
