const { z } = require("zod");

const loginSchema = z.object({
    email: z
    .string({required_error: "Email is Required"})
    .trim()
    .email({message: "Invalid Email"}),
    password: z
    .string({required_error: "Password is Required"})
    .trim()
    .min(7, {message: "Password must be at least of 7 characters"})
    .max(1024, {message: "username must not be more than 1024 characters."}),
});

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error: "Username is Required"})
    .trim()
    .min(3, {message: "Username must be at least of 3 characters"})
    .max(20, {message: "Username must not be more than 20 characters."}),
    phone: z
    .string({required_error: "Phone Number is Required"})
    .trim()
    .min(10, {message: "Phone Number must be at least of 10 characters"})
    .max(20, {message: "Phone must not be more than 15 characters."}),
});


module.exports = { signupSchema, loginSchema };