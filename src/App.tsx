import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BasicInfo from "./components/BasicInfo";
import CountdownChecklist from "./components/CountdownChecklist";
import Credentials from "./components/Credentials";
import DecisionTable from "./components/DecisionTable";
import VpnGuide from "./components/VpnGuide";
import Payment from "./components/Payment";
import BankOpening from "./components/BankOpening";
import AppToolkit from "./components/AppToolkit";
import Transport from "./components/Transport";
import RouteCards from "./components/RouteCards";
import Pitfalls from "./components/Pitfalls";
import Faq from "./components/Faq";
import EmergencyCard from "./components/EmergencyCard";
import Footer from "./components/Footer";
import PrintCard from "./components/PrintCard";
import { LAST_CHECKED } from "./content/sources";
import { faqs } from "./content/guide";

function useStructuredData() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "第一次去大陸旅遊攻略｜臺灣人行前準備一頁搞懂",
          inLanguage: "zh-Hant-TW",
          description:
            "第一次去中國大陸自由行的臺灣人行前懶人包：臺胞證、支付寶、微信、eSIM 網路、住宿確認、高鐵購票與必備 App。",
          dateModified: LAST_CHECKED,
          url: "https://kekukeku.github.io/mainland/",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

export default function App() {
  const [sosOpen, setSosOpen] = useState(false);
  useStructuredData();

  return (
    <>
      <a className="skip-link" href="#checklist">
        跳到行前檢查清單
      </a>
      <Nav />
      <main>
        <Hero onOpenSos={() => setSosOpen(true)} />
        <BasicInfo />
        <CountdownChecklist />
        <Credentials />
        <DecisionTable />
        <VpnGuide />
        <Payment />
        <AppToolkit />
        <Transport />
        <RouteCards />
        <Pitfalls />
        <Faq />
        <BankOpening />
        <EmergencyCard
          drawerOpen={sosOpen}
          onCloseDrawer={() => setSosOpen(false)}
        />
      </main>
      <Footer />
      <PrintCard />

      <button
        type="button"
        className="sos-fab no-print"
        aria-label="開啟 SOS 緊急備援"
        onClick={() => setSosOpen(true)}
      >
        SOS
      </button>
    </>
  );
}
