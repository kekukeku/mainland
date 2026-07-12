export type Priority = "must" | "recommend" | "option";

export interface ChecklistTask {
  id: string;
  label: string;
  note?: string;
  priority: Priority;
}

export interface ChecklistPhase {
  id: string;
  phase: string;
  subtitle: string;
  tasks: ChecklistTask[];
}

export const priorityLabel: Record<Priority, string> = {
  must: "必備",
  recommend: "強烈建議",
  option: "選配",
};

export const checklistPhases: ChecklistPhase[] = [
  {
    id: "d30",
    phase: "出發前 30–14 天",
    subtitle: "打底：證件、機票、住宿、保險",
    tasks: [
      {
        id: "d30-tbc",
        label: "申辦卡式臺胞證，並確認護照效期要超過半年。",
        priority: "must",
      },
      {
        id: "d30-consistency",
        label: "核對姓名拼寫與機票資料，任何一項不一致，都可能無法報到或卡關。",
        priority: "must",
      },
      {
        id: "d30-flight",
        label: "訂直飛或轉機航班",
        priority: "must",
      },
      {
        id: "d30-hotel",
        label: "訂住宿（全國已取消涉外資質限制）",
        note: "大體上已無身份入住限制。但因少數旅宿可能仍有設備不足或法規熟悉度問題，入住若有疑慮可先與旅宿確認。",
        priority: "recommend",
      },
      {
        id: "d30-insurance",
        label: "投保涵蓋中國大陸、海外醫療與行程延誤的旅平險",
        priority: "recommend",
      },
    ],
  },
  {
    id: "d14",
    phase: "出發前 14–7 天",
    subtitle: "設定：支付、網路、App、驗證",
    tasks: [
      {
        id: "d14-pay",
        label: "安裝並實名支付寶、微信，綁定至少一張可海外交易信用卡",
        priority: "must",
      },
      {
        id: "d14-card2",
        label: "準備第二張不同發卡機構的信用卡作備援，並確認已開海外交易",
        priority: "recommend",
      },
      {
        id: "d14-network",
        label: "選定漫遊、免翻牆 eSIM／SIM 或當地門號方案",
        note: "先確保有可用網路，且臺灣門號能收 OTP。",
        priority: "must",
      },
      {
        id: "d14-inputmethod",
        label: "手機安裝簡體中文輸入法，在地圖搜尋、叫車或點餐時，能帶來極大方便。",
        priority: "recommend",
      },
      {
        id: "d14-apps",
        label: "安裝高德地圖、12306 或 攜程旅行/去哪兒旅行；需要時安裝大眾點評／美團",
        priority: "recommend",
      },
      {
        id: "d14-verify",
        label: "用臺胞證完成交通與 App 可先完成的驗證",
        priority: "recommend",
      },
    ],
  },
  {
    id: "d3",
    phase: "出發前 3–1 天",
    subtitle: "測試：小額支付、離線資料、現金、行動電源",
    tasks: [
      {
        id: "d3-testpay",
        label: "小額測試支付，確認密碼、簡訊 OTP 與信用卡可用。可請親友轉一點人民幣儲值。",
        priority: "must",
      },
      {
        id: "d3-offline",
        label: "下載離線資訊：航班、飯店中英文地址、訂單、保單、緊急聯絡人",
        priority: "must",
      },
      {
        id: "d3-cash",
        label: "準備少量人民幣現金，一般備援建議先備 300–500 元",
        note: "偏遠地區、長天數或不熟行動支付者可自行提高，非固定標準。",
        priority: "recommend",
      },
      {
        id: "d3-powerbank",
        label: "確認行動電源符合搭機與當地規範",
        note: "上線前另以官方規定核實 CCC 標示與容量限制。",
        priority: "recommend",
      },
      {
        id: "d3-copy",
        label: "將重要證件影本與電子備份分開存放",
        priority: "recommend",
      },
    ],
  },
  {
    id: "dday",
    phase: "出發當天",
    subtitle: "隨身：證件、電源、備援、抵達測試",
    tasks: [
      {
        id: "dday-carry",
        label: "隨身攜帶護照、臺胞證、手機、充電設備、信用卡與人民幣現金",
        priority: "must",
      },
      {
        id: "dday-gate",
        label: "出入境走「港澳臺」標示通道",
        note: "各口岸略有不同，臺灣居民地位身份等同香港居民，非中國公民也不是外國人，但走道可能與任一種歸類一起。如果沒寫，先走「中國公民」通道準沒錯。",
        priority: "must",
      },
      {
        id: "dday-arrive",
        label: "抵達後先測試網路與一筆小額支付，再離開機場／車站",
        priority: "must",
      },
    ],
  },
];

