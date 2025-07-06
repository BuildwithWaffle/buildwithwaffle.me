// Central color configuration for Build with Waffle
// Change these values to update the entire site's color scheme

export const colors = {
  // Primary accent color (currently orange)
  primary: '#f97316', // Orange-500
  primaryHover: '#ea580c', // Orange-600
  primaryPressed: '#c2410c', // Orange-700
  primaryLight: '#fed7aa', // Orange-200
  primaryShadow: 'rgba(249, 115, 22, 0.4)',
  primaryShadowHover: 'rgba(249, 115, 22, 0.6)',
  
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#FAFAFA',
  
  // Text colors
  textPrimary: '#111827', // gray-900
  textSecondary: '#4B5563', // gray-600
  textTertiary: '#6B7280', // gray-500
  
  // Border and divider colors
  border: '#E5E7EB', // gray-200
  borderHover: '#D1D5DB', // gray-300
  
  // Surface colors for cards and components
  surface: '#FFFFFF',
  surfaceHover: '#F9FAFB', // gray-50
};

export const cssVariables = `
  :root {
    --primary-accent: ${colors.primary};
    --primary-accent-hover: ${colors.primaryHover};
    --primary-accent-pressed: ${colors.primaryPressed};
    --primary-accent-light: ${colors.primaryLight};
    --primary-accent-shadow: ${colors.primaryShadow};
    --primary-accent-shadow-hover: ${colors.primaryShadowHover};
    
    --background: ${colors.background};
    --background-secondary: ${colors.backgroundSecondary};
    
    --text-primary: ${colors.textPrimary};
    --text-secondary: ${colors.textSecondary};
    --text-tertiary: ${colors.textTertiary};
    
    --border: ${colors.border};
    --border-hover: ${colors.borderHover};
    
    --surface: ${colors.surface};
    --surface-hover: ${colors.surfaceHover};
  }
`;
