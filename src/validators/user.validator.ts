import Joi from "joi";

export const userValidator =
    Joi
        .object({
            username: Joi
                .string()
                .pattern(/w{4,}/)
                .required()
                // .messages('error')
                .messages({
                    "string.pattern.base":"only words accepted",
                    "string.required.base":"username is required"
                }),
            age:Joi
                .number()
                .min(0)
                .max(20)
                .required()
                .messages({
                "number.min":"not enough",
                "number.max":"so so many"
            })
        })