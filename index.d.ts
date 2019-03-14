declare module "glfx-es6" {
  interface Texture {
    destroy: () => void
  }

  interface GlfxCanvas extends HTMLCanvasElement {
    texture: (imageNode: HTMLElement) => Texture
    draw: (texture: Texture) => GlfxCanvas
    brightnessContrast: (brightness: number, contrast: number) => GlfxCanvas
    curves: (red: any, green: any, blue: any) => GlfxCanvas
    denoise: (exponent: number) => GlfxCanvas
    hueSaturation: (hue: number, saturation: number) => GlfxCanvas
    noise: (amount: number) => GlfxCanvas
    sepia: (amount: number) => GlfxCanvas
    unsharpMask: (radius: number, strength: number) => GlfxCanvas
    vibrance: (amount: number) => GlfxCanvas
    vignette: (size: number, amount: number) => GlfxCanvas
    lensBlur: (radius: number, brightness: number, angle: number) => GlfxCanvas
    tiltShift: (startX: number, startY: number, endX: number, endY: number,
      blurRadius: number, gradientRadius: number) => GlfxCanvas
    triangleBlur: (radius: number) => GlfxCanvas
    zoomBlur: (centerX: number, centerY: number, strength: number) => GlfxCanvas
    colorHalftone: (centerX: number, centerY: number, angle: number, size: number) => GlfxCanvas
    dotScreen: (centerX: number, centerY: number, angle: number, size: number) => GlfxCanvas
    edgeWork: (radius: number) => GlfxCanvas
    hexagonalPixelate: (centerX: number, centerY: number, scale: number) => GlfxCanvas
    ink: (strength: number) => GlfxCanvas
    bulgePinch: (centerX: number, centerY: number, radius: number, strength: number) => GlfxCanvas
    matrixWarp: (matrix: any, inverse: any, useTextureSpace: any) => GlfxCanvas
    perspective: (before: any, after: any) => GlfxCanvas
    swirl: (centerX: number, centerY: number, radius: number, angle: number) => GlfxCanvas
    update: () => GlfxCanvas
    replace: (node: any) => GlfxCanvas
  }

  function canvas(): GlfxCanvas
}