export interface PassCard {
  id: string;
  num: string;
  icon: string;
  title: string;
  desc: string;
  target: string;
}

export const passCards: PassCard[] = [
  { id: "p1", num: "01", icon: "🪪", title: "臺胞證", desc: "落地離境唯一合法證件", target: "#credentials" },
  { id: "p2", num: "02", icon: "📶", title: "可用網路", desc: "漫遊 / eSIM / 當地門號擇一", target: "#network" },
  { id: "p3", num: "03", icon: "📱", title: "必備APP", desc: "支付寶＋微信實名認證", target: "#payment" },
  { id: "p4", num: "04", icon: "🏨", title: "合格住宿", desc: "全國已全面取消涉外限制", target: "#lodging" },
  { id: "p5", num: "05", icon: "🚄", title: "交通工具", desc: "高鐵實名與叫車 App", target: "#transport" },
];

export interface NetworkScenario {
  id: string;
  label: string;
  /** 此情境高亮的方案 id */
  recommend: string;
}

export interface NetworkPlan {
  id: string;
  name: string;
  fit: string;
  pros: string;
  cons: string;
}

export const networkScenarios: NetworkScenario[] = [
  { id: "casual", label: "隨興短途旅人", recommend: "roaming" },
  { id: "google", label: "中長程旅人", recommend: "esim" },
  { id: "biz", label: "長期居留與融入生活", recommend: "local" },
];

export const networkPlans: NetworkPlan[] = [
  {
    id: "roaming",
    name: "臺灣門號漫遊",
    fit: "短天數、最怕設定",
    pros: "視同在臺上網，簡單省心，10天以下最佳選擇。",
    cons: "以日計價吃到飽，費用高昂，旅遊超過10天的話不建議。",
  },
  {
    id: "esim",
    name: "免翻牆 eSIM／SIM",
    fit: "手機支援、重視 Google／LINE",
    pros: "不用另外買翻牆服務，用完即丟。",
    cons: "有些方案不能通話或收簡訊；品質依供應商",
  },
  {
    id: "local",
    name: "大陸 +86 門號",
    fit: "長住、重度使用在地服務",
    pros: "大幅提升所有 App／生活服務／外送／金融／交通等便利性，「中國移動」最低維護費每月8元，花費最少，即使加上流量包和翻牆，上網成本還是最低廉。能到銀行開戶，開啟完全功能的支付寶和微信。",
    cons: "要花半天特地到營業廳辦理，需另外找翻牆方式。",
  },
];

export const networkConclusion = "若行程長或還會再來，可以考慮養個當地門號。";

export interface PaymentTier {
  id: string;
  tier: string;
  name: string;
  role: string;
  steps: string[];
  variant: string;
}

export const paymentTiers: PaymentTier[] = [
  {
    id: "alipay",
    tier: "第一層 · 主力",
    name: "支付寶",
    role: "日常消費主要工具",
    steps: ["出發前鉅細靡遺在設定每個角落通過所有實名認證與驗證，非常重要且容易忽略！", "綁定海外信用卡", "小額測試一筆"],
    variant: "pay-1",
  },
  {
    id: "weixin",
    tier: "第一層 · 主力",
    name: "微信支付",
    role: "日常消費主要工具",
    steps: ["出發前鉅細靡遺在設定每個角落通過所有實名認證與驗證，非常重要且容易忽略！", "確認小程式可付款"],
    variant: "pay-2",
  },
  {
    id: "backup",
    tier: "第二層 · 實體備援",
    name: "信用卡＋人民幣現金",
    role: "手機沒電、斷網、風控或押金時使用",
    steps: ["備第二張卡", "留少量現金", "抄好飯店地址"],
    variant: "pay-3",
  },
];

