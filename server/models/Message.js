const { Schema, model } = require('mongoose');
var mongoose = require('mongoose'); 
mongoose.set('debug', true);

const MessageSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }, 
    message: {
        type: String
    }
}); 

const Message = model('Message', MessageSchema, 'Message');

module.exports = Message;