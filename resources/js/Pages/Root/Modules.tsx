import { List } from "@/Components/root/List";
import { MaxWidthSection } from "@/Components/root/MaxWidthSection";
import i18n from "@/lib/i18next";
import { Head } from "@inertiajs/react";
import { BadgeInfo, BriefcaseBusiness, FileCheck, NotebookPen, PieChart } from "lucide-react";
import { useTranslation } from "react-i18next";
i18n.setDefaultNamespace("home");
const { t } = i18n;
const modules = [
  {
    title: t("modules.items.0.title"),
    description: t("modules.items.0.description"),
    Icon: BadgeInfo,
  },
  {
    title: t("modules.items.1.title"),
    description: t("modules.items.1.description"),
    Icon: NotebookPen,
  },
  {
    title: t("modules.items.2.title"),
    description: t("modules.items.2.description"),
    Icon: BriefcaseBusiness,
  },
  {
    ttitle: t("modules.items.3.title"),
    description: t("modules.items.3.description"),
    Icon: PieChart,
  },
  {
    title: t("modules.items.4.title"),
    description: t("modules.items.4.description"),
    Icon: FileCheck,
  },
];
export default function Page() {
  const { t } = useTranslation("home");
  return (
    <>
      <Head title="Modulos" />
      <MaxWidthSection>
        <div className="cointainer mx-auto max-w-4xl">
          <h2 className="title">{t("modules.title")}</h2>
          <List items={modules} />
        </div>
      </MaxWidthSection>
    </>
  );
}
