# Liquid Glass

Open-source **canvas liquid glass**. SDF rim refraction, shared body/rim blur, faint top/bottom hairline. No CSS `backdrop-filter` on the pill.

Locked spec from the Prometheus demo:

```
rim 32 · strength 20 · chroma 0.7 · spec 0.28 · fill 0.1 · blur 2.5
```

- GitHub: https://github.com/XposeMarket/liquid-glass

## Install

```bash
npm install @xposemarket/liquid-glass
```

Until the name is published on npm, install from GitHub:

```bash
npm install github:XposeMarket/liquid-glass
```

## Use

```js
import { mountLiquidGlass, DEFAULT_SPEC } from "@xposemarket/liquid-glass";

const el = document.querySelector("#stage");
mountLiquidGlass(el, {
  spec: DEFAULT_SPEC,
  drawScene(ctx, w, h) {
    ctx.fillStyle = "#1a1e26";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#f0f4f8";
    ctx.font = "600 42px -apple-system, sans-serif";
    ctx.fillText("drag the glass over this line", w * 0.07, h * 0.3);
  },
});
```

`DEFAULT_SPEC` is the screenshot lock. You can override keys, but the landing page does not expose sliders.

## How it works

1. Sample the backdrop under the pill
2. Box-blur that field once (`blur`)
3. SDF rounded-rect fillet
4. Warp only near the rim (`|d|` so the center stays identity)
5. Inward refraction on both long edges
6. RGB split only at grazing angles
7. Dark clear slab + faint white top/bottom hairline

## License

MIT
