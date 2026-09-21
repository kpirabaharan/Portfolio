// three.js can't read CSS variables or oklch(), so the 3D scene uses hex
// approximations of the tokens in app/globals.css. Keep the two in sync.
export const sceneColors = {
  primary: '#2dd4bf', // --primary
  brand: '#115e59', // --brand
  core: '#4fd1c1',
  ring: '#99f6e4',
  white: '#f4f6f8', // --foreground
} as const;
