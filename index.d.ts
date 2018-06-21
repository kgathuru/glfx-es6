declare module "glfx-es6" {
  interface Texture {
    destroy: () => void
  }

  interface GlfxCanvas extends HTMLCanvasElement {
    texture: (imageNode: HTMLElement) => Texture
    draw: (texture: Texture) => GlfxCanvas
    brightnessContrast: (brightness: number, contrast: number) => GlfxCanvas
    denoise: (exponent: number) => GlfxCanvas
    hueSaturation: (hue: number, saturation: number) => GlfxCanvas
    ink: (strength: number) => GlfxCanvas
    update: () => GlfxCanvas
  }

  function canvas(): GlfxCanvas
}
