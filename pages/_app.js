import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme.js";
import createEmotionCache from "../theme/createEmotionCache.js";
import { CacheProvider } from "@emotion/react";
import Layout from "../components/Layout/index.jsx";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
