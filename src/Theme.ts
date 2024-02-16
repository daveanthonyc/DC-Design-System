export const designTokens = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    error: '#dc3545',
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
};

export type Theme = typeof designTokens;
