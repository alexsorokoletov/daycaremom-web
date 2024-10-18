import mixpanel from "mixpanel-browser";

mixpanel?.init("7e84705533c2fd13052a87737969df75", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

// Attach Mixpanel to the global window object
if (typeof window !== "undefined") {
  window.mixpanel = mixpanel;
}

export default mixpanel;