export const paymentFailSteps: string[] = [
  "切換另一個支付 App（支付寶 ↔ 微信）",
  "改用另一張不同發卡機構的信用卡",
  "詢問商家可否收現金或刷實體卡",
  "聯絡支付平臺客服或發卡銀行",
];

export const paymentNote = "";

export interface AppItem {
  id: string;
  category: string;
  name: string;
  purpose: string;
  mustInstall: boolean;
  verifyInTaiwan: boolean;
  alt: string;
}

export const appItems: AppItem[] = [
  {
    id: "alipay",
    category: "付款／生活",
    name: "支付寶",
    purpose: "主力支付、內含滴滴等小程式",
    mustInstall: true,
    verifyInTaiwan: true,
    alt: "無 +86 也可綁海外卡消費；轉帳收款功能受限。",
  },
  {
    id: "weixin",
    category: "付款／生活",
    name: "微信",
    purpose: "支付、通訊、小程式生態",
    mustInstall: true,
    verifyInTaiwan: true,
    alt: "部分實名或加好友功能可能需 +86，付款多半可用海外卡。",
  },
  {
    id: "amap",
    category: "地圖／導航",
    name: "高德地圖",
    purpose: "在地導航、大眾運輸與掃街榜",
    mustInstall: true,
    verifyInTaiwan: false,
    alt: "Google Maps 圖資過期且無法精準定位，完全別用。",
  },
  {
    id: "didi",
    category: "叫車",
    name: "滴滴出行",
    purpose: "叫車，支付寶內也有滴滴小程式",
    mustInstall: false,
    verifyInTaiwan: false,
    alt: "可用支付寶／微信小程式叫車，未未必另裝獨立 App。",
  },
  {
    id: "12306",
    category: "高鐵",
    name: "12306",
    purpose: "官方購票，可自動收票（別的平臺買也會顯示在這裡）",
    mustInstall: true,
    verifyInTaiwan: true,
    alt: "購票與進站都需實名，發車前幾分鐘關閘，建議提早一小時到站並走人工通道。",
  },
  {
    id: "trip",
    category: "高鐵／訂房",
    name: "攜程旅行/去哪兒旅行",
    purpose: "購票與訂房介面對新手友善",
    mustInstall: false,
    verifyInTaiwan: true,
    alt: "最大型全方位旅遊平臺，支付方式迅速高效。",
  },
  {
    id: "meituan",
    category: "外送／生活",
    name: "美團",
    purpose: "已覆蓋外賣、共享充電寶、共享單車、共享電瓶車、送貨等關鍵功能",
    mustInstall: true,
    verifyInTaiwan: false,
    alt: "日常生活的全功能神器，強烈建議下載。",
  },
  {
    id: "dianping",
    category: "餐廳／景點",
    name: "大眾點評",
    purpose: "找餐廳、評價與排隊資訊",
    mustInstall: false,
    verifyInTaiwan: false,
    alt: "也可用高德掃街榜找到最新美食商家。",
  },
  {
    id: "xiaohongshu",
    category: "推薦資訊",
    name: "小紅書",
    purpose: "旅遊景點真實評價、避坑指南與打卡攻略",
    mustInstall: false,
    verifyInTaiwan: false,
    alt: "強烈推薦下載，大陸的旅遊搜尋引擎，比任何旅遊書都即時。",
  },
];

export interface RouteCard {
  id: string;
  tag: string;
  name: string;
  days: string;
  desc: string;
  who: string;
  stamina: string;
  transport: string;
}

