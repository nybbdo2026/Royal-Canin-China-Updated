const brands = [
    { name: "Hill's", img: "img/acana.png" },
    { name: "Royal Canin", img: "img/hills.png" }, 
    { name: "Purina Pro Plan", img:"img/myfoodie.png" }, 
    { name: "Orijen", img:"img/orijen.png" },
    { name: "Drools", img:"img/proplanet.png" },
    { name: "Farmina Pet Foods", img:"img/purenatural.png" },
    { name: "Acana", img:"img/royalcanin.png" },
    { name: "Pedigree", img:"img/wanpy.png" }
  ];

const category = "Pet Food"

const attributes = ["自由","发现","斗志","非传统","充满活力","韧性","大胆","精力充沛","变革","独特","自豪","完美","讲究","尽力而为","自信","优化","强大","抱负","成长","卓越","有力量","掌控","有效","精准","简洁","专业","可靠","科学","积极主动","值得信赖","关心","团结","和谐感","保护","安心","奉献","长寿","陪伴","恢复","理解","喜悦","无忧无虑","纵容","乐观","自然","幸福","希望","爱","健康","平静","兴奋","生活热情","活力","顽皮","个性","精力","积极主动","茁壮成长","非凡"]
const pretest_attributes = [
  "热",
  "冷",
  "危险",
  "清新",
  "可爱",
  "柔软"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}
]

const pretest_attributes_multiple = ["热", "冷", "危险", "清新", "可爱", "柔软", "旅行", "兴奋", "精准", "时间", "深", "湿"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Travel", "Excitement"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Deep", "Wet"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Precise", "Time"]}
]


const survey_name = "Royal Canin Survey China"
