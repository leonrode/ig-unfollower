const {
  IgApiClient,
  IgLoginBadPasswordError,
} = require("instagram-private-api");

const login = async (username, password) => {
  const client = new IgApiClient();
  client.state.generateDevice(username);
  try {
    await client.account.login(username, password);
  } catch (e) {
    if (e instanceof IgLoginBadPasswordError) {
      return null;
    }
  }
  return client;
};

const findNonFollowers = async (client) => {
  const followingFeed = client.feed.accountFollowing(client.state.cookieUserId);
  const followersFeed = client.feed.accountFollowers(client.state.cookieUserId);

  const following = await getAllItemsFromFeed(followingFeed);
  const followers = await getAllItemsFromFeed(followersFeed);

  const setOfFollowers = new Set(
    followers.map((follower) => follower.username)
  );

  const usersNotFollowing = following.filter(
    (followingUser) => !setOfFollowers.has(followingUser.username)
  );

  return usersNotFollowing;
};

async function getAllItemsFromFeed(feed) {
  let items = [];
  do {
    items = items.concat(await feed.items());
  } while (feed.isMoreAvailable());
  return items;
}

export { login, findNonFollowers };
