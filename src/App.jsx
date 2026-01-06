import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const translations = {
  tr: {
    title: 'Akıllı Tatil Planlayıcı',
    country: 'Ülke',
    language: 'Dil',
    year: 'Yıl',
    annualLeave: 'Yıllık İzin Günü',
    calculate: 'Hesapla',
    optimalPlan: 'Seçili Plan',
    alternativePlans: 'Alternatif Planlar',
    useLeave: 'izin kullan',
    getTotalDays: 'gün tatil yap',
    days: 'gün',
    editHolidays: 'Tatil Günlerini Düzenle',
    manageExclusions: 'İzin Kullanılamayacak Günler',
    saveChanges: 'Değişiklikleri Kaydet',
    cancel: 'İptal',
    addHoliday: 'Tatil Ekle',
    addExclusion: 'Hariç Tutulan Gün Ekle',
    date: 'Tarih',
    holidayName: 'Tatil Adı',
    exclusionReason: 'Hariç Tutma Nedeni',
    type: 'Tip',
    official: 'Resmi',
    religious: 'Dini',
    actions: 'İşlemler',
    totalLeaveUsed: 'Toplam Kullanılan İzin',
    totalHolidayDays: 'Toplam Tatil Günü',
    remainingLeave: 'Kalan İzin',
    efficiency: 'Verimlilik',
    selectPlan: 'Bu Planı Seç',
    clickToSelect: 'Seçmek için tıklayın'
  },
  en: {
    title: 'Smart Holiday Planner',
    country: 'Country',
    language: 'Language',
    year: 'Year',
    annualLeave: 'Annual Leave Days',
    calculate: 'Calculate',
    optimalPlan: 'Selected Plan',
    alternativePlans: 'Alternative Plans',
    useLeave: 'use leave',
    getTotalDays: 'get total days',
    days: 'days',
    editHolidays: 'Edit Holidays',
    manageExclusions: 'Days When Leave Cannot Be Used',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    addHoliday: 'Add Holiday',
    addExclusion: 'Add Excluded Date',
    date: 'Date',
    holidayName: 'Holiday Name',
    exclusionReason: 'Exclusion Reason',
    type: 'Type',
    official: 'Official',
    religious: 'Religious',
    actions: 'Actions',
    totalLeaveUsed: 'Total Leave Used',
    totalHolidayDays: 'Total Holiday Days',
    remainingLeave: 'Remaining Leave',
    efficiency: 'Efficiency',
    selectPlan: 'Select This Plan',
    clickToSelect: 'Click to select'
  }
};

