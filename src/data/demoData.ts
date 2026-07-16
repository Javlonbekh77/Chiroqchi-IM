/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Teacher,
  Achievement,
  News,
  Event,
  SchoolClass,
  Vacancy,
  GalleryItem,
  FAQItem,
  Club,
  SchoolDocument,
  SiteSettings
} from '../types';

export const INITIAL_TEACHERS: Teacher[] = [
  {
    id: 't1',
    fullName: 'Dilnoza Karimova',
    slug: 'dilnoza-karimova',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    subject: 'Ingliz tili',
    position: 'Xorijiy tillar kafedrasi mudiri',
    experienceYears: 12,
    degree: 'Magistr',
    category: 'Oliy toifali o\'qituvchi',
    education: 'O\'zbekiston Davlat Jahon Tillari Universiteti (Ingliz filologiyasi)',
    certificates: ['IELTS 8.5', 'CELTA', 'TKT (Module 1, 2, 3)'],
    achievements: [
      'Xalq ta\'limi a\'lochisi ko\'krak nishoni sohibasi (2023)',
      'Yilning eng yaxshi o\'qituvchisi tanlovi tumani g\'olibi (2022)'
    ],
    studentResults: '35 nafardan ortiq o\'quvchisi IELTS 7.0+ va CEFR B2/C1 darajalarini qo\'lga kiritgan. 4 nafar o\'quvchisi xalqaro grant g\'olibi.',
    biography: 'Dilnoza Karimova 12 yildan buyon ingliz tili o\'qituvchisi bo\'lib ishlaydi. U o\'quvchilarni IELTS va xalqaro tillar imtihonlariga tayyorlashda katta tajribaga ega. Uning darslari interaktiv metodlar va muloqotga asoslangan holda tashkil etiladi.',
    languages: ['O\'zbek', 'Ingliz', 'Rus'],
    featured: true,
    order: 1,
    status: 'active',
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  },
  {
    id: 't2',
    fullName: 'Sardor Alimov',
    slug: 'sardor-alimov',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80',
    subject: 'Matematika',
    position: 'Aniq fanlar kafedrasi yetakchi mutaxassisi',
    experienceYears: 15,
    degree: 'Oliy ma\'lumot',
    category: 'Oliy toifali o\'qituvchi',
    education: 'O\'zbekiston Milliy Universiteti (Matematika fakulteti)',
    certificates: ['Milliy sertifikat (Matematika) - A+ daraja', 'Pedagogik mahorat sertifikati'],
    achievements: [
      'Respublika matematika olimpiadasi hakamlar hay\'ati a\'zosi',
      'Xalqaro matematika olimpiadalari (IMO) tayyorlov koordinatori'
    ],
    studentResults: 'O\'quvchilari fan olimpiadalarining tuman va viloyat bosqichlarida muntazam ravishda 1-o\'rinlarni egallab kelishmoqda. 12 nafar o\'quvchisi nufuzli texnik oliygohlarga muddatidan oldin grant asosida qabul qilingan.',
    biography: 'Sardor Alimov Chiroqchi tumanidagi eng yetakchi matematik o\'qituvchilardan biridir. U murakkab masalalarni sodda va qulay usullarda tushuntirish metodikasi bilan tanilgan. Maktab o\'quvchilarini matematika olimpiadalariga tayyorlab keladi.',
    languages: ['O\'zbek', 'Rus'],
    featured: true,
    order: 2,
    status: 'active',
    createdAt: '2026-01-12T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  },
  {
    id: 't3',
    fullName: 'Shaxnoza To\'rayeva',
    slug: 'shaxnoza-torayeva',
    photo: 'https://images.unsplash.com/photo-1580894732444-8fecef2271ff?w=500&auto=format&fit=crop&q=80',
    subject: 'Kimyo',
    position: 'Tabiiy fanlar o\'qituvchisi',
    experienceYears: 8,
    degree: 'Magistr',
    category: 'Birinchi toifali o\'qituvchi',
    education: 'Qarshi Davlat Universiteti (Kimyo yo\'nalishi)',
    certificates: ['Pedagogik innovatsiya sertifikati', 'Kimyo laboratoriya xavfsizligi bo\'yicha xalqaro sertifikat'],
    achievements: [
      '\"Yilning eng yaxshi innovatsion loyihasi\" tanlovi g\'olibi (2024)',
      'Kimyodan metodik qo\'llanmalar muallifi'
    ],
    studentResults: 'O\'quvchilari kimyo fanidan amaliy va nazariy olimpiadalarda viloyat miqyosida sovrindorlar qatorida. Kimyo va biologiya yo\'nalishidagi tibbiyot universitetlariga kirish ko\'rsatkichi 95%.',
    biography: 'Shaxnoza To\'rayeva maktab laboratoriyasida amaliy mashg\'ulotlarni o\'tkazish va fanni hayotiy tajribalar orqali o\'rgatishda juda faol. O\'quvchilarda kimyo va biologiya fanlariga bo\'lgan qiziqishni laboratoriya tajribalari yordamida oshiradi.',
    languages: ['O\'zbek', 'Rus'],
    featured: true,
    order: 3,
    status: 'active',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  },
  {
    id: 't4',
    fullName: 'Jasur Bekmirodov',
    slug: 'jasur-bekmirodov',
    photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=80',
    subject: 'Informatika va IT',
    position: 'IT va Dasturlash to\'garagi rahbari',
    experienceYears: 6,
    degree: 'Oliy ma\'lumot',
    category: 'Ikkinchi toifali o\'qituvchi',
    education: 'Toshkent Axborot Texnologiyalari Universiteti (Dasturiy injiniring)',
    certificates: ['Oracle Certified Professional', 'Full-Stack Web Developer Certificate (EPAM)', 'Python trainer'],
    achievements: [
      '\"Bir million dasturchi\" loyihasi doirasida eng faol mentor (2022)',
      'Tuman maktablari o\'rtasida elektron baholash tizimi ishlab chiquvchisi'
    ],
    studentResults: '10 dan ortiq o\'quvchisi maktab davridayoq xalqaro IT kompaniyalarda va mahalliy startaplarda frilanser sifatida ish boshlagan. Respublika robototexnika tanlovida o\'quvchilari 2-o\'rinni olgan.',
    biography: 'Jasur Bekmirodov zamonaviy axborot texnologiyalari va dasturlashni yosh avlodga o\'rgatishga bag\'ishlagan. Maktabda Python, Web dasturlash (HTML/CSS/JS) hamda robototexnika darslarini olib boradi.',
    languages: ['O\'zbek', 'Rus', 'Ingliz'],
    featured: true,
    order: 4,
    status: 'active',
    createdAt: '2026-01-18T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  },
  {
    id: 't5',
    fullName: 'Lola Umarova',
    slug: 'lola-umarova',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80',
    subject: 'Ona tili va adabiyot',
    position: 'Ona tili va adabiyot kafedrasi mudiri',
    experienceYears: 18,
    degree: 'Oliy ma\'lumot',
    category: 'Oliy toifali o\'qituvchi',
    education: 'Qarshi Davlat Universiteti (O\'zbek tili va adabiyoti)',
    certificates: ['Ona tili fanidan milliy sertifikat (C1)', 'Notiqlik san\'ati va ijodiy matn yozish mentori'],
    achievements: [
      'Xalq ta\'limi a\'lochisi (2020)',
      'Ko\'plab badiiy tanlovlar va insholar ko\'rik-tanlovining viloyat hakamlari hay\'ati a\'zosi'
    ],
    studentResults: 'O\'quvchilari Respublika insholar tanlovida, \"Yosh kitobxon\" tanlovining tuman va viloyat bosqichlarida yuqori o\'rinlarni egallagan. Filologiya yo\'nalishida 100% oliygohga kirish natijasi.',
    biography: 'Lola Umarova o\'quvchilar ko\'nglida o\'zbek tili, milliy qadriyatlar va badiiy adabiyotga muhabbat uyg\'otish ustida ishlaydi. Maktab qoshidagi ijodiy yoshlar va notiqlik klubiga rahbarlik qiladi.',
    languages: ['O\'zbek'],
    featured: false,
    order: 5,
    status: 'active',
    createdAt: '2026-02-01T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  },
  {
    id: 't6',
    fullName: 'Elyor Toshpo\'latov',
    slug: 'elyor-toshpolatov',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    subject: 'Fizika',
    position: 'Katta o\'qituvchi',
    experienceYears: 10,
    degree: 'Magistr',
    category: 'Birinchi toifali o\'qituvchi',
    education: 'Samarqand Davlat Universiteti (Fizika fakulteti)',
    certificates: ['Astronomiya va fizika integratsiyalashgan kursi sertifikati', 'STEAM dars o\'tish metodikasi bo\'yicha malaka oshirish sertifikati'],
    achievements: [
      '\"Yil o\'qituvchisi\" tuman bosqichi sovrindori (2023)',
      'Olimpiada masalalari to\'plami hammuallifi'
    ],
    studentResults: 'Fizika fanidan milliy olimpiadada 2 nafar o\'quvchisi viloyatda 2- va 3-o\'rinlarni band etgan. Muhandislik va fizika sohasidagi xorijiy oliygohlarga 5 nafar o\'quvchisi grant yutgan.',
    biography: 'Elyor Toshpo\'latov nazariy fizikani amaliy misollar bilan bog\'lagan holda tushuntirish bo\'yicha mahorat egasidir. Kosmonavtika, astronomiya va fizika qonuniyatlarini o\'quvchilarga interaktiv modellar yordamida ko\'rsatadi.',
    languages: ['O\'zbek', 'Rus'],
    featured: false,
    order: 6,
    status: 'active',
    createdAt: '2026-02-05T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  },
  {
    id: 't7',
    fullName: 'Gulnoza Ergasheva',
    slug: 'gulnoza-ergasheva',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80',
    subject: 'Boshlang\'ich ta\'lim',
    position: 'Boshlang\'ich sinf o\'qituvchisi (Metodist)',
    experienceYears: 20,
    degree: 'Oliy ma\'lumot',
    category: 'Oliy toifali o\'qituvchi',
    education: 'Toshkent Davlat Pedagogika Universiteti (Boshlang\'ich ta\'lim metodikasi)',
    certificates: ['Mental arifmetika trenerlik sertifikati', 'Zamonaviy pedagogik texnologiyalar sertifikati'],
    achievements: [
      'Xalq ta\'limi a\'lochisi unvoni (2018)',
      'Boshlang\'ich sinflar uchun o\'yinli interaktiv metodlar qo\'llanmasi yaratuvchisi'
    ],
    studentResults: 'O\'quvchilari boshlang\'ich sinflar o\'rtasidagi mantiqiy va intellektual musobaqalarda doimiy birinchilardan. Barcha o\'quvchilari 1-sinf oxirigacha yuqori darajada tez o\'qish va mantiqiy hisoblash ko\'nikmalariga ega bo\'lishadi.',
    biography: 'Gulnoza Ergasheva 20 yillik boy pedagogik tajribaga ega o\'qituvchi. U bolalarni maktab hayotiga moslashtirish, mantiqiy fikrlashni shakllantirish va o\'rganishga bo\'lgan qiziqishlarini birinchi kundan boshlab oshirish san\'atiga ega.',
    languages: ['O\'zbek'],
    featured: false,
    order: 7,
    status: 'active',
    createdAt: '2026-02-10T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  },
  {
    id: 't8',
    fullName: 'Alisher Ro\'ziyev',
    slug: 'alisher-roziyev',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80',
    subject: 'Tarix',
    position: 'Ijtimoiy fanlar o\'qituvchisi',
    experienceYears: 11,
    degree: 'Magistr',
    category: 'Birinchi toifali o\'qituvchi',
    education: 'Samarqand Davlat Universiteti (Tarix fakulteti)',
    certificates: ['Arxeologiya va tarixiy tadqiqotlar sertifikati', 'Kreativ dars o\'tish va tahliliy muloqot seminari sertifikati'],
    achievements: [
      'Maktablar o\'rtasida tarixiy viktorinalar tashkilotchisi',
      'Maktab muzeyining asoschisi va koordinatori'
    ],
    studentResults: 'Tarix fanidan intellektual o\'yinlar Respublika g\'oliblari ustozi. O\'quvchilari huquq va xalqaro munosabatlar yo\'nalishidagi oliygohlarga muvaffaqiyatli grantlar asosida o\'qishga kirishgan.',
    biography: 'Alisher Ro\'ziyev tarix darslarini quruq yodlashdan xoli holda, tahliliy bahslar, tarixiy rolli o\'yinlar va virtual turlar orqali qiziqarli qilib o\'tadi. U maktab yoshlarini vatanparvarlik ruhida tarbiyalashga intiladi.',
    languages: ['O\'zbek', 'Rus'],
    featured: false,
    order: 8,
    status: 'active',
    createdAt: '2026-02-15T10:00:00Z',
    updatedAt: '2026-07-15T10:00:00Z'
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    studentName: 'Zafar Ergashev',
    studentPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    className: '11-A',
    category: 'international_cert',
    title: 'IELTS Imtihoni Natijasi',
    result: 'IELTS 8.0',
    level: 'international',
    subject: 'Ingliz tili',
    teacherId: 't1',
    date: '2026-05-12',
    description: '11-A sinf o\'quvchisi Zafar Ergashev maktabdagi ingliz tili darslari hamda chuqurlashtirilgan IELTS tayyorlov kurslarining natijasi o\'laroq birinchi urinishdayoq yuqori IELTS 8.0 ballini qo\'lga kiritdi.',
    featured: true,
    status: 'active',
    createdAt: '2026-05-13T10:00:00Z',
    updatedAt: '2026-05-13T10:00:00Z'
  },
  {
    id: 'a2',
    studentName: 'Madina Boboqulova',
    studentPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    className: '10-A',
    category: 'olympiad',
    title: 'Respublika Matematika Olimpiadasi',
    result: '1-o\'rin (Oltin medal)',
    level: 'national',
    subject: 'Matematika',
    teacherId: 't2',
    date: '2026-04-20',
    description: 'Madina Boboqulova Toshkent shahrida bo\'lib o\'tgan matematika fanidan Respublika fan olimpiadasida Qashqadaryo viloyati sharafini himoya qilib, 1-o\'rinni va oltin medalni qo\'lga kiritdi hamda to\'g\'ridan-to\'g\'ri davlat granti sohibi bo\'ldi.',
    featured: true,
    status: 'active',
    createdAt: '2026-04-21T10:00:00Z',
    updatedAt: '2026-04-21T10:00:00Z'
  },
  {
    id: 'a3',
    studentName: 'Javohir Toshpo\'latov',
    studentPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    className: '11-A',
    category: 'university_grant',
    title: 'Nanyang Texnologik Universiteti Granti',
    result: 'To\'liq Grant ($52,000)',
    level: 'international',
    subject: 'IT / Computer Science',
    teacherId: 't4',
    date: '2026-06-05',
    description: 'Javohir Toshpo\'latov Singapurning dunyoga mashhur Nanyang Texnologik Universitetining Computer Science yo\'nalishiga 100% to\'liq grant va oylik stipendiya yutib, tumanimiz tarixida eng katta xalqaro grantlardan birini qo\'lga kiritdi.',
    featured: true,
    status: 'active',
    createdAt: '2026-06-06T10:00:00Z',
    updatedAt: '2026-06-06T10:00:00Z'
  },
  {
    id: 'a4',
    studentName: 'Shaxzoda Rustamova',
    studentPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    className: '9-B',
    category: 'national_cert',
    title: 'Kimyo Fanidan Milliy Sertifikat',
    result: 'A daraja (96 ball)',
    level: 'national',
    subject: 'Kimyo',
    teacherId: 't3',
    date: '2026-03-15',
    description: '9-sinf o\'quvchisi Shaxzoda Rustamova DTM tomonidan o\'tkazilgan kimyo fanidan milliy sertifikat imtihonida rekord darajada yuqori - 96 ball bilan \"A\" toifasidagi sertifikatni qo\'lga kiritdi va kirish imtihonlarida maksimal ball imtiyoziga ega bo\'ldi.',
    featured: true,
    status: 'active',
    createdAt: '2026-03-16T10:00:00Z',
    updatedAt: '2026-03-16T10:00:00Z'
  },
  {
    id: 'a5',
    studentName: 'Sanjar Islomov',
    studentPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    className: '8-A',
    category: 'sport',
    title: 'Dzyudo Bo\'yicha Yoshlar O\'rtasida Osiyo Chempionati',
    result: '2-o\'rin (Kumush medal)',
    level: 'international',
    date: '2026-05-30',
    description: 'Maktabimizning 8-sinf o\'quvchisi va maktab dzyudo to\'garagi a\'zosi Sanjar Islomov dzyudo bo\'yicha yoshlar o\'rtasidagi xalqaro Osiyo turnirida nufuzli 2-o\'rin va kumush medalni qo\'lga kiritib, yurtimiz va maktab bayrog\'ini ko\'klarga ko\'tardi.',
    featured: false,
    status: 'active',
    createdAt: '2026-06-01T10:00:00Z',
    updatedAt: '2026-06-01T10:00:00Z'
  },
  {
    id: 'a6',
    studentName: 'Nodira To\'rayeva',
    studentPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
    className: '11-B',
    category: 'international_cert',
    title: 'SAT Xalqaro Imtihon Natijasi',
    result: '1480 ball (Top 2%)',
    level: 'international',
    subject: 'Matematika & Ingliz tili',
    teacherId: 't2',
    date: '2026-02-18',
    description: '11-sinf o\'quvchimiz Nodira To\'rayeva AQSh va xalqaro universitetlarga kirish imtihoni hisoblangan SAT imtihonidan ajoyib 1480 ball (matematika qismi 790 ball) to\'plab, xalqaro miqyosda top 2% talabalar qatoridan joy oldi.',
    featured: false,
    status: 'active',
    createdAt: '2026-02-20T10:00:00Z',
    updatedAt: '2026-02-20T10:00:00Z'
  },
  {
    id: 'a7',
    studentName: 'Otabek Xoliqov',
    studentPhoto: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80',
    className: '11-A',
    category: 'university_grant',
    title: 'Toshkent shahridagi Amity Universiteti Granti',
    result: '100% Davlat Granti',
    level: 'national',
    subject: 'Dasturlash',
    teacherId: 't4',
    date: '2026-06-28',
    description: 'Otabek Xoliqov kirish imtihonlarida nufuzli Amity Universitetiga to\'liq 100% grant asosida o\'qishga qabul qilindi va tuman hokimi tomonidan alohida rag\'batlantirildi.',
    featured: false,
    status: 'active',
    createdAt: '2026-06-30T10:00:00Z',
    updatedAt: '2026-06-30T10:00:00Z'
  },
  {
    id: 'a8',
    studentName: 'Dildora Safarova',
    studentPhoto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    className: '9-A',
    category: 'art',
    title: '\"O\'zbekiston - mening vatanim\" tasviriy san\'at tanlovi',
    result: '1-o\'rin (Oltin)',
    level: 'national',
    date: '2026-05-15',
    description: 'Maktabimiz ijodkor yoshlar to\'garagi a\'zosi Dildora Safarova ijodiy rasmlar respublika ko\'rik-tanlovida o\'zining betakror miniatyura ishi bilan g\'oliblikni qo\'lga kiritib, diplom va pul mukofoti bilan taqdirlandi.',
    featured: false,
    status: 'active',
    createdAt: '2026-05-17T10:00:00Z',
    updatedAt: '2026-05-17T10:00:00Z'
  },
  {
    id: 'a9',
    studentName: 'Asilbek Jo\'rayev',
    studentPhoto: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&auto=format&fit=crop&q=80',
    className: '10-B',
    category: 'olympiad',
    title: 'Xalqaro Al-Xorazmiy Fizika Olimpiadasi',
    result: 'Bronza medal',
    level: 'international',
    subject: 'Fizika',
    teacherId: 't6',
    date: '2026-06-12',
    description: 'Asilbek Jo\'rayev Markaziy Osiyo davlatlari o\'rtasidagi Al-Xorazmiy fizika olimpiadasida tuman maktablari tarixida birinchi marta xalqaro bronza medalini qo\'lga kiritdi.',
    featured: false,
    status: 'active',
    createdAt: '2026-06-13T10:00:00Z',
    updatedAt: '2026-06-13T10:00:00Z'
  },
  {
    id: 'a10',
    studentName: 'Malika Elmurodova',
    studentPhoto: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80',
    className: '11-B',
    category: 'international_cert',
    title: 'CEFR C1 Ingliz Tili Sertifikati',
    result: 'C1 Daraja (Maksimal ball)',
    level: 'national',
    subject: 'Ingliz tili',
    teacherId: 't1',
    date: '2026-04-10',
    description: 'Malika Elmurodova Davlat Test Markazi tomonidan tashkil etilgan xorijiy tillarni bilish darajasini aniqlash imtihonida professional C1 darajani qayd etdi va test sinovlaridan to\'liq ozod bo\'ldi.',
    featured: false,
    status: 'active',
    createdAt: '2026-04-12T10:00:00Z',
    updatedAt: '2026-04-12T10:00:00Z'
  },
  {
    id: 'a11',
    studentName: 'Bobur Kamolov',
    studentPhoto: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80',
    className: '7-A',
    category: 'sport',
    title: 'Shaxmat Bo\'yicha Viloyat Birinchiligi',
    result: '1-o\'rin',
    level: 'regional',
    date: '2026-03-22',
    description: 'Chiroqchi tumanining eng yosh shaxmat ustalari biri bo\'lgan Bobur Kamolov maktab shaxmat klubi ustozi ko\'magida viloyat birinchiligida barcha raqiblarini mot qilib, chempionlik unvonini qo\'lga kiritdi.',
    featured: false,
    status: 'active',
    createdAt: '2026-03-24T10:00:00Z',
    updatedAt: '2026-03-24T10:00:00Z'
  },
  {
    id: 'a12',
    studentName: 'Sitora Aliyeva',
    studentPhoto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=80',
    className: '11-A',
    category: 'university_grant',
    title: 'Webster Universiteti (AQSh) Toshkent Filiali',
    result: 'Hokimlik Granti (100%)',
    level: 'national',
    date: '2026-07-02',
    description: 'Sitora Aliyeva ingliz tilidagi iqtisodiyot yo\'nalishida o\'qish uchun nufuzli Webster universitetiga qabul qilinib, tuman hokimining alohida ta\'lim granti bilan to\'lov-shartnomasi 100% qoplandi.',
    featured: true,
    status: 'active',
    createdAt: '2026-07-03T10:00:00Z',
    updatedAt: '2026-07-03T10:00:00Z'
  }
];

export const INITIAL_NEWS: News[] = [
  {
    id: 'n1',
    title: '2026–2027 O\'quv Yili Uchun Qabul Jarayonlari Boshlandi',
    slug: 'qabul-jarayonlari-boshlandi-2026',
    excerpt: 'Chiroqchi Tuman Ixtisoslashtirilgan Maktabi 2026-2027 o\'quv yili uchun o\'quvchilarni onlayn va oflayn qabul qilishni rasman boshladi.',
    content: '<p>Chiroqchi Tuman Ixtisoslashtirilgan Maktabida yangi 2026-2027 o\'quv yili uchun qabul eshiklari ochildi! Biz yosh, bilimga chanqoq va iqtidorli o\'quvchilarni zamonaviy darsliklar va yuqori darajadagi sharoitlarda ta\'lim olishga taklif qilamiz.</p><h3>Qabul qilinadigan sinflar va bo\'sh o\'rinlar</h3><p>Hozirda boshlang\'ich 1-sinflardan tortib yuqori 10-sinfgacha bo\'sh o\'rinlar va maxsus ixtisoslashgan yo\'nalishlar bo\'yicha qabul ochiq. Onlayn ariza topshirish saytimizning <strong>Qabul bo\'limi</strong> orqali juda oson formatda yo\'lga qo\'yildi.</p><h3>Qabul bosqichlari qanday tashkil qilingan?</h3><ol><li><strong>Onlayn Ariza:</strong> Sayt orqali kerakli formani va hujjatlarni yuklab ariza yuboriladi.</li><li><strong>Suhbat:</strong> Ariza qabul qilingach, maktab mas\'ullari suhbat belgilashadi.</li><li><strong>Intellektual sinov:</strong> Matematika va til bilish darajasini aniqlovchi qisqa test olinadi.</li><li><strong>Natija:</strong> Natijalar 3 ish kunida ma\'lum qilinadi va shartnoma imzolanadi.</li></ol><p>Farzandingiz kelajagiga bugundan sarmoya qiling va Chiroqchi tumanidagi eng yetakchi ixtisoslashtirilgan maktab oilasiga qo\'shiling!</p>',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
    category: 'admission',
    tags: ['Qabul 2026', 'Imtihonlar', 'Yangi O\'quv Yili'],
    author: 'Matbuot Xizmati',
    publishDate: '2026-07-01',
    featured: true,
    status: 'published',
    views: 342,
    createdAt: '2026-07-01T08:00:00Z',
    updatedAt: '2026-07-01T08:00:00Z'
  },
  {
    id: 'n2',
    title: 'Maktabimiz O\'quvchisi Matematika Olimpiadasida Respublika Chempioni Bo\'ldi!',
    slug: 'matematika-olimpiadasi-respublika-chempioni',
    excerpt: 'Toshkent shahrida o\'tkazilgan Respublika matematika olimpiadasida 10-sinf o\'quvchimiz Madina Boboqulova faxrli 1-o\'rinni qo\'lga kiritdi.',
    content: '<p>Chiroqchi Tuman IM jamoasi va butun tuman ahliga katta xushxabar! Maktabimizning 10-sinf o\'quvchisi Madina Boboqulova Toshkent shahrida bo\'lib o\'tgan o\'quvchilar o\'rtasidagi respublika matematika fan olimpiadasida oltin medalga munosib ko\'rildi.</p><p>Madina o\'zining yuksak mantiqiy fikrlashi va murakkab geometriya hamda algebraik topshiriqlarni tezkor yechish qobiliyati bilan hakamlar hay\'atini lol qoldirdi. U tumanimiz sharafini respublika miqyosida eng yuqori pog\'onaga olib chiqdi.</p><blockquote>\"Bu mening ko\'p yillik mehnatim va maktabdagi ustozim Sardor Alimovning ishonchi hamda to\'g\'ri tayyorgarligi natijasidir.\" - deydi Madina.</blockquote><p>Madina endilikda xalqaro matematika olimpiadalarida (IMO) O\'zbekiston terma jamoasi tarkibida qatnashish imkoniyatiga ega bo\'ldi. Uni va uning ustozi Sardor Alimovni ushbu yirik tarixiy g\'alaba bilan tabriklaymiz!</p>',
    coverImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80',
    category: 'olympiads',
    tags: ['Olimpiada', 'Matematika', 'G\'alaba', 'Oltin Medal'],
    author: 'Sardor Alimov',
    publishDate: '2026-04-22',
    featured: true,
    status: 'published',
    views: 520,
    createdAt: '2026-04-22T09:00:00Z',
    updatedAt: '2026-04-22T09:00:00Z'
  },
  {
    id: 'n3',
    title: 'Yangi Zamonaviy Kimyo va Biologiya Laboratoriyalari Foydalanishga Topshirildi',
    slug: 'yangi-laboratoriyalar-topshirildi',
    excerpt: 'Maktabimiz moddiy-texnik bazasini mustahkamlash maqsadida eng so\'nggi modeldagi jihozlar bilan ta\'minlangan fan laboratoriyalari ochildi.',
    content: '<p>Ta\'lim amaliyot bilan go\'zal! Chiroqchi Tuman IM ma\'muriyati hamda homiy tashkilotlar hamkorligida maktabimizda zamonaviy Kimyo va Biologiya amaliy fanlar laboratoriya xonalari to\'liq rekonstruksiya qilinib, foydalanishga topshirildi.</p><p>Laboratoriya xonalari xalqaro xavfsizlik va o\'quv standartlariga to\'liq javob beradi. Endilikda o\'quvchilar darsda olingan nazariy bilimlarni maxsus mikroskoplar, kimyoviy reaktivlar va raqamli datchiklar yordamida amaliy tekshirib ko\'rishadi.</p><p>Kimyo fani o\'qituvchisi Shaxnoza To\'rayevaning so\'zlariga ko\'ra, bunday sharoitlar o\'quvchilarning darsni tushunish koeffitsiyentini bir necha barobar oshiradi va ularni ilmiy-tadqiqot ishlariga qiziqtiradi.</p>',
    coverImage: 'https://images.unsplash.com/photo-1562774053-401386df887f?w=800&auto=format&fit=crop&q=80',
    category: 'school',
    tags: ['Laboratoriya', 'STEAM', 'Kimyo', 'Biologiya'],
    author: 'Ma\'muriyat',
    publishDate: '2026-05-10',
    featured: false,
    status: 'published',
    views: 280,
    createdAt: '2026-05-10T11:00:00Z',
    updatedAt: '2026-05-10T11:00:00Z'
  },
  {
    id: 'n4',
    title: 'Dasturlash Va Robototexnika To\'garagida Yangi Loyihalar Namoyishi Bo\'lib O\'tdi',
    slug: 'robototexnika-loyihalari-namoyishi',
    excerpt: 'O\'quvchilarimiz tomonidan tayyorlangan aqlli uy tizimlari, robotlar va mobil ilovalar ko\'rgazmasi barchada katta taassurot qoldirdi.',
    content: '<p>Maktabimiz qoshidagi \"IT va Dasturlash\" to\'garagi o\'quvchilari yarim yillik faoliyatlari davomida yaratgan ijodiy IT loyihalarini taqdim etishdi. Ko\'rgazmada tuman hokimligi vakillari, ota-onalar va soha mutaxassislari ishtirok etishdi.</p><p>Ko\'rgazmada quyidagi qiziqarli loyihalar taqdim etildi:</p><ul><li><strong>Smart Home (Aqlli Uy):</strong> Gaz sizib chiqishi va yong\'inni avtomat aniqlab xabar beruvchi tizim.</li><li><strong>Agro-Robot:</strong> Dalada namlikni o\'lchovchi va avtomat sug\'oruvchi prototip robot.</li><li><strong>Maktab Yo\'l ko\'rsatkichi:</strong> Android uchun yangi interaktiv ilova.</li></ul><p>IT o\'qituvchisi Jasur Bekmirodov boshchiligida tahsil olayotgan yosh dasturchilarimiz kelajakda viloyatimiz ravnaqiga munosib hissa qo\'shishiga ishonamiz!</p>',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    category: 'sports', // It is technology/life
    tags: ['IT', 'Python', 'Robototexnika', 'Ko\'rgazma'],
    author: 'Jasur Bekmirodov',
    publishDate: '2026-06-15',
    featured: false,
    status: 'published',
    views: 198,
    createdAt: '2026-06-15T14:00:00Z',
    updatedAt: '2026-06-15T14:00:00Z'
  },
  {
    id: 'n5',
    title: 'Maktabimiz Bitiruvchilarining 92% Foizi Universitetlarga Qabul Qilindi',
    slug: 'bitiruvchilar-natijasi-2025-2026',
    excerpt: 'O\'tgan o\'quv yilida maktabimizni tamomlagan 45 nafar bitiruvchining 41 nafari mahalliy va xorijiy oliy ta\'lim muassasalariga grant va shartnoma asosida kirdi.',
    content: '<p>Chiroqchi Tuman IM sifatli ta\'lim berish bo\'yicha o\'zining yuqori reytingini yana bir bor isbotladi. O\'tgan bitiruvchi sinf o\'quvchilarining 92% foizi nufuzli milliy va xalqaro oliy o\'quv yurtlarining talabalariga aylanishdi.</p><p>Ulardan 15 nafari to\'liq davlat granti asosida o\'qishga kirgan bo\'lsa, 8 nafari xalqaro yetakchi oliygohlarning (Singapur, AQSh, Janubiy Koreya, Buyuk Britaniya universitetlari) grant sohiblaridir. Maktab ma\'muriyati barcha bitiruvchilarimizga talabalik muborak bo\'lishini tilaydi!</p>',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
    category: 'education',
    tags: ['Bitiruvchilar', 'Universitet', 'Grant', 'Statistika'],
    author: 'Matbuot Xizmati',
    publishDate: '2025-09-05',
    featured: false,
    status: 'published',
    views: 410,
    createdAt: '2025-09-05T09:00:00Z',
    updatedAt: '2025-09-05T09:00:00Z'
  },
  {
    id: 'n6',
    title: '\"Zulfiyaxonim qizlari\" Tanlovining Tuman Bosqichida O\'quvchimiz G\'olib',
    slug: 'zulfiyaxonim-qizlari-tuman-bosqichi',
    excerpt: '9-sinf iqtidorli o\'quvchisi Shahlo To\'rayeva ijod va adabiyot yo\'nalishida tuman bosqichida mutloq 1-o\'rinni qo\'lga kiritib viloyatga yo\'llanma oldi.',
    content: '<p>Adabiyot va san\'at yo\'nalishida qobiliyatli qizlarni qo\'llab-quvvatlovchi nufuzli tanlovda maktabimiz faxri, 9-sinf o\'quvchisi Shahlo To\'rayeva g\'olib bo\'ldi. U o\'zining she\'riy to\'plamlari va notiqlik mahorati bilan hakamlar mehrini qozondi.</p><p>Lola Umarova rahbarligidagi adabiyot klubi yoshlarining bunday natijalari bizga cheksiz faxr bag\'ishlaydi. Shahloni keyingi viloyat bosqichida ham g\'olib bo\'lishini tilab qolamiz.</p>',
    coverImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80',
    category: 'student_life',
    tags: ['Tanlov', 'Badiiy ijod', 'Zulfiyaxonim'],
    author: 'Lola Umarova',
    publishDate: '2026-03-10',
    featured: false,
    status: 'published',
    views: 124,
    createdAt: '2026-03-10T08:00:00Z',
    updatedAt: '2026-03-10T08:00:00Z'
  },
  {
    id: 'n7',
    title: 'E\'lon: Ota-onalar Uchun Intellektual Ochiq Eshiklar Kuni O\'tkaziladi',
    slug: 'ochiq-eshiklar-kuni-2026',
    excerpt: 'Ota-onalarga dars jarayonlari, to\'garaklar va maktabimiz infratuzilmasi bilan to\'liq tanishish imkoniyatini taqdim etamiz.',
    content: '<p>Hurmatli ota-onalar va tumanimiz fuqarolari! Chiroqchi Tuman IM sizlarni maktabimiz faoliyati bilan yaqindan tanishish uchun \"Ochiq eshiklar kuni\"ga taklif etadi.</p><p><strong>Sana va vaqt:</strong> 25-iyul 2026-yil, soat 09:00 dan 15:00 gacha.</p><p>Tadbir davomida sizlarni:</p><ul><li>Maktab ma\'muriyati bilan ochiq muloqot;</li><li>Zamonaviy STEAM laboratoriyalari bilan tanishish;</li><li>Farzandingiz dars qiladigan va yashaydigan sharoitlarni ko\'zdan kechirish;</li><li>O\'qituvchilarning mahorat darslarida bevosita ishtirok etish kutmoqda.</li></ul><p>Kirish mutloq bepul. Barchangizni kutib qolamiz!</p>',
    coverImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    category: 'announcements',
    tags: ['E\'lon', 'Ochiq Eshiklar', 'Muloqot'],
    author: 'Ma\'muriyat',
    publishDate: '2026-07-10',
    featured: false,
    status: 'published',
    views: 215,
    createdAt: '2026-07-10T09:00:00Z',
    updatedAt: '2026-07-10T09:00:00Z'
  },
  {
    id: 'n8',
    title: 'Respublika Shaxmat Turnirida O\'quvchimiz Kumush Medalni Qo\'lga Kiritdi',
    slug: 'shaxmat-turniri-yutuq-kumush',
    excerpt: '7-sinf o\'quvchimiz Bobur Kamolov yoshlar o\'rtasida o\'tkazilgan shaxmat turnirida faxrli 2-o\'rinni egalladi.',
    content: '<p>Shaxmat intellektual salohiyat ko\'zgusidir. Maktabimiz shaxmat to\'garagi o\'quvchisi Bobur Kamolov daho o\'yini bilan respublika shaxmat federatsiyasi tomonidan o\'tkazilgan yoshlar turnirida tumanimiz sharafini munosib himoya etdi.</p><p>Bobur 9 ta tur yakunlariga ko\'ra 7.5 ball to\'plab, kumush medal va maxsus sertifikat bilan taqdirlandi. Uning ushbu ajoyib natijasi kelajakda grossmeyster bo\'lib yetishishiga mustahkam zamin yaratadi.</p>',
    coverImage: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80',
    category: 'sports',
    tags: ['Shaxmat', 'Sport', 'Kumush Medal'],
    author: 'Tashkilotchi',
    publishDate: '2026-05-25',
    featured: false,
    status: 'published',
    views: 185,
    createdAt: '2026-05-25T10:00:00Z',
    updatedAt: '2026-05-25T10:00:00Z'
  }
];

export const INITIAL_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Ota-onalar Uchun \"Ochiq Eshiklar\" Intellektual Kuni',
    slug: 'ochiq-eshiklar-kuni-tadbir',
    description: 'Maktabimiz ta\'lim tizimi va o\'quv xonalari bilan yaqindan tanishish maqsadida tashkil etiladigan ochiq muloqot kuni.',
    fullContent: 'Barcha qiziqqan ota-onalar va bino sharoitlarini ko\'zdan kechirmoqchi bo\'lgan mehmonlar taklif etiladi. STEAM laboratoriyalari, yangi kompyuter xonalari, kutubxona va dzyudo to\'garaklarida mahorat darslari o\'tkaziladi.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-07-25',
    startTime: '09:00',
    endDate: '2026-07-25',
    endTime: '15:00',
    location: 'Maktab asosiy binosi',
    responsiblePerson: 'Gulnoza Ergasheva (Metodist)',
    registrationRequired: true,
    eventStatus: 'upcoming',
    createdAt: '2026-07-10T10:00:00Z',
    updatedAt: '2026-07-10T10:00:00Z'
  },
  {
    id: 'e2',
    title: 'Dasturlash va Veb-Ilovalar Yaratish Bo\'yicha Hackathon',
    slug: 'it-hackathon-chiroqchi-2026',
    description: 'Dasturchi o\'quvchilar o\'rtasida 24 soatlik amaliy dasturiy loyihalar yaratish musobaqasi.',
    fullContent: 'Musobaqada o\'quvchilar 3 kishilik jamoalarda birlashib, maktab va tuman muammolarini hal etuvchi mobil ilova yoki veb-sayt loyihasini yaratishadi. Eng yaxshi loyiha mualliflariga pul mukofoti va qimmatbaho sovg\'alar taqdim etiladi.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-08-10',
    startTime: '10:00',
    endDate: '2026-08-11',
    endTime: '16:00',
    location: 'IT Axborot markazi',
    responsiblePerson: 'Jasur Bekmirodov',
    registrationRequired: true,
    eventStatus: 'upcoming',
    createdAt: '2026-07-12T10:00:00Z',
    updatedAt: '2026-07-12T10:00:00Z'
  },
  {
    id: 'e3',
    title: 'Mustaqillik Bayramiga Bag\'ishlangan Badiiy-Musiqiy Kecha',
    slug: 'mustaqillik-bayrami-kecha',
    description: 'O\'zbekiston Respublikasi Mustaqilligining 35 yilligi bayramiga bag\'ishlangan tantanali bayram tadbiri.',
    fullContent: 'Tadbirda maktab o\'quvchilarining ijodiy chiqishlari, milliy kuy va qo\'shiqlar, vatanparvarlik ruhidagi sahna ko\'rinishlari hamda tuman san\'at arboblari bilan uchrashuv rejalashtirilgan.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-09-02',
    startTime: '08:30',
    endDate: '2026-09-02',
    endTime: '12:00',
    location: 'Maktab faollar zali',
    responsiblePerson: 'Lola Umarova',
    registrationRequired: false,
    eventStatus: 'upcoming',
    createdAt: '2026-07-14T10:00:00Z',
    updatedAt: '2026-07-14T10:00:00Z'
  },
  {
    id: 'e4',
    title: 'Insholar Va Notiqlik San\'ati Turniri',
    slug: 'notiqlik-turniri-2026',
    description: '\"Mening g\'oyalarim - kelajagim\" mavzusidagi an\'anaviy insholar va og\'zaki notiqlik bahslari.',
    fullContent: 'Ushbu tadbir o\'quvchilarning adabiy va mantiqiy fikrlashini hamda omma oldida so\'zlash san\'atini yaxshilashga qaratilgan. G\'oliblarga faxriy yorliqlar topshiriladi.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-06-20',
    startTime: '14:00',
    endDate: '2026-06-20',
    endTime: '17:30',
    location: 'Kutubxona o\'quv zali',
    responsiblePerson: 'Lola Umarova',
    registrationRequired: false,
    eventStatus: 'completed',
    createdAt: '2026-06-10T10:00:00Z',
    updatedAt: '2026-06-20T10:00:00Z'
  },
  {
    id: 'e5',
    title: 'Kitobxonlik Va Yosh Yozuvchilar Ko\'rik-Tanlovi',
    slug: 'kitobxonlik-tanlovi-tadbir',
    description: '\"Kitob - bilim bulog\'i\" shiori ostida eng ko\'p kitob o\'qigan va tahlil qila olgan o\'quvchilar o\'rtasidagi musobaqa.',
    fullContent: 'Musobaqada o\'quvchilar jahon va o\'zbek adabiyoti durdonalari bo\'yicha tuzilgan test va tezkor savollarga javob berishdi. 11-sinf o\'quvchisi Alisher To\'rayev g\'olib deb topildi va kitoblar to\'plami bilan taqdirlandi.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-05-18',
    startTime: '10:00',
    endDate: '2026-05-18',
    endTime: '13:00',
    location: 'Maktab kutubxonasi',
    responsiblePerson: 'Alisher Ro\'ziyev',
    registrationRequired: false,
    eventStatus: 'completed',
    createdAt: '2026-05-01T10:00:00Z',
    updatedAt: '2026-05-18T10:00:00Z'
  },
  {
    id: 'e6',
    title: 'Fanlararo STEAM Amaliy Ko\'rgazmasi',
    slug: 'steam-amaliy-korgazma',
    description: 'Fizika, kimyo, biologiya va matematika fanlarini birlashtirgan amaliy eksperimentlar taqdimoti.',
    fullContent: 'Ko\'rgazmada o\'quvchilar o\'zlari yasagan fizika asboblari, kimyoviy elementlarning qiziqarli reaksiyalari va biologik mikroskopik tajribalarni namoyish etishdi. Barcha tuman maktablaridan o\'qituvchilar tashrif buyurdi.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-04-15',
    startTime: '09:00',
    endDate: '2026-04-15',
    endTime: '16:00',
    location: 'Maktab hovlisi va sport zali',
    responsiblePerson: 'Shaxnoza To\'rayeva',
    registrationRequired: false,
    eventStatus: 'completed',
    createdAt: '2026-04-01T10:00:00Z',
    updatedAt: '2026-04-15T10:00:00Z'
  }
];

export const INITIAL_CLASSES: SchoolClass[] = [
  { id: 'c1', grade: 1, className: 'A (Ixtisoslashgan)', language: 'uz', shift: 1, currentStudents: 22, capacity: 25, availableSeats: 3, monthlyFee: 0, teacherId: 't7', admissionStatus: 'limited', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c2', grade: 2, className: 'A', language: 'uz', shift: 1, currentStudents: 20, capacity: 25, availableSeats: 5, monthlyFee: 0, teacherId: 't7', admissionStatus: 'open', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c3', grade: 3, className: 'A', language: 'uz', shift: 1, currentStudents: 24, capacity: 25, availableSeats: 1, monthlyFee: 0, teacherId: 't7', admissionStatus: 'limited', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c4', grade: 4, className: 'A', language: 'uz', shift: 1, currentStudents: 25, capacity: 25, availableSeats: 0, monthlyFee: 0, teacherId: 't7', admissionStatus: 'closed', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c5', grade: 5, className: 'A (Aniq fanlar)', language: 'uz', shift: 1, currentStudents: 21, capacity: 25, availableSeats: 4, monthlyFee: 0, teacherId: 't2', admissionStatus: 'open', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c6', grade: 6, className: 'A (Xorijiy tillar)', language: 'uz', shift: 1, currentStudents: 18, capacity: 25, availableSeats: 7, monthlyFee: 0, teacherId: 't1', admissionStatus: 'open', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c7', grade: 7, className: 'A (STEAM)', language: 'uz', shift: 1, currentStudents: 23, capacity: 25, availableSeats: 2, monthlyFee: 0, teacherId: 't6', admissionStatus: 'limited', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c8', grade: 8, className: 'A (STEAM)', language: 'uz', shift: 1, currentStudents: 22, capacity: 25, availableSeats: 3, monthlyFee: 0, teacherId: 't3', admissionStatus: 'limited', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c9', grade: 9, className: 'A (Aniq fanlar)', language: 'uz', shift: 1, currentStudents: 20, capacity: 25, availableSeats: 5, monthlyFee: 0, teacherId: 't8', admissionStatus: 'open', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c10', grade: 10, className: 'A (IT & Muhandislik)', language: 'uz', shift: 1, currentStudents: 23, capacity: 25, availableSeats: 2, monthlyFee: 0, teacherId: 't4', admissionStatus: 'limited', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' },
  { id: 'c11', grade: 11, className: 'A (Matematika & Ingliz)', language: 'uz', shift: 1, currentStudents: 25, capacity: 25, availableSeats: 0, monthlyFee: 0, teacherId: 't2', admissionStatus: 'closed', createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z' }
];

export const INITIAL_VACANCIES: Vacancy[] = [
  {
    id: 'v1',
    title: 'Matematika fani o\'qituvchisi (Olimpiada murabbiysi)',
    department: 'Aniq fanlar kafedrasi',
    employmentType: 'full_time',
    description: 'Xalqaro va Respublika miqyosidagi fan olimpiadalariga iqtidorli o\'quvchilarni tayyorlay oladigan, tajribali va yuqori mantiqiy fikrlovchi matematika o\'qituvchisini taklif etamiz.',
    responsibilities: [
      'Maktab o\'quvchilarini maxsus matematika darslari va olimpiada to\'garaklarida o\'qitish;',
      'Murakkab va nostandart masalalarni yechish metodlarini o\'rgatish;',
      'Olimpiada o\'quv dasturini ishlab chiqish va yangilab borish.'
    ],
    requirements: [
      'Matematika bo\'yicha oliy pedagogik ma\'lumot (kamida magistr darajasi afzal ko\'riladi);',
      'Olimpiadalarda o\'quvchilarining sovrindor bo\'lgan tajribasi mavjudligi;',
      'Milliy yoki xalqaro sertifikatlarga (A+ yoki unga teng) ega bo\'lish.'
    ],
    experience: 'Kamida 5 yil olimpiada tayyorgarligi bilan ishlagan',
    education: 'Oliy (Magistr afzal)',
    salary: 'Kelishiladi (Yuqori oylik va erkin jadval)',
    deadline: '2026-08-15',
    status: 'active',
    createdAt: '2026-07-10T10:00:00Z',
    updatedAt: '2026-07-10T10:00:00Z'
  },
  {
    id: 'v2',
    title: 'Biologiya fani o\'qituvchisi',
    department: 'Tabiiy fanlar kafedrasi',
    employmentType: 'full_time',
    description: 'STEAM va zamonaviy laboratoriya jihozlari yordamida biologiya fanini yuqori saviyada o\'ta oladigan dars beruvchi pedagog qidirilmoqda.',
    responsibilities: [
      'Maktab o\'quv dasturiga muvofiq biologiya darslarini o\'tish;',
      'Kimyo va biologiya laboratoriya xonasida amaliy tajribalar o\'tkazish;',
      'O\'quvchilarni biologiya fan olimpiadasining tuman bosqichlariga tayyorlash.'
    ],
    requirements: [
      'Oliy biologik pedagogik ma\'lumot;',
      'STEAM o\'quv tizimi haqida tushunchaga egalik;',
      'Laboratoriya jihozlari (elektron mikroskop va datchiklar) bilan ishlash ko\'nikmasi.'
    ],
    experience: 'Kamida 2 yil maktabda dars bergan',
    education: 'Oliy ma\'lumot',
    salary: '5,000,000 - 8,000,000 UZS',
    deadline: '2026-08-20',
    status: 'active',
    createdAt: '2026-07-12T10:00:00Z',
    updatedAt: '2026-07-12T10:00:00Z'
  },
  {
    id: 'v3',
    title: 'Rus tili fani o\'qituvchisi',
    department: 'Xorijiy tillar kafedrasi',
    employmentType: 'part_time',
    description: 'O\'quvchilarda rus tilida erkin so\'zlashish, yozish va eshitish ko\'nikmalarini mukammal shakllantiruvchi pedagog taklif etiladi.',
    responsibilities: [
      'Rus tili va adabiyoti fanidan dars berish;',
      'Muloqot to\'garaklarini (Conversational Russian) tashkil etish;',
      'Interaktiv intervyu va bahslar o\'tkazish.'
    ],
    requirements: [
      'Rus tili va adabiyoti filologiyasi bo\'yicha oliy ma\'lumot;',
      'Rus tilida to\'liq ona tili (Native) darajasida gapirish;',
      'Muloqot metodikalaridan xabardorlik.'
    ],
    experience: 'Kamida 3 yil',
    education: 'Oliy ma\'lumot',
    salary: 'O\'tilgan soatiga qarab jozibador stavka',
    deadline: '2026-08-25',
    status: 'active',
    createdAt: '2026-07-14T10:00:00Z',
    updatedAt: '2026-07-14T10:00:00Z'
  }
];

export const INITIAL_FAQ: FAQItem[] = [
  {
    id: 'f1',
    question: 'Maktabingizga qabul qilish tartibi qanday?',
    answer: 'Maktabimizga qabul qilish jarayoni onlayn yoki oflayn ariza topshirish, so\'ngra maktab mas\'ullari bilan qisqa suhbat va mantiqiy-matematik intellektni aniqlash testidan iborat. Barcha arizalar onlayn tarzda \"Qabul\" sahifasidagi ariza formasi orqali yuborilishi mumkin.',
    category: 'admission',
    order: 1,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f2',
    question: 'Maktabda ta\'lim bepulmi yoki to\'lov bormi?',
    answer: 'Chiroqchi Tuman Ixtisoslashtirilgan Maktabi davlat ixtisoslashtirilgan o\'quv dargohi hisoblanadi. Shuning uchun maktabimizda asosiy ta\'lim mutloq bepul va barcha darsliklar davlat tomonidan ta\'minlanadi. Ba\'zi qo\'shimcha xalqaro kurslar yoki maxsus to\'garaklar ixtiyoriy bo\'lib, mutloq bepul yoki homiylar tomonidan moliyalashtiriladi.',
    category: 'fees',
    order: 2,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f3',
    question: 'Dars va to\'garaklar jadvali qanday belgilangan?',
    answer: 'Asosiy darslarimiz soat 08:30 dan boshlanib, sinfga qarab 13:30 yoki 14:15 gacha davom etadi. Shundan so\'ng o\'quvchilar tushlik qilishadi va soat 15:00 dan boshlab maxsus to\'garaklar (IT, olimpiada tayyorgarligi, dzyudo, shaxmat, tillar) boshlanadi va 17:30 gacha davom etadi.',
    category: 'schedule',
    order: 3,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f4',
    question: 'Maktab transporti (avtobus) xizmati bormi?',
    answer: 'Ha, maktabimizda Chiroqchi tumanining chekka hududlaridan keladigan o\'quvchilar uchun maxsus maktab avtobuslari (shuttles) yo\'lga qo\'yilgan. Avtobuslar belgilangan 3 ta yo\'nalish bo\'yicha ertalab o\'quvchilarni uylariga yaqin bekatdan olib kelishadi va kechqurun uylariga xavfsiz qaytarishadi. Batafsil yo\'nalishlar va xizmat haqi haqida ma\'muriyatdan yoki transport bo\'limidan bilib olishingiz mumkin.',
    category: 'transport',
    order: 4,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f5',
    question: 'O\'quvchilarning ovqatlanishi qanday tashkil etilgan?',
    answer: 'Maktabimizning maxsus zamonaviy oshxonasida o\'quvchilar uchun sifatli va issiq ovqatlar tayyorlanadi. Haftalik menyu bolalar shifokori va parhezshunoslar tomonidan tasdiqlanib, barcha kerakli vitamin va minerallar balansiga ega. Oshxonada nonushta, issiq tushlik va peshindan keyingi tamaddi taqdim etiladi.',
    category: 'meals',
    order: 5,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f6',
    question: 'Maktab formasi bo\'yicha qanday talablar mavjud?',
    answer: 'Maktabimizda o\'quvchilar uchun yagona maktab formasi joriy etilgan. O\'g\'il bolalar uchun: to\'q ko\'k shim, oq ko\'ylak va to\'q ko\'k nimcha (nimchada maktab logotipi bo\'lishi shart). Qiz bolalar uchun: to\'q ko\'k yubka yoki shim, oq ko\'ylak va nimcha. Jismoniy tarbiya darslari uchun esa maktab logotipi tushirilgan sport kiyimi talab qilinadi.',
    category: 'uniform',
    order: 6,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f7',
    question: 'Qanday qo\'shimcha to\'garaklar va darslar mavjud?',
    answer: 'Maktabda Python va Web dasturlash, Robototexnika, Shaxmat, Dzyudo va Sport gimnastikasi, ingliz tili debat klublari hamda barcha asosiy fanlardan (matematika, fizika, kimyo) fan olimpiadalariga tayyorlov guruhlari mavjud. Har bir to\'garak professional ustozlar tomonidan olib boriladi.',
    category: 'extra_classes',
    order: 7,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f8',
    question: 'Maktab xavfsizligi qanday ta\'minlangan?',
    answer: 'Maktab hududi 24/7 davomida professional qo\'riqlash xizmati va zamonaviy tun-u kun ishlovchi videokuzatuv kameralari bilan to\'liq ta\'minlangan. Maktabga kirish va chiqish maxsus FaceID (yuzni aniqlash) tizimi orqali nazorat qilinadi. Shuningdek, barcha favqulodda vaziyatlar uchun yong\'in signalizatsiyasi va maxsus evakuatsiya yo\'laklari mavjud.',
    category: 'safety',
    order: 8,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f9',
    question: 'Ariza topshirish uchun qanday hujjatlar talab etiladi?',
    answer: 'Onlayn ariza uchun dastlab ota-onaning pasporti, o\'quvchining tug\'ilganlik guvohnomasi, 3x4 o\'lchamdagi rasm va oldingi maktabdan (agar mavjud bo\'lsa) baholar tabeli talab etiladi. Yakuniy qabul vaqtida tibbiy ma\'lumotnoma (086-forma) ham taqdim qilinishi lozim.',
    category: 'documents',
    order: 9,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f10',
    question: 'Maktabda imtihonlar qanday shaklda o\'tkaziladi?',
    answer: 'Maktabimizda o\'quvchilar bilimi choraklik va yillik nazorat ishlari, test sinovlari hamda amaliy taqdimotlar yordamida baholanadi. Maxsus ixtisoslashgan sinflar uchun yil oxirida imtihonlar va amaliy loyihalar himoyasi tashkil qilinadi.',
    category: 'exams',
    order: 10,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f11',
    question: 'Xalqaro imtihonlarga (IELTS, SAT) tayyorgarlik bormi?',
    answer: 'Ha, yuqori 9-, 10- va 11-sinf o\'quvchilari uchun haftalik dars jadvaliga kiritilgan holda hamda darsdan so\'ng maxsus bepul IELTS va SAT tayyorlov kurslari tashkil etilgan. Ushbu darslarni yuqori natijaga ega mutaxassis o\'qituvchilarimiz olib borishadi.',
    category: 'extra_classes',
    order: 11,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'f12',
    question: 'Ota-onalar farzandi baholarini qayerdan kuzatib borishadi?',
    answer: 'Maktabimiz O\'zbekistonda keng tarqalgan Kundalik.com elektron kundalik tizimi hamda maktabimizning ichki telegram xabarnoma botiga to\'liq integratsiya qilingan. Har bir ota-ona o\'z farzandining dars qatnashuvi va choraklik natijalarini real vaqtda ko\'rib borishadi.',
    category: 'safety',
    order: 12,
    status: 'active',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Maktab asosiy binosi', category: 'school_life', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-01', order: 1, status: 'active', createdAt: '2026-05-01T00:00:00Z', updatedAt: '2026-05-01T00:00:00Z' },
  { id: 'g2', title: 'Biologiya laboratoriya darsi', category: 'labs', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1562774053-401386df887f?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-10', order: 2, status: 'active', createdAt: '2026-05-10T00:00:00Z', updatedAt: '2026-05-10T00:00:00Z' },
  { id: 'g3', title: 'Matematika chuqurlashtirilgan mashg\'ulot', category: 'classes', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80', eventDate: '2026-04-15', order: 3, status: 'active', createdAt: '2026-04-15T00:00:00Z', updatedAt: '2026-04-15T00:00:00Z' },
  { id: 'g4', title: 'Robototexnika yig\'ish jarayoni', category: 'school_life', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80', eventDate: '2026-06-12', order: 4, status: 'active', createdAt: '2026-06-12T00:00:00Z', updatedAt: '2026-06-12T00:00:00Z' },
  { id: 'g5', title: 'Shaxmat to\'garagi o\'yini', category: 'sports', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-20', order: 5, status: 'active', createdAt: '2026-05-20T00:00:00Z', updatedAt: '2026-05-20T00:00:00Z' },
  { id: 'g6', title: 'Maktabimizning boy kutubxonasi', category: 'library', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-18', order: 6, status: 'active', createdAt: '2026-05-18T00:00:00Z', updatedAt: '2026-05-18T00:00:00Z' },
  { id: 'g7', title: 'Mustaqillik bayrami tadbiri', category: 'events', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80', eventDate: '2025-09-02', order: 7, status: 'active', createdAt: '2025-09-02T00:00:00Z', updatedAt: '2025-09-02T00:00:00Z' },
  { id: 'g8', title: 'Ochiq eshiklar kuni', category: 'events', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80', eventDate: '2026-07-25', order: 8, status: 'active', createdAt: '2026-07-25T00:00:00Z', updatedAt: '2026-07-25T00:00:00Z' },
  { id: 'g9', title: 'Insholar va notiqlik bahslari', category: 'olympiads', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80', eventDate: '2026-06-20', order: 9, status: 'active', createdAt: '2026-06-20T00:00:00Z', updatedAt: '2026-06-20T00:00:00Z' },
  { id: 'g10', title: 'STEAM ko\'rgazmasi', category: 'labs', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80', eventDate: '2026-04-15', order: 10, status: 'active', createdAt: '2026-04-15T00:00:00Z', updatedAt: '2026-04-15T00:00:00Z' },
  { id: 'g11', title: 'Tarixiy ekskursiya Samarqand shahriga', category: 'trips', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1584646098777-110fb7487e98?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-05', order: 11, status: 'active', createdAt: '2026-05-05T00:00:00Z', updatedAt: '2026-05-05T00:00:00Z' },
  { id: 'g12', title: 'Dzyudo amaliy mashg\'ulotlari', category: 'sports', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-30', order: 12, status: 'active', createdAt: '2026-05-30T00:00:00Z', updatedAt: '2026-05-30T00:00:00Z' },
  { id: 'g13', title: 'Kompyuter sinfi darsi', category: 'classes', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-15', order: 13, status: 'active', createdAt: '2026-05-15T00:00:00Z', updatedAt: '2026-05-15T00:00:00Z' },
  { id: 'g14', title: 'Kitobxonlar bahsi yakunlari', category: 'library', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80', eventDate: '2026-05-18', order: 14, status: 'active', createdAt: '2026-05-18T00:00:00Z', updatedAt: '2026-05-18T00:00:00Z' },
  { id: 'g15', title: '2025-yil Bitiruv tantanasi', category: 'graduation', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80', eventDate: '2025-06-20', order: 15, status: 'active', createdAt: '2025-06-20T00:00:00Z', updatedAt: '2025-06-20T00:00:00Z' },
  { id: 'g16', title: 'O\'quvchi qizlarimiz kimyo darsida', category: 'classes', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&auto=format&fit=crop&q=80', eventDate: '2026-03-20', order: 16, status: 'active', createdAt: '2026-03-20T00:00:00Z', updatedAt: '2026-03-20T00:00:00Z' },
  { id: 'g17', title: 'Xalqaro dzyudo sovrindorining kutib olinishi', category: 'sports', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80', eventDate: '2026-06-02', order: 17, status: 'active', createdAt: '2026-06-02T00:00:00Z', updatedAt: '2026-06-02T00:00:00Z' },
  { id: 'g18', title: 'Kimyo fanidan laboratoriya tajribalari', category: 'labs', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop&q=80', eventDate: '2026-04-18', order: 18, status: 'active', createdAt: '2026-04-18T00:00:00Z', updatedAt: '2026-04-18T00:00:00Z' },
  { id: 'g19', title: 'O\'quvchilar hayoti tanaffus vaqtida', category: 'school_life', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=80', eventDate: '2026-04-10', order: 19, status: 'active', createdAt: '2026-04-10T00:00:00Z', updatedAt: '2026-04-10T00:00:00Z' },
  { id: 'g20', title: 'Tuman IT festivali ishtirokchilari', category: 'school_life', type: 'image', mediaUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80', eventDate: '2026-06-25', order: 20, status: 'active', createdAt: '2026-06-25T00:00:00Z', updatedAt: '2026-06-25T00:00:00Z' }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: 'test1',
    name: 'Xurshida Ergasheva',
    status: '11-A o\'quvchisi onasi',
    text: 'Maktabning dars berish uslubi menga juda ma\'qul keldi. O\'g\'lim Zafar o\'qituvchilar ko\'magi bilan IELTSdan 8.0 ball oldi. Ustozlariga katta rahmat aytaman. Chiroqchida bunday darajadagi maktab borligidan faxrlanamiz.'
  },
  {
    id: 'test2',
    name: 'Ilhom Boboqulov',
    status: '10-A o\'quvchisi otasi',
    text: 'Qizim Madina matematika olimpiadasida viloyat va respublika miqyosida oltin medallasini band etdi. Buning uchun Sardor Alimov kabi kuchli fidoyi o\'qituvchilarga minnatdorlik bildiraman.'
  },
  {
    id: 'test3',
    name: 'Nodir Toshpo\'latov',
    status: 'Bitiruvchi o\'quvchi otasi',
    text: 'O\'g\'lim Javohir ushbu maktabning chuqurlashtirilgan IT to\'garaklari hamda ingliz tili darslari tufayli Singapurning nufuzli oliygohiga to\'liq grant yutdi. Bu har bir ota-onaning orzusidir.'
  },
  {
    id: 'test4',
    name: 'Kamola Rustamova',
    status: '9-B o\'quvchisi onasi',
    text: 'Maktab xavfsizligi va undagi ahloqiy muhit, to\'g\'ri tarbiya berish yo\'lga qo\'yilgani bizga oilaviy xotirjamlik bag\'ishlaydi. Laboratoriyalar, sinfxonalar hammasi juda zamonaviy.'
  }
];

export const INITIAL_CLUBS: Club[] = [
  {
    id: 'club1',
    name: 'Dasturlash va Robototexnika',
    leader: 'Jasur Bekmirodov',
    ageLimit: '12-17 yosh (7-11 sinflar)',
    schedule: 'Dushanba, Chorshanba, Juma, 15:30-17:00',
    description: 'Python asoslari, Web dasturlash (HTML, CSS, JavaScript) va Arduino mikro-kontrollerlari yordamida harakatlanuvchi robotlar yaratish kursi.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'club2',
    name: 'Shaxmat Akademiyasi',
    leader: 'Sardor Alimov',
    ageLimit: '7-17 yosh (Barcha sinflar)',
    schedule: 'Seshanba, Payshanba, Shanba, 15:00-16:30',
    description: 'Mantiqiy fikrlashni, strategik tahlil qilishni hamda diqqatni jamlashni rivojlantiruvchi, professional turnirlarga tayyorlovchi shaxmat darslari.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'club3',
    name: 'Dzyudo & Sharq yakkakurashlari',
    leader: 'Elyor Toshpo\'latov',
    ageLimit: '10-16 yosh (5-10 sinflar)',
    schedule: 'Dushanba, Chorshanba, Juma, 16:30-18:00',
    description: 'Sog\'lom tana, mustahkam iroda va o\'z-o\'zini himoya qilish mahoratini oshiruvchi, Osiyo va Milliy chempionatlar g\'oliblari tayyorlanuvchi jismoniy to\'garak.',
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_DOCUMENTS: SchoolDocument[] = [
  { id: 'doc1', name: 'Maktab Ustavi (Nizomi)', category: 'rules', fileType: 'pdf', fileSize: '1.2 MB', fileUrl: '#' },
  { id: 'doc2', name: 'Qabul va Hujjat topshirish qoidalari 2026', category: 'admission', fileType: 'docx', fileSize: '450 KB', fileUrl: '#' },
  { id: 'doc3', name: 'O\'quvchi-yoshlar uchun ichki tartib intizom qoidalari', category: 'rules', fileType: 'pdf', fileSize: '850 KB', fileUrl: '#' },
  { id: 'doc4', name: 'Maktab formasi bo\'yicha davlat va maktab standartlari', category: 'uniform', fileType: 'pdf', fileSize: '2.1 MB', fileUrl: '#' }
];

export const INITIAL_SETTINGS: SiteSettings = {
  schoolName: 'Chiroqchi Tuman IM',
  logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=100&auto=format&fit=crop&q=80',
  favicon: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=32&auto=format&fit=crop&q=80',
  description: 'Chiroqchi tuman ixtisoslashtirilgan maktabining rasmiy va to\'liq boshqariladigan veb-sayti. Yangiliklar, yutuqlar, o\'qituvchilar, qabul va boshqaruv tizimi.',
  address: 'Qashqadaryo viloyati, Chiroqchi tumani, Mustaqillik ko\'chasi, 45-uy',
  phoneNumbers: ['+998 75 512 20 20', '+998 91 210 20 20'],
  email: 'chiroqchi_im@mail.ru',
  workingHours: 'Dushanba–Shanba, 08:00–18:00',
  socialLinks: {
    telegram: 'https://t.me/chiroqchi_im',
    instagram: 'https://instagram.com/chiroqchi_im_school',
    facebook: 'https://facebook.com/chiroqchi_im',
    youtube: 'https://youtube.com/chiroqchi_im'
  },
  mapCoordinates: '39.0345,66.1234',
  statistics: {
    studentsCount: 850,
    teachersCount: 65,
    achievementsCount: 120,
    experienceYears: 15,
    universityEntryRate: 92
  },
  admissionOpen: true,
  announcementBar: {
    enabled: true,
    text: 'Yangi 2026-2027 o\'quv yili uchun onlayn qabul va hujjat topshirish rasman boshlandi!',
    color: '#1746A2'
  },
  showFees: false,
  showTransport: true,
  showMeals: true,
  showTestimonials: true,
  maintenanceMode: false,
  updatedAt: '2026-07-15T10:00:00Z'
};
