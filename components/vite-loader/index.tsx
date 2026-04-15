"use client";
import { useEffect, useRef, useState } from "react";

interface ViteLoaderProps {
  remoteUrl: string;
  module: string;
  basename?: string;
}

export default function ViteLoader({
  remoteUrl,
  module,
  basename,
}: ViteLoaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // 1. Ref check
    if (!ref.current) return;
    const targetDiv = ref.current;
    let unmountFn: (() => void) | null = null;

    const load = async () => {
      try {
        // 2. Load the Remote Module
        /* @ts-ignore */
        const container = await import(/* webpackIgnore: true */ remoteUrl);
        if (container.init) await container.init({ remotes: [] });

        const factory = await container.get(module);
        const Module = factory();

        // 3. Find the 'mount' function
        // We look for 'mount' specifically now, not the default component
        const mount = Module.mount;

        if (!mount) {
          throw new Error(
            `The module '${module}' does not export a 'mount' function.`
          );
        }

        // 4. Mount the app into our div
        console.log("[ViteLoader] Mounting...");
        unmountFn = mount(targetDiv, { basename });
      } catch (err: any) {
        console.error("[ViteLoader] Error:", err);
        setErrorMsg(err.message);
      }
    };

    load();

    // 5. Cleanup when Next.js navigates away
    return () => {
      if (unmountFn) unmountFn();
    };
  }, [remoteUrl, module, basename]);

  if (errorMsg)
    return <div className="text-red-500 border p-4 bg-red-50">{errorMsg}</div>;

  // Render a plain div. The Vite app will inject itself inside here.
  return <div ref={ref} className="w-full h-full" />;
}
