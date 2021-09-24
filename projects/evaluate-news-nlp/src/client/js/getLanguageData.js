const getLanguageData = async (url = "") => {
  const response = await fetch(url);
  try {
    const newData = await response.json();
    console.log("getLanguageData", newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

getLanguageData();

export { getLanguageData };
