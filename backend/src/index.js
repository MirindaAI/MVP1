export default {
  async fetch(request) {
    if (request.method === "POST") {
      const body = await request.json();
      const { repoUrl, appName } = body;
      await DEPLOY_KV.put(`deploy:${appName}`, repoUrl);
      return new Response(`Triggered deploy for ${appName}`);
    }
    return new Response("OK");
  },
};
