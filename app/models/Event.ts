import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

const eventSchema = new Schema(
    {
        title: String,
        description: String,
        location: String,
        date: String,
        slug: String,

    }, {
        timestamps: true,
    }
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema)
export default Event;