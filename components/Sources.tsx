import Image from "next/image";
import SourceCard from "./SourceCard";

export default function Sources({
  sources,
  isLoading,
}: {
  sources: { name: string; url: string }[];
  isLoading: boolean;
}) {
  return (
    <div className="container h-auto w-full shrink-0 rounded-lg border border-solid border-dark-border bg-dark-surface p-5 lg:p-10">
      <div className="flex items-start gap-4 pb-3 lg:pb-3.5">
        <Image
          unoptimized
          src="/img/sources.svg"
          alt="footer"
          width={24}
          height={24}
        />
        <h3 className="text-base font-bold uppercase leading-[152.5%] text-dark-text-primary">
          sources:{" "}
        </h3>
      </div>
      <div className="flex w-full max-w-[890px] flex-wrap content-center items-center gap-[15px]">
        {isLoading ? (
          <>
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-dark-border" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-dark-border" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-dark-border" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-dark-border" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-dark-border" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-dark-border" />
          </>
        ) : sources.length > 0 ? (
          sources.map((source) => (
            <SourceCard source={source} key={source.url} />
          ))
        ) : (
          <div className="text-dark-text-secondary">Could not fetch sources.</div>
        )}
      </div>
    </div>
  );
}
