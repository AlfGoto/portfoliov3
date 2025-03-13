"use server";

import Basalf from "basalf";

export default async function addReview(
  author: string,
  review: string,
  projectName: string
) {
  const basalf = new Basalf(process.env.BASALF_KEY);
  await basalf
    .from("reviews")
    .where({ id: 1 })
    .insert({ author, review, projectName });
}
