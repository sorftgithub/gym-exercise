export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const EXERCISE_IMAGE_RESOLUTIONS = ["180", "360", "720", "1080"];

// Images now come from a separate streaming endpoint. The key goes in the query string so the <img> tag can load it directly.
export const exerciseImageUrl = (exerciseId, resolution = "360") =>
  `https://exercisedb.p.rapidapi.com/image?exerciseId=${encodeURIComponent(
    exerciseId
  )}&resolution=${resolution}&rapidapi-key=${
    process.env.REACT_APP_RAPID_API_KEY
  }`;
