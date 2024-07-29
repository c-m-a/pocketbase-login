import {
  email,
  minLength,
  nonEmpty,
  object,
  pipe,
  string,
  trim,
} from "valibot";

const signUpSchema = pipe(
  object({
    email: pipe(
      string(),
      trim(),
      nonEmpty("Please enter your email"),
      email("The email address is badly formatted!"),
    ),
    password: pipe(
      string(),
      minLength(1, "Please enter your password!"),
      nonEmpty("Please enter a password"),
    ),
  }),
);

export default signUpSchema;
