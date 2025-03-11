"use server";

import { neon } from "@neondatabase/serverless";

export default async function addReview(
  author: string,
  review: string,
  projectName: string
) {
  const sql = neon(process.env.DATABASE_URL!);
  await sql("INSERT INTO reviews (author,review,projectName) VALUES ($1, $2, $3)", [
    author,
    review,
    projectName,
  ]);
}
