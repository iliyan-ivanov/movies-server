import express from "express";
import { Movie } from "../models/movieModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.director ||
      !req.body.premiereYear ||
      !req.body.description ||
      !req.body.imageUrl ||
      !req.body.videoUrl ||
      !req.body.category ||
      !req.body.type
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: title, director, premiereYear, description, imageUrl",
      });
    }

    const newMovie = {
      title: req.body.title,
      director: req.body.director,
      premiereYear: req.body.premiereYear,
      category: req.body.category,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      videoUrl: req.body.videoUrl,
      type: req.body.type
    };

    const movie = await Movie.create(newMovie);

    return res.status(201).send(movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    return res.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.director ||
      !req.body.premiereYear ||
      !req.body.category ||
      !req.body.description ||
      !req.body.imageUrl ||
      !req.body.videoUrl ||
      !req.body.type
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, director, premiereYear, description, imageUrl",
      });
    }

    const { id } = req.params;

    const result = await Movie.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).send({ message: "Movie updated succesfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Movie.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
