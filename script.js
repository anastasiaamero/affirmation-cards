{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh16180\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const affirmations = [\
  "\uc0\u1089 \u1085 \u1086 \u1074 \u1072  \u1074 \u1083 \u1102 \u1073 \u1080 \u1096 \u1100 \u1089 \u1103  \u1074  \u1089 \u1077 \u1073 \u1103 ",\
  "\uc0\u1087 \u1086 \u1095 \u1091 \u1074 \u1089 \u1090 \u1074 \u1091 \u1077 \u1096 \u1100  \u1074 \u1085 \u1091 \u1090 \u1088 \u1077 \u1085 \u1085 \u1080 \u1081  \u1089 \u1074 \u1077 \u1090 ",\
  "\uc0\u1079 \u1072 \u1084 \u1077 \u1090 \u1080 \u1096 \u1100  \u1089 \u1074 \u1086 \u1102  \u1089 \u1080 \u1083 \u1091 ",\
  "\uc0\u1074 \u1089 \u1090 \u1088 \u1077 \u1090 \u1080 \u1096 \u1100  \u1074 \u1076 \u1086 \u1093 \u1085 \u1086 \u1074 \u1077 \u1085 \u1080 \u1077 ",\
  "\uc0\u1087 \u1086 \u1079 \u1074 \u1086 \u1083 \u1080 \u1096 \u1100  \u1089 \u1077 \u1073 \u1077  \u1073 \u1099 \u1090 \u1100  \u1089 \u1095 \u1072 \u1089 \u1090 \u1083 \u1080 \u1074 \u1086 \u1081 ",\
  "\uc0\u1074 \u1099 \u1073 \u1077 \u1088 \u1077 \u1096 \u1100  \u1089 \u1077 \u1073 \u1103 "\
];\
\
const images = [\
  "images/card-illustration-1.png",\
  "images/card-illustration-2.png",\
  "images/card-illustration-3.png"\
];\
\
const card = document.getElementById("affirmationCard");\
const backText = document.getElementById("affirmationText");\
const backImg = document.getElementById("backIllustration");\
\
const saveBtn = document.getElementById("saveBtn");\
const shareBtn = document.getElementById("shareBtn");\
\
// \uc0\u1055 \u1077 \u1088 \u1077 \u1074 \u1086 \u1088 \u1086 \u1090  \u1082 \u1072 \u1088 \u1090 \u1086 \u1095 \u1082 \u1080 \
card.addEventListener("click", () => \{\
  card.classList.toggle("flipped");\
\
  const randomAff = affirmations[Math.floor(Math.random() * affirmations.length)];\
  const randomImg = images[Math.floor(Math.random() * images.length)];\
\
  backText.textContent = randomAff;\
  backImg.src = randomImg;\
\});\
\
// \uc0\u1057 \u1074 \u1072 \u1081 \u1087  \u1076 \u1083 \u1103  \u1089 \u1084 \u1077 \u1085 \u1099  \u1082 \u1072 \u1088 \u1090 \u1086 \u1095 \u1082 \u1080 \
let startX = 0;\
\
card.addEventListener("touchstart", e => \{\
  startX = e.touches[0].clientX;\
\});\
\
card.addEventListener("touchend", e => \{\
  let endX = e.changedTouches[0].clientX;\
  if (endX - startX > 80 || startX - endX > 80) \{\
    window.location.reload();\
  \}\
\});\
\
// \uc0\u1057 \u1086 \u1093 \u1088 \u1072 \u1085 \u1077 \u1085 \u1080 \u1077  \u1082 \u1072 \u1088 \u1090 \u1080 \u1085 \u1082 \u1080 \
saveBtn.addEventListener("click", () => \{\
  html2canvas(document.querySelector(".card-back")).then(canvas => \{\
    const link = document.createElement("a");\
    link.download = "affirmation.png";\
    link.href = canvas.toDataURL();\
    link.click();\
  \});\
\});\
\
// \uc0\u1054 \u1090 \u1087 \u1088 \u1072 \u1074 \u1082 \u1072  \u1074  Telegram\
shareBtn.addEventListener("click", async () => \{\
  if (navigator.share) \{\
    navigator.share(\{\
      title: "\uc0\u1052 \u1086 \u1103  \u1072 \u1092 \u1092 \u1080 \u1088 \u1084 \u1072 \u1094 \u1080 \u1103 ",\
      text: backText.textContent,\
    \});\
  \} else \{\
    alert("\uc0\u1055 \u1086 \u1076 \u1077 \u1083 \u1080 \u1090 \u1100 \u1089 \u1103  \u1084 \u1086 \u1078 \u1085 \u1086  \u1090 \u1086 \u1083 \u1100 \u1082 \u1086  \u1085 \u1072  \u1090 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 \u1077 ");\
  \}\
\});\
}