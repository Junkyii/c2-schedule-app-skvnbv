
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { useTheme } from '@/contexts/ThemeContext';
import { getColors } from '@/styles/commonStyles';

export default function ThemeToggleButton() {
  const { isDark, toggleTheme, themeMode } = useTheme();
  const colors = getColors(isDark);

  const getThemeIcon = () => {
    if (themeMode === 'system') {
      return 'gear';
    }
    return isDark ? 'moon.fill' : 'sun.max.fill';
  };

  const getThemeText = () => {
    switch (themeMode) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System Theme';
      default:
        return 'Theme';
    }
  };

  return (
    <Pressable
      style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={toggleTheme}
    >
      <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
        <IconSymbol 
          name={getThemeIcon()} 
          color={colors.card} 
          size={20} 
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          Theme
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          {getThemeText()}
        </Text>
      </View>
      <View style={styles.chevronContainer}>
        <IconSymbol 
          name="chevron.right" 
          color={colors.textSecondary} 
          size={16} 
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 6,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
  },
  chevronContainer: {
    marginLeft: 8,
  },
});
