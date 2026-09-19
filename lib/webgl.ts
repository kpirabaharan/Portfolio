let supported: boolean | undefined;

// Checked once per page load; creating a context just to test it is not free.
export const hasWebGL = (): boolean => {
  if (supported !== undefined) return supported;
  try {
    const canvas = document.createElement('canvas');
    supported = Boolean(
      canvas.getContext('webgl2') ?? canvas.getContext('webgl'),
    );
  } catch {
    supported = false;
  }
  return supported;
};
