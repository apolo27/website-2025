import useTimer from "../../shared/hooks/useTimer";
import NumberFlow from "@number-flow/react";
import { useTranslations } from "next-intl";
export const Timer = () => {
  const t = useTranslations('timer');
  const { days, hours, minutes, seconds } = useTimer("2025-05-17T07:00:00");
  return (
    <div className="w-fit px-5 py-2 rounded-full bg-black/[0.6] border border-1 border-white/[0.6] flex items-center gap-4  ">
      <p className="text-md md:text-lg bg-clip-text text-transparent bg-gradient-to-t  font-semibold from-[#87e496] via-[#60bee4] via-72% to-[#37afff]">
        {t("title")}
      </p>
      <span className="text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-t  font-semibold from-[#87e496] via-[#60bee4] via-72% to-[#37afff]">
        <NumberFlow value={days} format={{ notation: "compact" }} />d{" "}
        <NumberFlow value={hours} format={{ notation: "compact" }} />h{" "}
        <NumberFlow value={minutes} format={{ notation: "compact" }} />m{" "}
        <NumberFlow value={seconds} format={{ notation: "compact" }} />s
      </span>
    </div>
  );
};