export const routeCards: RouteCard[] = [
  {
    id: "r1",
    tag: "最穩入門",
    name: "上海＋杭州＋蘇州",
    days: "5–7 天",
    desc: "都市機能成熟、交通方便，第一次去最不容易出錯。",
    who: "怕麻煩、想順利完成第一次",
    stamina: "輕鬆",
    transport: "簡單",
  },
  {
    id: "r2",
    tag: "歷史文化",
    name: "北京 或 西安",
    days: "5–6 天",
    desc: "古都與大型古蹟，適合喜歡歷史與人文的旅人。",
    who: "文化控、愛看古蹟",
    stamina: "中等",
    transport: "中等",
  },
  {
    id: "r3",
    tag: "美食夜景",
    name: "成都＋重慶",
    days: "5–7 天",
    desc: "麻辣美食與立體山城夜景，吃貨與夜遊愛好者首選。",
    who: "美食與夜景愛好者",
    stamina: "中等",
    transport: "中等",
  },
  {
    id: "r4",
    tag: "海濱慢遊",
    name: "青島＋煙臺",
    days: "4–5 天",
    desc: "海濱城市步調較慢，天數短也能玩得舒服。",
    who: "想放鬆、天數不多",
    stamina: "輕鬆",
    transport: "簡單",
  },
  {
    id: "r5",
    tag: "山水放空",
    name: "昆明＋大理＋麗江",
    days: "7–10 天",
    desc: "高原山水與古城慢活，適合天數充裕的深度旅程。",
    who: "想長天數深度遊",
    stamina: "中等",
    transport: "中偏難",
  },
  {
    id: "r6",
    tag: "自然健行",
    name: "張家界／桂林／九寨溝",
    days: "5–8 天",
    desc: "壯麗自然地景，需要較多步行與交通轉乘。",
    who: "體力好、愛大自然",
    stamina: "較高",
    transport: "較難",
  },
];

export interface Pitfall {
  id: string;
  myth: string;
  fix: string;
}

export const pitfalls: Pitfall[] = [
  {
    id: "pf1",
    myth: "還沒辦妥證件就先買不可退票",
    fix: "先確認臺胞證與護照就緒，再下訂不可退的機票或車票。",
  },
  {
    id: "pf3",
    myth: "想說抵達後再安裝、實名與綁卡就好",
    fix: "支付與網路務必在臺灣先設定並小額測試，到當地才弄很容易卡關。",
  },
  {
    id: "pf4",
    myth: "只準備一種支付方式",
    fix: "支付寶＋微信＋一張備援卡＋少量現金，任何一環失效都還走得下去。",
  },
  {
    id: "pf5",
    myth: "把大陸門號當所有短程旅客的必要條件（或完全忽略 OTP）",
    fix: "先確保網路與臺灣門號能收 OTP；長住或特定 App 要求 +86 時再辦。",
  },
  {
    id: "pf6",
    myth: "以為 Google Maps 在那邊很好用",
    fix: "改用高德地圖為主，Google Maps 的資料與定位在中國大陸常不可靠。",
  },
  {
    id: "pf7",
    myth: "低估城市尺度、安檢與轉乘時間",
    fix: "大城市轉乘與步行常超出臺灣直覺，行程別排太密、預留安檢時間。",
  },
  {
    id: "pf8",
    myth: "為免費門票繞遠路，忽略交通與時間成本",
    fix: "把交通費、住宿與時間一起算，優惠不一定真的劃算。",
  },
];

export interface EmergencyBlock {
  id: string;
  icon: string;
  title: string;
  items: string[];
}

