const axios = require("axios")

async function bard(prompt) {
  try {
    const response = await axios.post('https://bard.rizzy.eu.org/backend/conversation', {
      ask: prompt
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });
    return response.data.content;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { bard }