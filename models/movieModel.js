import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 50
        },
        director: {
            type: String,
            required: true,
            maxlength: 30
        },
        premiereYear: {
            type: Number,
            required: true,
            maxlength: 4
        },
        category: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
            validate: /^https:\/\/www.youtube.com\/?/
        },
        videoUrl: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Movie = mongoose.model('Movie', movieSchema);