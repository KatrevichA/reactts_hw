import Joi from "joi";

export const postValidator =
    Joi
        .object({
            title: Joi.string().required().messages({'string.required': 'title name cannot be empty'}),
            body:Joi.string().required().messages({'string.required': 'body name cannot be empty'}),
            userId:Joi.number().min(1).max(10).required().messages({
                'number.required': 'userId name cannot be empty',
                'number.min': 'userId name cannot be empty lt 1',
                'number.max': 'userId name cannot be empty gt 10',
            }),
        })