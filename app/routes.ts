import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("test", "routes/test.tsx"),
] satisfies RouteConfig;
