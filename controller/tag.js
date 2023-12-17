const User = require("../models/user.model")



async function calculateTagCounts() {
  const users = await User.find({});

  const tagCounts = {};
  for (const user of users) {
    for (const tag of user.tagList) {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    }
  }

  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }));

  return sortedTags;
}


async function getTopTags(req, res) {
  try {
    const topTags = await calculateTagCounts();
    res.json(topTags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}


module.exports = {
  getTopTags,
};