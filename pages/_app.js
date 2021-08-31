import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progressBar = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 8,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#fe595e",

  // Class name used for the progress bar element.
  className: "z-50",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 100,
});

Router.events.on("routeChangeStart", progressBar.start);
Router.events.on("routeChangeComplete", progressBar.finish);
Router.events.on("routeChangeError", progressBar.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
