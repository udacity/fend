// simple regexp to check that URL starts with http(s), ://, and includes no spaces.
function isURLValid(url) {
  const valid_url_regexp = /^(http|https):\/\/[^ "]+$/;
  return valid_url_regexp.test(url);
}

export { isURLValid };
