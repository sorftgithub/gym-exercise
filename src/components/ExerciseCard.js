import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

import { exerciseImageUrl } from "../utils/fetchData";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        src={exerciseImageUrl(exercise.id, "360")}
        alt={exercise.name}
        loading="lazy"
      />
    </Link>
  );
};

export default ExerciseCard;
