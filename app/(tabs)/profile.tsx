import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { colors, commonStyles } from "@/styles/commonStyles";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={[commonStyles.wrapper, { backgroundColor: colors.background }]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={[styles.profileHeader, commonStyles.card]}>
          <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
            <IconSymbol name="person.fill" color={colors.card} size={40} />
          </View>
          <Text style={[styles.name, { color: colors.text }]}>Mahasiswa</Text>
          <Text style={[styles.email, { color: colors.textSecondary }]}>mahasiswa@college.edu</Text>
          <Text style={[styles.classInfo, { color: colors.primary }]}>KRS KELAS C2</Text>
        </View>

        {/* Academic Info */}
        <View style={[styles.infoCard, commonStyles.card]}>
          <View style={[styles.infoIcon, { backgroundColor: colors.primary }]}>
            <IconSymbol name="graduationcap" color={colors.card} size={20} />
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>Program Studi</Text>
            <Text style={[styles.infoSubtitle, { color: colors.textSecondary }]}>Teknik Informatika</Text>
          </View>
        </View>

        <View style={[styles.infoCard, commonStyles.card]}>
          <View style={[styles.infoIcon, { backgroundColor: colors.secondary }]}>
            <IconSymbol name="calendar" color={colors.card} size={20} />
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>Semester</Text>
            <Text style={[styles.infoSubtitle, { color: colors.textSecondary }]}>Semester 1 - 2024/2025</Text>
          </View>
        </View>

        <View style={[styles.infoCard, commonStyles.card]}>
          <View style={[styles.infoIcon, { backgroundColor: colors.accent }]}>
            <IconSymbol name="chart.bar" color={colors.text} size={20} />
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>Total SKS</Text>
            <Text style={[styles.infoSubtitle, { color: colors.textSecondary }]}>19 SKS dari 8 Mata Kuliah</Text>
          </View>
        </View>

        <View style={[styles.infoCard, commonStyles.card]}>
          <View style={[styles.infoIcon, { backgroundColor: '#10b981' }]}>
            <IconSymbol name="clock" color={colors.card} size={20} />
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>Jadwal Kuliah</Text>
            <Text style={[styles.infoSubtitle, { color: colors.textSecondary }]}>Rabu, Jumat, Sabtu</Text>
          </View>
        </View>

        {/* Contact Info */}
        <View style={[styles.sectionHeader, { marginTop: 20 }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Informasi Kontak</Text>
        </View>

        <View style={[styles.infoCard, commonStyles.card]}>
          <View style={[styles.infoIcon, { backgroundColor: '#f59e0b' }]}>
            <IconSymbol name="envelope" color={colors.card} size={20} />
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>Email</Text>
            <Text style={[styles.infoSubtitle, { color: colors.textSecondary }]}>mahasiswa@college.edu</Text>
          </View>
        </View>

        <View style={[styles.infoCard, commonStyles.card]}>
          <View style={[styles.infoIcon, { backgroundColor: '#ef4444' }]}>
            <IconSymbol name="phone" color={colors.card} size={20} />
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>Telepon</Text>
            <Text style={[styles.infoSubtitle, { color: colors.textSecondary }]}>+62 812-3456-7890</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100, // Extra padding for floating tab bar
  },
  profileHeader: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  classInfo: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  infoSubtitle: {
    fontSize: 14,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
