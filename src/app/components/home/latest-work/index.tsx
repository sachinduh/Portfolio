"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="all-projects" className="scroll-mt-20">
      <div className="bg-softGray py-16 xl:py-28">
        <div className="container">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <div>
              <h2>All Project Archives</h2>
              <p className="text-secondary text-sm md:text-base mt-2">
                Mobile app interfaces, design systems, and university initiatives.
              </p>
            </div>
            <p className="text-xl text-primary font-semibold">( 04 )</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 xl:gap-y-12">
            {workData?.map((value: any, index: number) => {
              const isInternal = value?.slug?.startsWith("/");
              return (
                <div
                  key={index}
                  className="group flex flex-col gap-4 bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={getImgPath(value?.image)}
                      alt={value?.title || "Work project preview"}
                      width={570}
                      height={414}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isInternal ? (
                      <Link
                        href={value?.slug || "#!"}
                        className="absolute inset-0 backdrop-blur-xs bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300"
                      >
                        <span className="flex justify-center items-center p-4 bg-primary text-white rounded-full shadow-lg">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={value?.slug || "#!"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 backdrop-blur-xs bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300"
                      >
                        <span className="flex justify-center items-center p-4 bg-primary text-white rounded-full shadow-lg">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-3">
                      {isInternal ? (
                        <Link href={value?.slug || "#!"}>
                          <h5 className="hover:text-primary transition-colors font-semibold text-lg sm:text-xl">
                            {value?.title}
                          </h5>
                        </Link>
                      ) : (
                        <a
                          href={value?.slug || "#!"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 className="hover:text-primary transition-colors font-semibold text-lg sm:text-xl">
                            {value?.title}
                          </h5>
                        </a>
                      )}
                      <span className="shrink-0 p-1 rounded-full bg-softGray dark:bg-zinc-800 text-secondary group-hover:text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </span>
                    </div>
                    <p className="text-sm text-secondary font-medium">
                      Context: <span className="text-black dark:text-zinc-300">{value?.client}</span>
                    </p>
                    {value?.description && (
                      <p className="text-sm text-secondary line-clamp-2 mt-1">
                        {value.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
