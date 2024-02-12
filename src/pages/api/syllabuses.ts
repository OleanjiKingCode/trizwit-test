import { Syllabus, syllabusesData } from "@/Data/syllabusesData";
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  error: string;
};

type ApiResponseType = Syllabus[] | ErrorResponse;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseType>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  res.status(200).json(syllabusesData);
}
