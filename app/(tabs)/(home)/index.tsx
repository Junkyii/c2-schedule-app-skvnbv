import React from "react";
import { Stack } from "expo-router";
import { StyleSheet, View, Text, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";

export default function HomeScreen() {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Beranda",
            headerStyle: {
              backgroundColor: colors.card,
            },
            headerTintColor: colors.text,
          }}
        />
      )}
      <SafeAreaView style={[commonStyles.wrapper, { backgroundColor: colors.background }]}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Welcome Section */}
          <View style={[styles.welcomeSection, commonStyles.card]}>
            <View style={styles.welcomeHeader}>
              <IconSymbol name="graduationcap" size={32} color={colors.primary} />
              <View style={styles.welcomeText}>
                <Text style={styles.welcomeTitle}>Selamat Datang!</Text>
                <Text style={styles.welcomeSubtitle}>KRS KELAS C2</Text>
              </View>
            </View>
            <Text style={styles.dateText}>{currentDate}</Text>
          </View>

          {/* Quick Stats */}
          <View style={[styles.statsSection, commonStyles.card]}>
            <Text style={styles.sectionTitle}>Ringkasan Semester</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <IconSymbol name="book.closed" size={24} color={colors.primary} />
                <Text style={styles.statNumber}>8</Text>
                <Text style={styles.statLabel}>Mata Kuliah</Text>
              </View>
              <View style={styles.statCard}>
                <IconSymbol name="chart.bar" size={24} color={colors.accent} />
                <Text style={styles.statNumber}>19</Text>
                <Text style={styles.statLabel}>Total SKS</Text>
              </View>
              <View style={styles.statCard}>
                <IconSymbol name="calendar" size={24} color={colors.secondary} />
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Hari Kuliah</Text>
              </View>
            </View>
          </View>

          {/* Today's Schedule Preview */}
          <View style={[styles.todaySection, commonStyles.card]}>
            <View style={styles.todaySectionHeader}>
              <IconSymbol name="clock" size={24} color={colors.primary} />
              <Text style={styles.sectionTitle}>Jadwal Hari Ini</Text>
            </View>
            <View style={styles.noSchedule}>
              <IconSymbol name="checkmark.circle" size={48} color={colors.textSecondary} />
              <Text style={styles.noScheduleText}>Tidak ada jadwal kuliah hari ini</Text>
              <Text style={styles.noScheduleSubtext}>Nikmati waktu luang Anda!</Text>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={[styles.actionsSection, commonStyles.card]}>
            <Text style={styles.sectionTitle}>Aksi Cepat</Text>
            <View style={styles.actionsList}>
              <View style={styles.actionItem}>
                <View style={styles.actionIcon}>
                  <IconSymbol name="calendar" size={20} color={colors.card} />
                </View>
                <Text style={styles.actionText}>Lihat Jadwal Lengkap</Text>
                <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
              </View>
              <View style={styles.actionItem}>
                <View style={[styles.actionIcon, { backgroundColor: colors.accent }]}>
                  <IconSymbol name="bell" size={20} color={colors.text} />
                </View>
                <Text style={styles.actionText}>Atur Pengingat</Text>
                <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100, // Extra padding for floating tab bar
  },
  welcomeSection: {
    marginBottom: 16,
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  welcomeText: {
    marginLeft: 12,
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 2,
  },
  dateText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
  statsSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
    padding: 12,
    backgroundColor: colors.highlight,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  todaySection: {
    marginBottom: 16,
  },
  todaySectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  noSchedule: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  noScheduleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
    marginBottom: 4,
  },
  noScheduleSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  actionsSection: {
    marginBottom: 16,
  },
  actionsList: {
    gap: 12,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: colors.highlight,
    borderRadius: 12,
  },
  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
});
