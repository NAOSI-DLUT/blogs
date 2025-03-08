import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind3,
} from "unocss";

export default defineConfig({
  presets: [presetWind3(), presetTypography(), presetIcons()],
  preflights: [{ getCSS: () => '[class^="i-"] { display: inline-block; }' }],
});
