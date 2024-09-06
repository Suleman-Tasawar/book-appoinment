import type { NextApiRequest, NextApiResponse } from "next";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;
    if (email === "sulemantasawar9@gmail.com" && password === "suleman2024") {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    if (error === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}
