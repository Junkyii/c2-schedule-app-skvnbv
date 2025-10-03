
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { getColors, createThemedStyles } from '@/styles/commonStyles';
import { useTheme } from '@/contexts/ThemeContext';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Subject {
  id: number;
  name: string;
  day: string;
  time: string;
  sks: number;
  color: string;
}

const dayOrder = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

export default function ScheduleScreen() {
  const { isDark } = useTheme();
  const colors = getColors(isDark);
  const themedStyles = createThemedStyles(isDark);
  
  const [startDate, setStartDate] = useState(new Date(2024, 9, 8)); // October 8, 2024
  const [showDatePicker, setShowDatePicker] = useState(false);

  const subjects: Subject[] = [
    {
      id: 1,
      name: 'KALKULUS',
      day: 'Sabtu',
      time: '12.30-14.10',
      sks: 3,
      color: colors.primary,
    },
    {
      id: 2,
      name: 'TEKNOLOGI INFORMASI\n(otomatis perkantoran)',
      day: 'Rabu',
      time: '10.00-11.40',
      sks: 3,
      color: colors.secondary,
    },
    {
      id: 3,
      name: 'ALGORITMA DAN PEMOGRAMAN',
      day: 'Jumat',
      time: '13.00-14.40',
      sks: 3,
      color: colors.accent,
    },
    {
      id: 4,
      name: 'PENDIDIKAN AGAMA 1',
      day: 'Sabtu',
      time: '11.00-11.50',
      sks: 1,
      color: colors.success,
    },
    {
      id: 5,
      name: 'BAHASA INDONESIA UNTUK\nPENULISAN ILMIAH',
      day: 'Rabu',
      time: '14.30-16.10',
      sks: 2,
      color: colors.warning,
    },
    {
      id: 6,
      name: 'KOMUNIKASI DIGITAL',
      day: 'Sabtu',
      time: '08.00-09.40',
      sks: 3,
      color: '#8b5cf6',
    },
    {
      id: 7,
      name: 'KECERDASAN EMOSIONAL',
      day: 'Rabu',
      time: '12.30-14.10',
      sks: 2,
      color: colors.error,
    },
    {
      id: 8,
      name: 'B.INGGRIS 1',
      day: 'Jumat',
      time: '15.00-16.40',
      sks: 2,
      color: '#06b6d4',
    },
  ];

  const totalSKS = subjects.reduce((sum, subject) => sum + subject.sks, 0);

  const groupedSubjects = subjects.reduce((acc, subject) => {
    if (!acc[subject.day]) {
      acc[subject.day] = [];
    }
    acc[subject.day].push(subject);
    return acc;
  }, {} as Record<string, Subject[]>);

  // Sort subjects within each day by time
  Object.keys(groupedSubjects).forEach(day => {
    groupedSubjects[day].sort((a, b) => {
      const timeA = a.time.split('-')[0];
      const timeB = b.time.split('-')[0];
      return timeA.localeCompare(timeB);
    });
  });

  const sortedDays = Object.keys(groupedSubjects).sort((a, b) => {
    return dayOrder.indexOf(a) - dayOrder.indexOf(b);
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const renderSubjectCard = (subject: Subject) => (
    <View key={subject.id} style={[styles.subjectCard, themedStyles.card]}>
      <View style={[styles.subjectColorBar, { backgroundColor: subject.color }]} />
      <View style={styles.subjectContent}>
        <Text style={[styles.subjectName, { color: colors.text }]}>{subject.name}</Text>
        <View style={styles.subjectDetails}>
          <View style={styles.detailRow}>
            <IconSymbol name="clock" size={16} color={colors.textSecondary} />
            <Text style={[styles.detailText, { color: colors.textSecondary }]}>{subject.time}</Text>
          </View>
          <View style={styles.detailRow}>
            <IconSymbol name="book.closed" size={16} color={colors.textSecondary} />
            <Text style={[styles.detailText, { color: colors.textSecondary }]}>{subject.sks} SKS</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderDaySchedule = (day: string) => (
    <View key={day} style={styles.dayContainer}>
      <View style={styles.dayHeader}>
        <Text style={[styles.dayTitle, { color: colors.text }]}>{day}</Text>
        <Text style={[styles.daySubjectCount, { color: colors.textSecondary }]}>
          {groupedSubjects[day].length} mata kuliah
        </Text>
      </View>
      {groupedSubjects[day].map(renderSubjectCard)}
    </View>
  );

  return (
    <SafeAreaView style={[themedStyles.wrapper, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <Text style={[themedStyles.title, styles.headerTitle]}>
          Jadwal Kuliah
        </Text>
        <Text style={[styles.classInfo, { color: colors.primary }]}>KRS KELAS C2</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          Platform.OS !== 'ios' && styles.scrollContentWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Start Date Section */}
        <View style={[styles.dateSection, themedStyles.card]}>
          <View style={styles.dateSectionHeader}>
            <IconSymbol name="calendar" size={24} color={colors.primary} />
            <Text style={[styles.dateSectionTitle, { color: colors.text }]}>Tanggal Mulai Semester</Text>
          </View>
          <Pressable 
            style={[styles.dateButton, { backgroundColor: colors.highlight }]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={[styles.dateText, { color: colors.text }]}>{formatDate(startDate)}</Text>
            <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
          </Pressable>
        </View>

        {/* Summary Section */}
        <View style={[styles.summarySection, themedStyles.card]}>
          <View style={styles.summaryHeader}>
            <IconSymbol name="chart.bar" size={24} color={colors.primary} />
            <Text style={[styles.summaryTitle, { color: colors.text }]}>Ringkasan</Text>
          </View>
          <View style={styles.summaryStats}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.primary }]}>{subjects.length}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Mata Kuliah</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.primary }]}>{totalSKS}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Total SKS</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.primary }]}>{sortedDays.length}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Hari Kuliah</Text>
            </View>
          </View>
        </View>

        {/* Schedule by Day */}
        <View style={styles.scheduleSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Jadwal Mingguan</Text>
          {sortedDays.map(renderDaySchedule)}
        </View>
      </ScrollView>

      {/* Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginBottom: 4,
  },
  classInfo: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100, // Extra padding for floating tab bar
  },
  dateSection: {
    marginBottom: 16,
  },
  dateSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
  },
  summarySection: {
    marginBottom: 16,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
  },
  scheduleSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  daySubjectCount: {
    fontSize: 14,
  },
  subjectCard: {
    flexDirection: 'row',
    marginBottom: 8,
    overflow: 'hidden',
  },
  subjectColorBar: {
    width: 4,
  },
  subjectContent: {
    flex: 1,
    padding: 16,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    lineHeight: 22,
  },
  subjectDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    marginLeft: 6,
  },
});
