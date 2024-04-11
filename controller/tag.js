const User = require("../models/user.model")



async function calculateTagCounts() {
  const users = await User.find({});

  const tagCounts = users.reduce((counts, user) => {
    user.tagList.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
    return counts;
  }, {});
  

  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }));

  return sortedTags;
}


async function getTopTags(req, res) {
  try {
    const topTags = await calculateTagCounts();
    console.log(topTags);

    const tagList = topTags.map((item) => item.tag)
    const topTenTags = tagList.slice(0, 10);

    console.log(topTenTags);
    res.json(topTenTags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  getTopTags,
};