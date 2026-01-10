// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_nuxt/*",
    "/logos/SVG/ANA.svg",
    "/logos/SVG/ARI.svg",
    "/logos/SVG/BOS.svg",
    "/logos/SVG/BUF.svg",
    "/logos/SVG/CAR.svg",
    "/logos/SVG/CBJ.svg",
    "/logos/SVG/CGY.svg",
    "/logos/SVG/CHI.svg",
    "/logos/SVG/COL.svg",
    "/logos/SVG/DAL.svg",
    "/logos/SVG/DET.svg",
    "/logos/SVG/EDM.svg",
    "/logos/SVG/FLA.svg",
    "/logos/SVG/LAK.svg",
    "/logos/SVG/MIN.svg",
    "/logos/SVG/MTL.svg",
    "/logos/SVG/NJD.svg",
    "/logos/SVG/NSH.svg",
    "/logos/SVG/NYI.svg",
    "/logos/SVG/NYR.svg",
    "/logos/SVG/OTT.svg",
    "/logos/SVG/PHI.svg",
    "/logos/SVG/PHX.svg",
    "/logos/SVG/PIT.svg",
    "/logos/SVG/SEA.svg",
    "/logos/SVG/SJS.svg",
    "/logos/SVG/STL.svg",
    "/logos/SVG/TBL.svg",
    "/logos/SVG/TOR.svg",
    "/logos/SVG/VAN.svg",
    "/logos/SVG/VGK.svg",
    "/logos/SVG/WPG.svg",
    "/logos/SVG/WSH.svg"
  ]
};

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/home/maximep/projects/nhlstats-v2-frontend/.wrangler/tmp/pages-ZuiJbx/bundledWorker-0.5039099526721996.mjs";
import { isRoutingRuleMatch } from "/home/maximep/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/home/maximep/projects/nhlstats-v2-frontend/.wrangler/tmp/pages-ZuiJbx/bundledWorker-0.5039099526721996.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=ojbxdjee4to.js.map
