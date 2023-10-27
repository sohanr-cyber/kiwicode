import nc from "next-connect";

import axios from "axios";
const FACEBOOK_APP_ID = "1003142304277683";
const FACEBOOK_APP_SECRET = "a67c4f6ae971d23b477ae62191c9b3a4";
const ACCESS_TOKEN =
  "EAAOQWkS0pLMBO14Vyg0tLNB4OyFUJxX4GwFKWvlqRWuKrRPJZATeZC1EKYZCFhQFGp9qTFca6TK9k38Lqc13EiTv3MD29MJRsS9VyTFZAJbOx8Jrr3a1lDmkM1x6ZAjEkskt03aGBcXuZAA7FlZCvIa1mH0Q8ZBE8x3ZBUepnMicG4tmxeCZCXz1KybtUgoUWUd1g7I8eXQ2mS0QZDZD";
const handler = nc();

handler.get(async (req, res) => {
  try {
    // Use the Facebook Graph API to retrieve messages
    const response = await axios.get(
      `https://graph.facebook.com/v13.0/me/conversations?access_token=${ACCESS_TOKEN}`
    );

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
});

export default handler;
