
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const lightColors = {
  background: '#f0f4f7',
  text: '#1e293b',
  textSecondary: '#64748b',
  primary: '#2563eb',
  secondary: '#93c5fd',
  accent: '#facc15',
  card: '#ffffff',
  highlight: '#e2e8f0',
  border: '#d1d5db',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
};

export const darkColors = {
  background: '#0f172a',
  text: '#f1f5f9',
  textSecondary: '#94a3b8',
  primary: '#3b82f6',
  secondary: '#1e40af',
  accent: '#fbbf24',
  card: '#1e293b',
  highlight: '#334155',
  border: '#475569',
  success: '#059669',
  warning: '#d97706',
  error: '#dc2626',
};

// Default to light colors for backward compatibility
export const colors = lightColors;

export const getColors = (isDark: boolean) => isDark ? darkColors : lightColors;

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.highlight,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.highlight,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.primary,
  },
});

// Dynamic styles that adapt to theme
export const createThemedStyles = (isDark: boolean) => {
  const themeColors = getColors(isDark);
  
  return StyleSheet.create({
    wrapper: {
      backgroundColor: themeColors.background,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      backgroundColor: themeColors.background,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 800,
      width: '100%',
    },
    title: {
      fontSize: 24,
      fontWeight: '800',
      textAlign: 'center',
      color: themeColors.text,
      marginBottom: 10
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      color: themeColors.text,
      marginBottom: 8,
      lineHeight: 24,
      textAlign: 'center',
    },
    section: {
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    card: {
      backgroundColor: themeColors.card,
      borderColor: themeColors.highlight,
      borderWidth: 1,
      borderRadius: 10,
      padding: 16,
      marginVertical: 8,
      width: '100%',
      boxShadow: isDark ? '0px 2px 8px rgba(0, 0, 0, 0.3)' : '0px 2px 8px rgba(0, 0, 0, 0.1)',
      elevation: 3,
    },
    icon: {
      width: 60,
      height: 60,
      tintColor: themeColors.primary,
    },
  });
};