export const emergencyBlocks: EmergencyBlock[] = [
  {
    id: "e-power",
    icon: "🔋",
    title: "手機沒電",
    items: ["拿出紙本／離線的地址與訂單", "使用現金與實體卡付款", "隨身充電設備先充飽"],
  },
  {
    id: "e-net",
    icon: "📵",
    title: "沒有網路",
    items: ["連機場／飯店 Wi-Fi", "請同行者開熱點", "使用事先存好的離線截圖"],
  },
  {
    id: "e-pay",
    icon: "💳",
    title: "支付失敗",
    items: ["切換第二個支付 App", "改用第二張信用卡", "改付現金或詢問刷實體卡"],
  },
  {
    id: "e-doc",
    icon: "🪪",
    title: "證件遺失",
    items: [
      "先報警取得證明",
      "聯絡海基會急難服務與當地出入境單位",
      "備份影本與照片另存雲端",
    ],
  },
  {
    id: "e-health",
    icon: "🏥",
    title: "身體不適",
    items: [
      "聯絡保險公司海外急難救助",
      "就近前往醫院或請飯店協助",
      "急救／報警電話上線前以官方資料核實",
    ],
  },
];

export interface CopyItem {
  id: string;
  label: string;
  value: string;
  note?: string;
}

/** 緊急聯絡與常用資訊。上線前務必以官方資料逐一查核。 */
export const emergencyContacts: CopyItem[] = [
  {
    id: "sef",
    label: "海基會 24H 緊急服務專線",
    value: "+886-2-2712-9292",
    note: "臺灣民眾在陸急難協處，撥打前請再次確認號碼。",
  },
  {
    id: "boca",
    label: "外交部旅外國人急難救助（回臺）",
    value: "0800-085-095",
    note: "自國內撥打；海外請依領事事務局公告。",
  },
];

export interface Faq {
  id: string;
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    id: "faq-passport",
    q: "護照可以取代臺胞證入境中國大陸嗎？",
    a: "不行。護照只有出境和入境中華民國海關用到兩次。從落地開始到離境，臺胞證是唯一的合法證件，一定隨時傍身唷！臺胞證請務必提前辦妥。",
  },
  {
    id: "faq-86",
    q: "一定要辦大陸 +86 門號嗎？",
    a: "短程旅遊不一定需要。先確保有可用網路，且臺灣門號能收 OTP 簡訊即可。若行程長或還會再來，可以考慮養個當地門號。",
  },
  {
    id: "faq-cash",
    q: "現金要帶多少？",
    a: "行動支付是絕對主流，原則上能完全不用現金。怕有意外可以實體備援數百人民幣。分享行程給一些熟悉大陸的朋友，讓她們隨時可以匯款到你微信應急。",
  },
  {
    id: "faq-both",
    q: "支付寶和微信兩個都要裝嗎？",
    a: "都要裝。兩者在一些細微之處各有無法取代性，例如地鐵二維碼、共享單車、餐廳掃碼、門票預約...等等。建議出發前在設定裡鉅細靡做好所有認證。",
  },
  {
    id: "faq-hotel",
    q: "飯店怎麼確認可以用臺胞證入住？",
    a: "去年起全國已全面取消涉外飯店資質限制，所有旅宿大體上都能接待所有旅客。極少數旅宿可能實名設備不足或不夠熟悉法規，不用過度擔心身份問題，若有疑慮訂房前簡單確認即可。",
  },
  {
    id: "faq-rail",
    q: "高鐵要用哪個 App 買票？",
    a: "官方是 12306，購票與進站都需臺胞證實名，記得走人工通道。進站和安檢常常會大排長龍，發車前幾分鐘就會關閘門，預留出發前一小時到車站較佳（Kevin大量血淚經驗)。",
  },
  {
    id: "faq-google",
    q: "Google、facebook 和 LINE 在那邊能用嗎？",
    a: "默認無法使用非國內伺服器的所有網路服務，若是用臺灣門號漫遊則不在此限。買旅遊eSIM時，通常也會強調能上外網的功能。",
  },
];

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "basic-info", label: "基本" },
  { id: "checklist", label: "清單" },
  { id: "credentials", label: "證件" },
  { id: "network", label: "網路" },
  { id: "vpn", label: "VPN" },
  { id: "payment", label: "支付" },
  { id: "apps", label: "必備 App" },
  { id: "transport", label: "交通住宿" },
  { id: "routes", label: "去哪裡" },
  { id: "pitfalls", label: "踩雷" },
  { id: "faq", label: "FAQ" },
  { id: "bank", label: "開戶指南" },
];
