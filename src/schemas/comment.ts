import { normalize, schema } from "normalizr";

export const commentSchema = new schema.Entity("comment");

export function commentsNormalize(comments: IComment[]) {
  return normalize(comments, [commentSchema]);
}

export function commentNormalize(comment: IComment) {
  return normalize(comment, commentSchema);
}
