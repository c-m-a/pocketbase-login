import { email, nonEmpty, object, pipe, string, trim } from "valibot";

const signUpSchema = pipe(
  object({
    email: pipe(
      string(),
      trim(),
      nonEmpty("Please enter your email"),
      email("The email address is badly formatted."),
    ),
  }),
);

export default signUpSchema;
