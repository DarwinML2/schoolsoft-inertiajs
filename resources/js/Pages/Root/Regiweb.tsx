import { List } from "@/Components/root/List";
import { MaxWidthSection } from "@/Components/root/MaxWidthSection";
import i18n from "@/lib/i18next";
import { Head } from "@inertiajs/react";
import { CalendarClock, Globe, School, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
i18n.setDefaultNamespace("home");
const { t } = i18n;
const regiweb = [
  {
    title: t("regiweb.items.0.title"),
    description: t("regiweb.items.0.description"),
    Icon: Globe,
  },
  {
    title: t("regiweb.items.1.title"),
    description: t("regiweb.items.1.description"),
    Icon: Users,
  },
  {
    title: t("regiweb.items.2.title"),
    description: t("regiweb.items.2.description"),
    Icon: School,
  },
  {
    title: t("regiweb.items.3.title"),
    description: t("regiweb.items.3.description"),
    Icon: CalendarClock,
  },
];
export default function Page() {
  const { t } = useTranslation("home");
  return (
    <>
      <Head title="Regiweb" />
      <MaxWidthSection>
        <div className="cointainer mx-auto max-w-4xl">
          <h2 className="title">{t("regiweb.title")}</h2>
          <List items={regiweb} />
        </div>
      </MaxWidthSection>
    </>
  );
}
