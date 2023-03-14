const Joi= require('joi')
const mongoose= require('mongoose')
const {eventSchema}= require('./event')
const {attendeeSchema}= require('./attendee')
 
//FOR DEFINING THE MODEL OF ATTENDEE CLASS
const Report= mongoose.model('Report', new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    event:{
        type:String,
        required: true
    },
    attendee: {
        type: String,
        required: true
    }

}))

function validateReport(report){
    const schema= {
        title: Joi.string().required(),
        eventId: Joi.string().required(),
        attendeeId: Joi.string().required()
    }
    return Joi.validate(report,schema)
}

exports.Report= Report;
exports.validate= validateReport;