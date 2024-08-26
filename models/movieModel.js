import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        premiereYear: {
            type: Number,
            required: true
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
            required: true
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