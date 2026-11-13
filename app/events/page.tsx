"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import clsx from "clsx";

const HERO_IMG = "/images/Conference_TwoInOne_Speaker.png";
const REGISTRATION_IMG = "/images/Conference_TwoInOne_Registration.png";

const SHIRIN_PHONE = "+96898904543";
const SHIRIN_WHATSAPP = "https://wa.me/96898904543";
const BUSINESS_EMAIL = "business@twoinone.llc";

export default function EventsPage() {
  const { lang, isRTL } = useLanguage();
  const t = translations[lang];
  const ar = lang === "ar";

  const processSteps = [
    {
      num: "01",
      title: ar ? "المفهوم والتنسيق" : "Concept & Curation",
      desc: ar
        ? "نحدد أهداف الحدث وجدول الأعمال وقائمة المتحدثين والهوية البصرية، ونصمم تجربة مبنية حول رسالتكم."
        : "We define your objectives, agenda, speaker line-up, and visual identity, designing an experience built around your message.",
    },
    {
      num: "02",
      title: ar ? "الإنتاج والخدمات اللوجستية" : "Production & Logistics",
      desc: ar
        ? "المكان، والمسرح، والصوت والإضاءة، والتسجيل، والضيافة، والسفر؛ يُدار كل تفصيل بدقة وضمن الجدول الزمني."
        : "Venue, staging, AV, registration, hospitality, and travel: every detail managed with precision and on schedule.",
    },
    {
      num: "03",
      title: ar ? "التنفيذ والاستضافة" : "Execution & Hosting",
      desc: ar
        ? "إدارة ميدانية يوم الحدث، وتجربة سلسة للحضور، وتقارير بعد انتهاء الفعالية."
        : "On-site management on the day, a seamless delegate experience, and post-event reporting.",
    },
  ];

  const services = ar
    ? [
        "المؤتمرات",
        "القمم",
        "المعارض",
        "إطلاق المنتجات",
        "حفلات الشركات",
        "ورش العمل",
      ]
    : [
        "Conferences",
        "Summits",
        "Exhibitions",
        "Product Launches",
        "Corporate Galas",
        "Workshops",
      ];

  const productionCapabilities = ar
    ? [
        "تنفيذ وتجهيز الفعاليات",
        "حلول المسارح والهياكل",
        "تنسيق أنظمة الصوت والإضاءة",
        "تصميم وتزيين مواقع الفعاليات",
        "الهوية البصرية والمفهوم الإبداعي للفعالية",
        "تجهيز المعارض والأجنحة",
        "العلامات التجارية والعناصر البصرية",
        "الدعم الشامل للإنتاج والتنفيذ",
      ]
    : [
        "Event Execution & Setup",
        "Stage & Truss Solutions",
        "Sound & Lighting Coordination",
        "Venue Decoration",
        "Event Styling & Creative Concepts",
        "Exhibition & Booth Setup",
        "Branding & Visual Elements",
        "Full Production Support",
      ];

  const partnerServices = ar
    ? [
        "فعاليات الشركات",
        "إطلاق المنتجات",
        "المؤتمرات والمعارض",
        "فعاليات تنشيط العلامات التجارية",
        "تنسيق وتجهيز مواقع الفعاليات",
        "إدارة إنتاج الفعاليات",
      ]
    : [
        "Corporate Events",
        "Product Launches",
        "Conferences & Exhibitions",
        "Brand Activations",
        "Event Styling & Venue Setup",
        "Event Production Management",
      ];

  const buttonClass =
    "inline-flex min-h-[48px] max-w-full items-center justify-center rounded-sm bg-accent px-6 py-3 text-center text-sm font-bold text-background transition-opacity hover:opacity-90";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="flex min-h-screen flex-col bg-background text-foreground"
    >
      {/* 1. HERO */}
      <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-[#06080b] py-16 md:min-h-[600px] md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt={
              ar
                ? "متحدث على منصة المؤتمر"
                : "Conference speaker on stage"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />

          <div
            className={clsx(
              "absolute inset-0 from-[#06080b] via-[#06080b]/80 to-transparent",
              isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"
            )}
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-start gap-3">
              <CalendarDays
                aria-hidden="true"
                className="mt-0.5 h-6 w-6 shrink-0 text-accent"
              />
              <span className="text-sm leading-relaxed text-accent md:text-base">
                {ar
                  ? "المؤتمرات · القمم · فعاليات الشركات"
                  : "Conferences · Summits · Corporate Events"}
              </span>
            </div>

            <h1
              className={clsx(
                "break-words font-serif text-4xl font-bold uppercase text-white sm:text-5xl md:text-7xl lg:text-8xl",
                isRTL
                  ? "font-arabic leading-relaxed"
                  : "leading-[1.05] tracking-tight"
              )}
            >
              {ar ? "تنظيم" : "Event"}
              <br />
              <span className="text-accent">
                {ar ? "الفعاليات" : "Organizing"}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {ar
                ? "نقدّم خدمات احترافية في تنفيذ وتنظيم الفعاليات وإنتاجها الإبداعي، مع الجمع بين الدقة والتميّز البصري والتنسيق المتكامل للفعاليات المؤسسية والخاصة وفعاليات الجهات والمنظمات."
                : "We deliver refined event execution and creative production solutions, combining precision, visual excellence, and seamless coordination across corporate, private, and organization-led events."}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className={buttonClass}>
                {t.common.requestAQuote}
              </Link>

              <a
                href="#business-partner"
                className="inline-flex min-h-[48px] items-center py-3 text-sm font-bold text-accent underline underline-offset-4"
              >
                {ar ? "تعرّف على شريكنا" : "Meet Our Business Partner"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROCESS */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatedSection
            direction="up"
            className="mb-12 text-center md:mb-16"
          >
            <h2
              className={clsx(
                "font-serif text-3xl font-bold md:text-5xl",
                isRTL && "font-arabic"
              )}
            >
              {ar ? "كيف ننفّذ." : "How We Deliver."}
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-accent" />
          </AnimatedSection>

          <StaggerContainer className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
            {processSteps.map((step) => (
              <StaggerItem
                key={step.num}
                direction="up"
                className="min-w-0 rounded-sm border border-line bg-surface p-6 md:p-8"
              >
                <div
                  dir="ltr"
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface-2 font-serif text-xl font-bold text-accent"
                >
                  {step.num}
                </div>

                <h3
                  className={clsx(
                    "mb-4 text-start font-serif text-2xl font-bold",
                    isRTL && "font-arabic"
                  )}
                >
                  {step.title}
                </h3>

                <p className="text-start text-sm leading-relaxed text-muted">
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. PRODUCTION CAPABILITIES */}
      <section className="border-y border-line bg-surface py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection direction="up" className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <Sparkles
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-accent"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {ar ? "خدماتنا" : "Execution & Production"}
                </span>
              </div>

              <h2
                className={clsx(
                  "mb-7 break-words font-serif text-3xl font-bold leading-tight md:text-5xl",
                  isRTL && "font-arabic leading-relaxed"
                )}
              >
                {ar
                  ? "تجارب مصممة بعناية لتترك انطباعًا لا يُنسى."
                  : "Experiences Crafted to Leave an Impression."}
              </h2>

              <p className="text-base leading-relaxed text-muted md:text-lg">
                {ar
                  ? "نتعامل مع كل مشروع بمنهجية تجمع بين الإبداع والدقة التقنية والتنفيذ الاحترافي. نركز على تقديم فعاليات متقنة وتجارب مصممة بعناية، من التخطيط الأولي إلى التنسيق الميداني."
                  : "We approach every project through a considered balance of aesthetic detail, technical integration, and structured execution. From initial planning to on-site coordination, our focus is thoughtful production and carefully managed experiences."}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              {productionCapabilities.map((capability) => (
                <StaggerItem
                  key={capability}
                  direction="up"
                  className="flex min-w-0 items-start gap-3 rounded-sm border border-line bg-background p-5"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  />
                  <span className="text-sm font-semibold leading-relaxed">
                    {capability}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS PARTNER */}
      <section
        id="business-partner"
        className="scroll-mt-28 bg-background py-16 md:py-24"
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <AnimatedSection direction="up" className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <Handshake
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-accent"
                />
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  {ar ? "شريك أعمال" : "Business Partner"}
                </p>
              </div>

              <h2 className="mb-5 break-words font-serif text-3xl font-bold leading-tight md:text-5xl">
                <span dir="ltr" className="inline-block">
                  SMART EDGE EVENT
                </span>
              </h2>

              <h3
                className={clsx(
                  "mb-5 text-lg font-semibold text-accent md:text-xl",
                  isRTL && "font-arabic"
                )}
              >
                {ar
                  ? "تخطيط الفعاليات وإنتاجها وتنفيذها"
                  : "Event Planning, Production & Execution"}
              </h3>

              <p className="mb-6 leading-relaxed text-muted">
                {ar
                  ? "تتعاون تو إن ون مع سمارت إيدج إيفنت كشريك أعمال في تنظيم الفعاليات وإنتاجها. تجمع الشراكة بين التخطيط الإبداعي والتنسيق العملي لتقديم تجربة متكاملة من الفكرة إلى التنفيذ."
                  : "Two in One works with Smart Edge Event as a business partner for event organization and production. The partnership brings together creative planning and practical coordination, supporting each event from concept to execution."}
              </p>

              <p className="mb-8 text-sm leading-relaxed text-muted">
                {ar
                  ? "تتولى تو إن ون إدارة متطلبات الفعالية والتنسيق التجاري والإشراف على المشروع، بينما يدعم الشريك المتخصص أعمال التنظيم والتجهيز والإنتاج."
                  : "Two in One manages the event brief, commercial coordination, and project oversight, while the specialist partner supports event organization, setup, and production."}
              </p>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {partnerServices.map((service) => (
                  <li
                    key={service}
                    className="flex min-w-0 items-start gap-3 rounded-sm border border-line bg-surface p-4"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    />
                    <span className="text-sm leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection
              direction="up"
              className="min-w-0 rounded-sm border border-white/10 bg-[#0a1822] p-6 text-white sm:p-8 md:p-10"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
                {ar ? "تعرّف على مسؤولة الفعاليات" : "Meet Your Event Lead"}
              </p>

              <h3
                className={clsx(
                  "mb-3 font-serif text-3xl font-bold md:text-4xl",
                  isRTL && "font-arabic"
                )}
              >
                {ar ? "شيرين" : "SHIRIN"}
              </h3>

              <p className="mb-6 text-base font-semibold leading-relaxed text-accent">
                {ar
                  ? "مديرة الفعاليات ومسؤولة الإنتاج"
                  : "Event Director & Production Lead"}
              </p>

              <p className="mb-8 leading-relaxed text-white/75">
                {ar
                  ? "تقود شيرين تخطيط الفعاليات وتنفيذها، وتنسّق تفاصيل الإنتاج وتجهيز الموقع والعمل الميداني. يشمل عملها فعاليات الشركات والمؤتمرات والمعارض وإطلاق المنتجات وفعاليات تنشيط العلامات التجارية."
                  : "Shirin leads event planning and execution, coordinating production details, venue setup, and on-site delivery. Her work includes corporate events, conferences, exhibitions, product launches, and brand activations."}
              </p>

              <div className="space-y-5 border-t border-white/15 pt-6">
                <div>
                  <p className="mb-2 text-sm text-white/65">
                    {ar ? "التواصل مع شيرين" : "Contact Shirin"}
                  </p>

                  <a
                    href={`tel:${SHIRIN_PHONE}`}
                    className="inline-block py-1 text-xl font-semibold text-accent hover:underline"
                  >
                    <span dir="ltr" className="inline-block">
                      +968 9890 4543
                    </span>
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-sm text-white/65">
                    {ar ? "استفسارات الأعمال" : "Business Enquiries"}
                  </p>

                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="inline-block max-w-full break-all py-1 text-base text-accent hover:underline"
                  >
                    <span dir="ltr" className="inline-block">
                      {BUSINESS_EMAIL}
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SHIRIN_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  {ar ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:border-accent"
                >
                  {ar ? "أرسل استفسارك" : "Send an Enquiry"}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. REGISTRATION FEATURE */}
      <section className="overflow-hidden bg-surface py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection
              direction="up"
              className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-sm"
            >
              <Image
                src={REGISTRATION_IMG}
                alt={
                  ar
                    ? "تسجيل الحضور في المؤتمر"
                    : "Delegate registration at the conference"
                }
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </AnimatedSection>

            <AnimatedSection direction="up" className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <ClipboardCheck
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-accent"
                />
                <span className="text-sm font-semibold text-accent">
                  {ar ? "تجربة الحضور" : "Delegate Experience"}
                </span>
              </div>

              <h2
                className={clsx(
                  "mb-6 break-words font-serif text-3xl font-bold leading-tight md:text-5xl",
                  isRTL && "font-arabic leading-relaxed"
                )}
              >
                {ar
                  ? "تسجيل سلس من أول لحظة."
                  : "Seamless Registration, From Arrival."}
              </h2>

              <p className="mb-8 leading-relaxed text-muted">
                {ar
                  ? "نُدير تسجيل الحضور واعتماد الشارات واستقبال كبار الشخصيات، ليشعر ضيوفكم بالترحيب والتنظيم من اللحظة الأولى، مع التسجيل المسبق والتسجيل في الموقع ومتابعة بيانات الحضور."
                  : "We manage check-in, badge accreditation, and VIP reception so your guests feel welcomed and organized from the first moment, with pre-registration, on-site check-in, and attendance tracking."}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {services.map((service) => (
                  <span
                    key={service}
                    className="max-w-full rounded-full border border-line bg-surface-2 px-4 py-2 text-xs font-bold leading-relaxed"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 text-center md:px-8">
          <Sparkles
            aria-hidden="true"
            className="mx-auto mb-6 h-8 w-8 text-accent"
          />

          <h2
            className={clsx(
              "mb-6 font-serif text-3xl font-bold md:text-5xl",
              isRTL && "font-arabic"
            )}
          >
            {ar
              ? "لنخطط لفعاليتكم القادمة."
              : "Let's Plan Your Next Event."}
          </h2>

          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-muted">
            {ar
              ? "أخبرونا بأهدافكم وحجم الحضور والموعد المستهدف، لنتحدث عن متطلبات فعاليتكم."
              : "Tell us your objectives, audience size, and target date so we can discuss your event requirements."}
          </p>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/contact" className={buttonClass}>
              {t.common.requestAQuote}
            </Link>

            <a
              href={SHIRIN_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-line px-6 py-3 text-center text-sm font-bold text-accent transition-colors hover:border-accent"
            >
              {ar ? "تواصل مع شيرين" : "Contact Shirin"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
