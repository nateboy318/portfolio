import { createApp } from "vue";
import { inject } from "@vercel/analytics";

import "./App.scss";
import App from "./App.vue";

createApp(App).mount("#app");

inject();
