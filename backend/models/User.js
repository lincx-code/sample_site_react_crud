const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

let userSchema = new Schema(
    {
        id: {
            type: ObjectId
        },
        first_name: {
            type: String
        },
        middle_name: {
            type: String
        },
        last_name: {
            type: String
        },
        gender: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        }
    }, {
        collection: 'users'
    }
)

module.exports = mongoose.model('User', userSchema)
