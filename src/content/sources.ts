export type SourceType = "official" | "blog" | "video" | "platform";

export interface Source {
  id: string;
  title: string;
  url: string;
  publisher: string;
  sourceType: SourceType;
  /** 最後查核日期（ISO 格式 YYYY-MM-DD） */
  checkedAt: string;
  /** 本來源支援的網站章節 id */
  supportsSections: string[];
  note?: string;
}

/** 全站資料最後查核日（Asia/Taipei）。上線前務必重新查證所有時效資訊。 */
export const LAST_CHECKED = "2026-07-11";
export const SITE_VERSION = "1.0.0";

/**
 * 原始參考來源（部落格與影片）。已刪除。
 */
export const sources: Source[] = [];

/**
 * 官方查核來源清單。
 */
export const officialSources: Source[] = [
  {
    id: "sef",
    title: "財團法人海峽交流基金會（海基會）",
    url: "https://www.sef.org.tw/",
    publisher: "海基會",
    sourceType: "official",
    checkedAt: LAST_CHECKED,
    supportsSections: ["emergency"],
    note: "臺灣民眾在陸急難協處窗口；緊急聯絡資料上線前務必再次查核。",
  },
  {
    id: "boca",
    title: "外交部領事事務局（旅外安全與保險）",
    url: "https://www.boca.gov.tw/",
    publisher: "外交部領事事務局",
    sourceType: "official",
    checkedAt: LAST_CHECKED,
    supportsSections: ["checklist", "emergency"],
    note: "旅外急難與旅平險相關資訊參考。",
  },
  {
    id: "12306",
    title: "中國鐵路 12306（官方購票）",
    url: "https://www.12306.cn/",
    publisher: "中國國家鐵路集團",
    sourceType: "platform",
    checkedAt: LAST_CHECKED,
    supportsSections: ["transport", "apps"],
    note: "高鐵／動車官方購票與實名制規定；票價與購票規則以此為準。",
  },
  {
    id: "alipay-intl",
    title: "支付寶（Alipay）綁定國際卡與使用說明",
    url: "https://render.alipay.com/p/f/fd-j5ptqz25/index.html",
    publisher: "Ant Group / Alipay",
    sourceType: "platform",
    checkedAt: LAST_CHECKED,
    supportsSections: ["payment", "apps"],
    note: "海外卡綁定、手續費、交易上限等時效資訊以官方公告為準。",
  },
  {
    id: "weixin-pay",
    title: "微信支付境外用戶指南",
    url: "https://pay.weixin.qq.com/",
    publisher: "騰訊 / 微信支付",
    sourceType: "platform",
    checkedAt: LAST_CHECKED,
    supportsSections: ["payment", "apps"],
    note: "境外卡綁定與交易規則以官方公告為準。",
  },
];
