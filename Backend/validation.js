const joi = require('@hapi/joi');

const registerValidation=(data)=>{
    const joiSchema= joi.object({
    username: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required()

    });
    return joiSchema.validate(data);
}

const loginValidation=(data)=>{
    const joiSchema= joi.object({
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required()

    });
    return joiSchema.validate(data);
}

const postValidation=(data)=>{
    const joiSchema= joi.object({
        title:joi.string().min(6).required(),
        salary:joi.string().min(6).required(),
        desc:joi.string().min(6).required()
    });
    return joiSchema.validate(data)
}

module.exports.registerValidation=registerValidation
module.exports.loginValidation=loginValidation
module.exports.postValidation=postValidation