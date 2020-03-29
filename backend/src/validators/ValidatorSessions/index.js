const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    session: () => {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                id: Joi.string().required()
            })
        })
    }  
}