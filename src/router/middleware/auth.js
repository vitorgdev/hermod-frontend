import JWT from "../../api/jwt";

export default function auth({ next, router }) {
  console.log(router);

  if (!JWT.get()) {
    return router.push({ name: "auth" });
  }

  return next();
}