const defaultHolidayData = {
  TR: {
    2026: [
      { date: '2026-01-01', name: { tr: 'Yılbaşı', en: 'New Year' }, type: 'official' },
      { date: '2026-03-30', name: { tr: 'Ramazan Bayramı 1. Gün', en: 'Eid al-Fitr Day 1' }, type: 'religious' },
      { date: '2026-03-31', name: { tr: 'Ramazan Bayramı 2. Gün', en: 'Eid al-Fitr Day 2' }, type: 'religious' },
      { date: '2026-04-01', name: { tr: 'Ramazan Bayramı 3. Gün', en: 'Eid al-Fitr Day 3' }, type: 'religious' },
      { date: '2026-04-23', name: { tr: '23 Nisan', en: 'National Sovereignty Day' }, type: 'official' },
      { date: '2026-05-01', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2026-05-19', name: { tr: 'Gençlik ve Spor Bayramı', en: 'Youth and Sports Day' }, type: 'official' },
      { date: '2026-06-06', name: { tr: 'Kurban Bayramı 1. Gün', en: 'Eid al-Adha Day 1' }, type: 'religious' },
      { date: '2026-06-07', name: { tr: 'Kurban Bayramı 2. Gün', en: 'Eid al-Adha Day 2' }, type: 'religious' },
      { date: '2026-06-08', name: { tr: 'Kurban Bayramı 3. Gün', en: 'Eid al-Adha Day 3' }, type: 'religious' },
      { date: '2026-06-09', name: { tr: 'Kurban Bayramı 4. Gün', en: 'Eid al-Adha Day 4' }, type: 'religious' },
      { date: '2026-07-15', name: { tr: 'Demokrasi Bayramı', en: 'Democracy Day' }, type: 'official' },
      { date: '2026-08-30', name: { tr: 'Zafer Bayramı', en: 'Victory Day' }, type: 'official' },
      { date: '2026-10-29', name: { tr: 'Cumhuriyet Bayramı', en: 'Republic Day' }, type: 'official' }
    ],
    2027: [
      { date: '2027-01-01', name: { tr: 'Yılbaşı', en: 'New Year' }, type: 'official' },
      { date: '2027-03-20', name: { tr: 'Ramazan Bayramı 1. Gün', en: 'Eid al-Fitr Day 1' }, type: 'religious' },
      { date: '2027-03-21', name: { tr: 'Ramazan Bayramı 2. Gün', en: 'Eid al-Fitr Day 2' }, type: 'religious' },
      { date: '2027-03-22', name: { tr: 'Ramazan Bayramı 3. Gün', en: 'Eid al-Fitr Day 3' }, type: 'religious' },
      { date: '2027-04-23', name: { tr: '23 Nisan', en: 'National Sovereignty Day' }, type: 'official' },
      { date: '2027-05-01', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2027-05-19', name: { tr: 'Gençlik ve Spor Bayramı', en: 'Youth and Sports Day' }, type: 'official' },
      { date: '2027-05-27', name: { tr: 'Kurban Bayramı 1. Gün', en: 'Eid al-Adha Day 1' }, type: 'religious' },
      { date: '2027-05-28', name: { tr: 'Kurban Bayramı 2. Gün', en: 'Eid al-Adha Day 2' }, type: 'religious' },
      { date: '2027-05-29', name: { tr: 'Kurban Bayramı 3. Gün', en: 'Eid al-Fitr Day 3' }, type: 'religious' },
      { date: '2027-05-30', name: { tr: 'Kurban Bayramı 4. Gün', en: 'Eid al-Adha Day 4' }, type: 'religious' },
      { date: '2027-07-15', name: { tr: 'Demokrasi Bayramı', en: 'Democracy Day' }, type: 'official' },
      { date: '2027-08-30', name: { tr: 'Zafer Bayramı', en: 'Victory Day' }, type: 'official' },
      { date: '2027-10-29', name: { tr: 'Cumhuriyet Bayramı', en: 'Republic Day' }, type: 'official' }
    ],
    2028: [
      { date: '2028-01-01', name: { tr: 'Yılbaşı', en: 'New Year' }, type: 'official' },
      { date: '2028-03-08', name: { tr: 'Ramazan Bayramı 1. Gün', en: 'Eid al-Fitr Day 1' }, type: 'religious' },
      { date: '2028-03-09', name: { tr: 'Ramazan Bayramı 2. Gün', en: 'Eid al-Fitr Day 2' }, type: 'religious' },
      { date: '2028-03-10', name: { tr: 'Ramazan Bayramı 3. Gün', en: 'Eid al-Fitr Day 3' }, type: 'religious' },
      { date: '2028-04-23', name: { tr: '23 Nisan', en: 'National Sovereignty Day' }, type: 'official' },
      { date: '2028-05-01', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2028-05-15', name: { tr: 'Kurban Bayramı 1. Gün', en: 'Eid al-Adha Day 1' }, type: 'religious' },
      { date: '2028-05-16', name: { tr: 'Kurban Bayramı 2. Gün', en: 'Eid al-Adha Day 2' }, type: 'religious' },
      { date: '2028-05-17', name: { tr: 'Kurban Bayramı 3. Gün', en: 'Eid al-Adha Day 3' }, type: 'religious' },
      { date: '2028-05-18', name: { tr: 'Kurban Bayramı 4. Gün', en: 'Eid al-Adha Day 4' }, type: 'religious' },
      { date: '2028-05-19', name: { tr: 'Gençlik ve Spor Bayramı', en: 'Youth and Sports Day' }, type: 'official' },
      { date: '2028-07-15', name: { tr: 'Demokrasi Bayramı', en: 'Democracy Day' }, type: 'official' },
      { date: '2028-08-30', name: { tr: 'Zafer Bayramı', en: 'Victory Day' }, type: 'official' },
      { date: '2028-10-29', name: { tr: 'Cumhuriyet Bayramı', en: 'Republic Day' }, type: 'official' }
    ],
    2029: [
      { date: '2029-01-01', name: { tr: 'Yılbaşı', en: 'New Year' }, type: 'official' },
      { date: '2029-02-25', name: { tr: 'Ramazan Bayramı 1. Gün', en: 'Eid al-Fitr Day 1' }, type: 'religious' },
      { date: '2029-02-26', name: { tr: 'Ramazan Bayramı 2. Gün', en: 'Eid al-Fitr Day 2' }, type: 'religious' },
      { date: '2029-02-27', name: { tr: 'Ramazan Bayramı 3. Gün', en: 'Eid al-Fitr Day 3' }, type: 'religious' },
      { date: '2029-04-23', name: { tr: '23 Nisan', en: 'National Sovereignty Day' }, type: 'official' },
      { date: '2029-05-01', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2029-05-04', name: { tr: 'Kurban Bayramı 1. Gün', en: 'Eid al-Adha Day 1' }, type: 'religious' },
      { date: '2029-05-05', name: { tr: 'Kurban Bayramı 2. Gün', en: 'Eid al-Adha Day 2' }, type: 'religious' },
      { date: '2029-05-06', name: { tr: 'Kurban Bayramı 3. Gün', en: 'Eid al-Adha Day 3' }, type: 'religious' },
      { date: '2029-05-07', name: { tr: 'Kurban Bayramı 4. Gün', en: 'Eid al-Adha Day 4' }, type: 'religious' },
      { date: '2029-05-19', name: { tr: 'Gençlik ve Spor Bayramı', en: 'Youth and Sports Day' }, type: 'official' },
      { date: '2029-07-15', name: { tr: 'Demokrasi Bayramı', en: 'Democracy Day' }, type: 'official' },
      { date: '2029-08-30', name: { tr: 'Zafer Bayramı', en: 'Victory Day' }, type: 'official' },
      { date: '2029-10-29', name: { tr: 'Cumhuriyet Bayramı', en: 'Republic Day' }, type: 'official' }
    ],
    2030: [
      { date: '2030-01-01', name: { tr: 'Yılbaşı', en: 'New Year' }, type: 'official' },
      { date: '2030-02-14', name: { tr: 'Ramazan Bayramı 1. Gün', en: 'Eid al-Fitr Day 1' }, type: 'religious' },
      { date: '2030-02-15', name: { tr: 'Ramazan Bayramı 2. Gün', en: 'Eid al-Fitr Day 2' }, type: 'religious' },
      { date: '2030-02-16', name: { tr: 'Ramazan Bayramı 3. Gün', en: 'Eid al-Fitr Day 3' }, type: 'religious' },
      { date: '2030-04-23', name: { tr: '23 Nisan', en: 'National Sovereignty Day' }, type: 'official' },
      { date: '2030-04-23', name: { tr: 'Kurban Bayramı 1. Gün', en: 'Eid al-Adha Day 1' }, type: 'religious' },
      { date: '2030-04-24', name: { tr: 'Kurban Bayramı 2. Gün', en: 'Eid al-Adha Day 2' }, type: 'religious' },
      { date: '2030-04-25', name: { tr: 'Kurban Bayramı 3. Gün', en: 'Eid al-Adha Day 3' }, type: 'religious' },
      { date: '2030-04-26', name: { tr: 'Kurban Bayramı 4. Gün', en: 'Eid al-Adha Day 4' }, type: 'religious' },
      { date: '2030-05-01', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2030-05-19', name: { tr: 'Gençlik ve Spor Bayramı', en: 'Youth and Sports Day' }, type: 'official' },
      { date: '2030-07-15', name: { tr: 'Demokrasi Bayramı', en: 'Democracy Day' }, type: 'official' },
      { date: '2030-08-30', name: { tr: 'Zafer Bayramı', en: 'Victory Day' }, type: 'official' },
      { date: '2030-10-29', name: { tr: 'Cumhuriyet Bayramı', en: 'Republic Day' }, type: 'official' }
    ]
  },
  US: {
    2026: [
      { date: '2026-01-01', name: { tr: 'Yılbaşı', en: 'New Year\'s Day' }, type: 'official' },
      { date: '2026-01-19', name: { tr: 'Martin Luther King Jr. Günü', en: 'Martin Luther King Jr. Day' }, type: 'official' },
      { date: '2026-02-16', name: { tr: 'Başkanlar Günü', en: 'Presidents\' Day' }, type: 'official' },
      { date: '2026-05-25', name: { tr: 'Anma Günü', en: 'Memorial Day' }, type: 'official' },
      { date: '2026-07-03', name: { tr: 'Bağımsızlık Günü (Tatil)', en: 'Independence Day (Observed)' }, type: 'official' },
      { date: '2026-09-07', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2026-10-12', name: { tr: 'Kolomb Günü', en: 'Columbus Day' }, type: 'official' },
      { date: '2026-11-11', name: { tr: 'Gaziler Günü', en: 'Veterans Day' }, type: 'official' },
      { date: '2026-11-26', name: { tr: 'Şükran Günü', en: 'Thanksgiving' }, type: 'official' },
      { date: '2026-12-25', name: { tr: 'Noel', en: 'Christmas Day' }, type: 'official' }
    ],
    2027: [
      { date: '2027-01-01', name: { tr: 'Yılbaşı', en: 'New Year\'s Day' }, type: 'official' },
      { date: '2027-01-18', name: { tr: 'Martin Luther King Jr. Günü', en: 'Martin Luther King Jr. Day' }, type: 'official' },
      { date: '2027-02-15', name: { tr: 'Başkanlar Günü', en: 'Presidents\' Day' }, type: 'official' },
      { date: '2027-05-31', name: { tr: 'Anma Günü', en: 'Memorial Day' }, type: 'official' },
      { date: '2027-07-05', name: { tr: 'Bağımsızlık Günü (Tatil)', en: 'Independence Day (Observed)' }, type: 'official' },
      { date: '2027-09-06', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2027-10-11', name: { tr: 'Kolomb Günü', en: 'Columbus Day' }, type: 'official' },
      { date: '2027-11-11', name: { tr: 'Gaziler Günü', en: 'Veterans Day' }, type: 'official' },
      { date: '2027-11-25', name: { tr: 'Şükran Günü', en: 'Thanksgiving' }, type: 'official' },
      { date: '2027-12-24', name: { tr: 'Noel (Tatil)', en: 'Christmas Day (Observed)' }, type: 'official' }
    ],
    2028: [
      { date: '2028-01-01', name: { tr: 'Yılbaşı', en: 'New Year\'s Day' }, type: 'official' },
      { date: '2028-01-17', name: { tr: 'Martin Luther King Jr. Günü', en: 'Martin Luther King Jr. Day' }, type: 'official' },
      { date: '2028-02-21', name: { tr: 'Başkanlar Günü', en: 'Presidents\' Day' }, type: 'official' },
      { date: '2028-05-29', name: { tr: 'Anma Günü', en: 'Memorial Day' }, type: 'official' },
      { date: '2028-07-04', name: { tr: 'Bağımsızlık Günü', en: 'Independence Day' }, type: 'official' },
      { date: '2028-09-04', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2028-10-09', name: { tr: 'Kolomb Günü', en: 'Columbus Day' }, type: 'official' },
      { date: '2028-11-10', name: { tr: 'Gaziler Günü (Tatil)', en: 'Veterans Day (Observed)' }, type: 'official' },
      { date: '2028-11-23', name: { tr: 'Şükran Günü', en: 'Thanksgiving' }, type: 'official' },
      { date: '2028-12-25', name: { tr: 'Noel', en: 'Christmas Day' }, type: 'official' }
    ],
    2029: [
      { date: '2029-01-01', name: { tr: 'Yılbaşı', en: 'New Year\'s Day' }, type: 'official' },
      { date: '2029-01-15', name: { tr: 'Martin Luther King Jr. Günü', en: 'Martin Luther King Jr. Day' }, type: 'official' },
      { date: '2029-02-19', name: { tr: 'Başkanlar Günü', en: 'Presidents\' Day' }, type: 'official' },
      { date: '2029-05-28', name: { tr: 'Anma Günü', en: 'Memorial Day' }, type: 'official' },
      { date: '2029-07-04', name: { tr: 'Bağımsızlık Günü', en: 'Independence Day' }, type: 'official' },
      { date: '2029-09-03', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2029-10-08', name: { tr: 'Kolomb Günü', en: 'Columbus Day' }, type: 'official' },
      { date: '2029-11-12', name: { tr: 'Gaziler Günü (Tatil)', en: 'Veterans Day (Observed)' }, type: 'official' },
      { date: '2029-11-22', name: { tr: 'Şükran Günü', en: 'Thanksgiving' }, type: 'official' },
      { date: '2029-12-25', name: { tr: 'Noel', en: 'Christmas Day' }, type: 'official' }
    ],
    2030: [
      { date: '2030-01-01', name: { tr: 'Yılbaşı', en: 'New Year\'s Day' }, type: 'official' },
      { date: '2030-01-21', name: { tr: 'Martin Luther King Jr. Günü', en: 'Martin Luther King Jr. Day' }, type: 'official' },
      { date: '2030-02-18', name: { tr: 'Başkanlar Günü', en: 'Presidents\' Day' }, type: 'official' },
      { date: '2030-05-27', name: { tr: 'Anma Günü', en: 'Memorial Day' }, type: 'official' },
      { date: '2030-07-04', name: { tr: 'Bağımsızlık Günü', en: 'Independence Day' }, type: 'official' },
      { date: '2030-09-02', name: { tr: 'İşçi Bayramı', en: 'Labor Day' }, type: 'official' },
      { date: '2030-10-14', name: { tr: 'Kolomb Günü', en: 'Columbus Day' }, type: 'official' },
      { date: '2030-11-11', name: { tr: 'Gaziler Günü', en: 'Veterans Day' }, type: 'official' },
      { date: '2030-11-28', name: { tr: 'Şükran Günü', en: 'Thanksgiving' }, type: 'official' },
      { date: '2030-12-25', name: { tr: 'Noel', en: 'Christmas Day' }, type: 'official' }
    ]
  }
};

// Ensure React hooks are available as globals in the browser (Babel standalone)
const { useState, useMemo, useEffect, useRef } = React;

// Minimal placeholder icon components to avoid ReferenceError during quick checks
const Calendar = (props) => null;
const TrendingUp = (props) => null;
const Edit2 = (props) => null;
const Plus = (props) => null;
const Trash2 = (props) => null;
const Save = (props) => null;
const X = (props) => null;
const Check = (props) => null;

const App = () => {
  const [country, setCountry] = useState('TR');
  const [language, setLanguage] = useState('tr');
  const [year, setYear] = useState(2026);
  const [annualLeave, setAnnualLeave] = useState(14);
  const [calculated, setCalculated] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [exclusionMode, setExclusionMode] = useState(false);
  const [holidayData, setHolidayData] = useState(defaultHolidayData);
  const [editedHolidays, setEditedHolidays] = useState([]);
  const [excludedDates, setExcludedDates] = useState([]);
  const [editedExclusions, setEditedExclusions] = useState([]);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  const t = translations[language];

  const currentHolidays = useMemo(() => {
    return holidayData[country]?.[year] || [];
  }, [holidayData, country, year]);

  const getDayOfWeek = (dateStr) => {
    const date = new Date(dateStr);
    return date.getDay();
  };

  const addDays = (dateStr, days) => {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  };

  const isWeekend = (dateStr) => {
    const day = getDayOfWeek(dateStr);
    return day === 0 || day === 6;
  };

  const getDateRange = (startDate, endDate) => {
    const dates = [];
    let current = new Date(startDate);
    const end = new Date(endDate);
    
    while (current <= end) {
      dates.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const calculateBridgeOpportunities = () => {
    const opportunities = [];
    const holidaySet = new Set(currentHolidays.map(h => h.date));
    const exclusionSet = new Set(excludedDates.map(e => e.date));
    
    currentHolidays.forEach((holiday, idx) => {
      const holidayDay = getDayOfWeek(holiday.date);
      
      // Perşembe tatil - Sadece Cuma değil, Cuma + Pazartesi-Çarşamba için daha uzun tatil
      if (holidayDay === 4) {
        // Cuma + hafta sonu = 4 gün
        const nextMonday = addDays(holiday.date, 4);
        if (!holidaySet.has(addDays(holiday.date, 1)) && !exclusionSet.has(addDays(holiday.date, 1))) {
          opportunities.push({
            type: 'thursday_bridge',
            holiday: holiday,
            leaveDays: 1,
            totalDays: 4,
            dates: getDateRange(holiday.date, addDays(holiday.date, 3))
          });
        }
        
        // Cuma + Pazartesi-Çarşamba = 7 gün
        if (!holidaySet.has(addDays(holiday.date, 1)) && !holidaySet.has(nextMonday) && 
            !exclusionSet.has(addDays(holiday.date, 1)) && !exclusionSet.has(nextMonday)) {
          opportunities.push({
            type: 'thursday_extended',
            holiday: holiday,
            leaveDays: 4,
            totalDays: 7,
            dates: getDateRange(holiday.date, addDays(holiday.date, 6))
          });
        }
      }
      
      // Salı tatil - Pazartesi alarak 4 gün
      if (holidayDay === 2 && !holidaySet.has(addDays(holiday.date, -1)) && !exclusionSet.has(addDays(holiday.date, -1))) {
        opportunities.push({
          type: 'tuesday_bridge',
          holiday: holiday,
          leaveDays: 1,
          totalDays: 4,
          dates: getDateRange(addDays(holiday.date, -3), holiday.date)
        });
      }

      // Pazartesi tatil - Salı-Cuma alarak 9 gün
      if (holidayDay === 1) {
        const tuesday = addDays(holiday.date, 1);
        const friday = addDays(holiday.date, 4);
        if (!holidaySet.has(tuesday) && !exclusionSet.has(tuesday)) {
          opportunities.push({
            type: 'monday_extended',
            holiday: holiday,
            leaveDays: 4,
            totalDays: 9,
            dates: getDateRange(addDays(holiday.date, -2), addDays(holiday.date, 6))
          });
        }
      }

      // Cuma tatil - Pazartesi-Perşembe alarak 9 gün
      if (holidayDay === 5) {
        const monday = addDays(holiday.date, -4);
        if (!holidaySet.has(monday) && !exclusionSet.has(monday)) {
          opportunities.push({
            type: 'friday_extended',
            holiday: holiday,
            leaveDays: 4,
            totalDays: 9,
            dates: getDateRange(addDays(holiday.date, -4), addDays(holiday.date, 2))
          });
        }
      }

      // Ardışık tatiller arası köprü - Haftasonu dahil optimal hesaplama
      if (idx < currentHolidays.length - 1) {
        const nextHoliday = currentHolidays[idx + 1];
        const daysDiff = Math.floor((new Date(nextHoliday.date) - new Date(holiday.date)) / (1000 * 60 * 60 * 24));
        
        if (daysDiff >= 2 && daysDiff <= 10) {
          const allDates = getDateRange(holiday.date, nextHoliday.date);
          const workDaysNeeded = allDates.filter(d => !isWeekend(d) && !holidaySet.has(d) && !exclusionSet.has(d)).length;
          
          if (workDaysNeeded > 0 && workDaysNeeded <= 5) {
            // Haftasonu öncesi ve sonrası günleri de dahil et
            const firstDate = addDays(holiday.date, getDayOfWeek(holiday.date) === 5 ? 0 : -1);
            const lastDate = addDays(nextHoliday.date, getDayOfWeek(nextHoliday.date) === 1 ? 0 : 1);
            const extendedDates = getDateRange(firstDate, lastDate);
            const extendedWorkDays = extendedDates.filter(d => !isWeekend(d) && !holidaySet.has(d) && !exclusionSet.has(d)).length;
            
            opportunities.push({
              type: 'consecutive',
              holiday: holiday,
              nextHoliday: nextHoliday,
              leaveDays: extendedWorkDays,
              totalDays: extendedDates.length,
              dates: extendedDates
            });
          }
        }
      }
    });

    return opportunities.sort((a, b) => (b.totalDays / b.leaveDays) - (a.totalDays / a.leaveDays));
  };

  const opportunities = useMemo(() => {
    if (!calculated) return [];
    return calculateBridgeOpportunities();
  }, [currentHolidays, calculated, excludedDates]);

  const allPlans = useMemo(() => {
    if (opportunities.length === 0) return [];
    
    const plans = [];
    
    // Her olası kombinasyon için plan oluştur
    const generatePlans = (currentPlan, remainingOpps, usedDates, totalLeave) => {
      if (totalLeave >= 1 && totalLeave <= annualLeave) {
        const totalDays = currentPlan.reduce((sum, opp) => sum + opp.totalDays, 0);
        const planLeave = currentPlan.reduce((sum, opp) => sum + opp.leaveDays, 0);
        plans.push({
          selected: [...currentPlan],
          totalLeaveDays: planLeave,
          totalHolidayDays: totalDays,
          remainingLeave: annualLeave - planLeave,
          efficiency: planLeave > 0 ? totalDays / planLeave : 0
        });
      }
      
      if (totalLeave >= annualLeave) return;
      
      for (let i = 0; i < remainingOpps.length; i++) {
        const opp = remainingOpps[i];
        const hasConflict = opp.dates.some(date => usedDates.has(date));
        
        if (!hasConflict && totalLeave + opp.leaveDays <= annualLeave) {
          const newUsedDates = new Set([...usedDates, ...opp.dates]);
          generatePlans(
            [...currentPlan, opp],
            remainingOpps.slice(i + 1),
            newUsedDates,
            totalLeave + opp.leaveDays
          );
        }
      }
    };
    
    generatePlans([], opportunities, new Set(), 0);
    
    // Verimlilik ve toplam tatil gününe göre sırala
    return plans
      .sort((a, b) => {
        if (Math.abs(a.efficiency - b.efficiency) < 0.1) {
          return b.totalHolidayDays - a.totalHolidayDays;
        }
        return b.efficiency - a.efficiency;
      })
      .slice(0, 10); // İlk 10 plan
  }, [opportunities, annualLeave]);

  const selectedPlan = useMemo(() => {
    if (allPlans.length === 0) return null;
    return selectedPlanIndex !== null ? allPlans[selectedPlanIndex] : allPlans[0];
  }, [allPlans, selectedPlanIndex]);

  const startEditMode = () => {
    setEditedHolidays(JSON.parse(JSON.stringify(currentHolidays)));
    setEditMode(true);
  };

  const saveEditedHolidays = () => {
    const newData = JSON.parse(JSON.stringify(holidayData));
    newData[country][year] = editedHolidays.sort((a, b) => new Date(a.date) - new Date(b.date));
    setHolidayData(newData);
    setEditMode(false);
    setCalculated(false);
  };

  const updateHolidayField = (idx, field, value) => {
    const updated = [...editedHolidays];
    if (field === 'name') {
      updated[idx].name[language] = value;
    } else {
      updated[idx][field] = value;
    }
    setEditedHolidays(updated);
  };

  const addHoliday = () => {
    setEditedHolidays([...editedHolidays, {
      date: `${year}-01-01`,
      name: { tr: 'Yeni Tatil', en: 'New Holiday' },
      type: 'official'
    }]);
  };

  const removeHoliday = (idx) => {
    setEditedHolidays(editedHolidays.filter((_, i) => i !== idx));
  };

  const startExclusionMode = () => {
    setEditedExclusions(JSON.parse(JSON.stringify(excludedDates)));
    setExclusionMode(true);
  };

  const saveEditedExclusions = () => {
    setExcludedDates(editedExclusions.sort((a, b) => new Date(a.date) - new Date(b.date)));
    setExclusionMode(false);
    setCalculated(false);
  };

  const updateExclusionField = (idx, field, value) => {
    const updated = [...editedExclusions];
    updated[idx][field] = value;
    setEditedExclusions(updated);
  };

  const addExclusion = () => {
    setEditedExclusions([...editedExclusions, {
      date: `${year}-01-01`,
      reason: language === 'tr' ? 'Yeni Hariç Tutma' : 'New Exclusion'
    }]);
  };

  const removeExclusion = (idx) => {
    setEditedExclusions(editedExclusions.filter((_, i) => i !== idx));
  };

  const selectPlan = (index) => {
    setSelectedPlanIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">{t.title}</h1>
          </div>

          {editMode ? (
            <>
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">{t.editHolidays}</h2>
                <button 
                  onClick={addHoliday}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  {t.addHoliday}
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto mb-4 space-y-3">
                {editedHolidays.map((holiday, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">{t.date}</label>
                        <input 
                          type="date"
                          value={holiday.date}
                          onChange={(e) => updateHolidayField(idx, 'date', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-600 mb-1">{t.holidayName}</label>
                        <input 
                          type="text"
                          value={holiday.name[language]}
                          onChange={(e) => updateHolidayField(idx, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="block text-xs font-medium text-gray-600 mb-1">{t.type}</label>
                          <select 
                            value={holiday.type}
                            onChange={(e) => updateHolidayField(idx, 'type', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="official">{t.official}</option>
                            <option value="religious">{t.religious}</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={() => removeHoliday(idx)}
                            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition flex items-center justify-center"
                            title={t.actions}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={saveEditedHolidays}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {t.saveChanges}
                </button>
                <button 
                  onClick={() => setEditMode(false)}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <X className="w-5 h-5" />
                  {t.cancel}
                </button>
              </div>
            </>
          ) : exclusionMode ? (
            // Exclusion mode
            <>
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">{t.manageExclusions}</h2>
                <button 
                  onClick={addExclusion}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  {t.addExclusion}
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto mb-4 space-y-3">
                {editedExclusions.map((exclusion, idx) => (
                  <div key={idx} className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">{t.date}</label>
                        <input 
                          type="date"
                          value={exclusion.date}
                          onChange={(e) => updateExclusionField(idx, 'date', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">{t.exclusionReason}</label>
                        <input 
                          type="text"
                          value={exclusion.reason}
                          onChange={(e) => updateExclusionField(idx, 'reason', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                          placeholder={t.exclusionReason}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <button 
                        onClick={() => removeExclusion(idx)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={saveEditedExclusions}
                  className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {t.saveChanges}
                </button>
                <button 
                  onClick={() => setExclusionMode(false)}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <X className="w-5 h-5" />
                  {t.cancel}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.country}</label>
                  <select 
                    value={country} 
                    onChange={(e) => { setCountry(e.target.value); setCalculated(false); setSelectedPlanIndex(null); }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="TR">{language === 'tr' ? '🇹🇷 Türkiye' : '🇹🇷 Turkey'}</option>
                    <option value="US">{language === 'tr' ? '🇺🇸 Amerika Birleşik Devletleri' : '🇺🇸 United States'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.language}</label>
                  <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.year}</label>
                  <select 
                    value={year} 
                    onChange={(e) => { setYear(Number(e.target.value)); setCalculated(false); setSelectedPlanIndex(null); }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.annualLeave}</label>
                  <input 
                    type="number" 
                    value={annualLeave} 
                    onChange={(e) => { setAnnualLeave(Number(e.target.value)); setCalculated(false); setSelectedPlanIndex(null); }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    min="1"
                    max="30"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => { setCalculated(true); setSelectedPlanIndex(null); }}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  {t.calculate}
                </button>
                <button 
                  onClick={startEditMode}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <Edit2 className="w-5 h-5" />
                  {t.editHolidays}
                </button>
                <button 
                  onClick={startExclusionMode}
                  className="bg-red-100 text-red-700 px-6 py-3 rounded-lg font-medium hover:bg-red-200 transition flex items-center gap-2"
                >
                  <X className="w-5 h-5" />
                  {t.manageExclusions}
                </button>
              </div>
            </>
          )}
        </div>

        {calculated && selectedPlan && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Check className="w-6 h-6 text-green-600" />
              {t.optimalPlan}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                <div className="text-sm text-blue-600 font-medium mb-1">{t.totalLeaveUsed}</div>
                <div className="text-3xl font-bold text-blue-700">{selectedPlan.totalLeaveDays}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                <div className="text-sm text-green-600 font-medium mb-1">{t.totalHolidayDays}</div>
                <div className="text-3xl font-bold text-green-700">{selectedPlan.totalHolidayDays}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                <div className="text-sm text-purple-600 font-medium mb-1">{t.remainingLeave}</div>
                <div className="text-3xl font-bold text-purple-700">{selectedPlan.remainingLeave}</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
                <div className="text-sm text-orange-600 font-medium mb-1">{t.efficiency}</div>
                <div className="text-3xl font-bold text-orange-700">
                  {selectedPlan.efficiency.toFixed(1)}x
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {selectedPlan.selected.map((opp, idx) => (
                <div key={idx} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border-l-4 border-indigo-500">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-semibold text-gray-800">
                      {opp.holiday.name[language]}
                      {opp.nextHoliday && ` → ${opp.nextHoliday.name[language]}`}
                    </div>
                    <div className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-full">
                      {opp.leaveDays} {t.useLeave} → {opp.totalDays} {t.getTotalDays}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {new Date(opp.dates[0]).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', { month: 'short', day: 'numeric' })} - {new Date(opp.dates[opp.dates.length - 1]).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {calculated && allPlans.length > 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.alternativePlans}</h2>
            <div className="space-y-3">
              {allPlans.map((plan, planIdx) => (
                <div 
                  key={planIdx} 
                  onClick={() => selectPlan(planIdx)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    planIdx === (selectedPlanIndex !== null ? selectedPlanIndex : 0)
                      ? 'border-indigo-500 bg-indigo-50' 
                      : 'border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-gray-600">
                        {t.totalLeaveUsed}: <span className="text-lg font-bold text-blue-700">{plan.totalLeaveDays}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        {t.totalHolidayDays}: <span className="text-lg font-bold text-green-700">{plan.totalHolidayDays}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        {t.efficiency}: <span className="text-lg font-bold text-orange-700">{plan.efficiency.toFixed(1)}x</span>
                      </div>
                    </div>
                    {planIdx === (selectedPlanIndex !== null ? selectedPlanIndex : 0) && (
                      <div className="flex items-center gap-2 text-indigo-600 font-medium">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {plan.selected.map((opp, idx) => (
                      <div key={idx} className="text-xs bg-white px-3 py-1 rounded-full border border-gray-300">
                        {opp.holiday.name[language]}{opp.nextHoliday ? ` → ${opp.nextHoliday.name[language]}` : ''} ({opp.leaveDays}→{opp.totalDays})
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Analytics />
    </div>
  );
};

export default App;
