const fetchSentimentAnalysis = async (url) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: { "Content-Type": "application/json" },
  };

  return await fetch(
    "http://localhost:5000/sentiment-analysis",
    requestOptions
  );
};

export { fetchSentimentAnalysis };
