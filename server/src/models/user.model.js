import mongoose from 'mongoose';


const userProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authData',
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        default: ""
    },
    occupation: {
        type: String,
        default: ""
    },
    preferences: {
        theme: {
            type: String,
            default: 'light'
        }
    }
}, { timestamps: true });

const userProfile = new mongoose.model("profile", userProfileSchema);


export default userProfile;