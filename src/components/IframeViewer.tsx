"use client";

import { useState, useRef, useEffect } from "react";
import { Monitor, Tablet, Smartphone, RotateCw, ExternalLink, ShieldAlert } from "lucide-react";

interface IframeViewerProps {
  url: string;
  title: string;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export default function IframeViewer({ url, title }: IframeViewerProps) {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [prevUrl, setPrevUrl] = useState(url);

  if (url !== prevUrl) {
    setPrevUrl(url);
    setIsLoading(true);
  }

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getDeviceWidth = () => {
    switch (device) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "max-w-full";
    }
  };

  const getDeviceHeight = () => {
    switch (device) {
      case "mobile":
        return "h-[667px]";
      case "tablet":
        return "h-[1024px]";
      default:
        return "h-[680px]";
    }
  };

  return (
    <div className="w-full">
      {/* Device Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-zinc-900 border-x border-t border-white/10 px-4 py-3 rounded-t-2xl gap-3">
        {/* Mock Window Dots */}
        <div className="hidden md:flex items-center gap-1.5 w-24">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.3)]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.3)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.3)]"></div>
        </div>

        {/* Device Selection Tabs */}
        <div className="flex items-center bg-zinc-950/60 p-1.5 border border-white/5 rounded-full">
          {[
            { id: "desktop", icon: Monitor, label: "Escritorio" },
            { id: "tablet", icon: Tablet, label: "Tablet" },
            { id: "mobile", icon: Smartphone, label: "Móvil" },
          ].map((mode) => {
            const IconComp = mode.icon;
            const isActive = device === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setDevice(mode.id as DeviceMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-helveticaMedium text-xs uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-cabuwebMedium text-white shadow-[0_0_15px_rgba(0,116,255,0.4)]"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                aria-label={`Vista de ${mode.label}`}
              >
                <IconComp className="w-4 h-4" />
                <span className="hidden xs:inline">{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-zinc-400 hover:text-white rounded-xl transition-all"
            title="Refrescar demostración"
          >
            <RotateCw className="w-4 h-4" />
          </button>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-zinc-300 hover:text-white rounded-xl text-xs font-helveticaBold uppercase tracking-wider transition-all"
          >
            <span className="hidden xs:inline">Abrir en Nueva Pestaña</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Frame Container */}
      <div className="w-full bg-zinc-950 border border-white/10 p-4 rounded-b-2xl flex justify-center items-center overflow-hidden min-h-[400px] relative">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-zinc-950 z-20 gap-4">
            <div className="w-10 h-10 border-4 border-cabuwebMedium border-t-transparent rounded-full animate-spin"></div>
            <p className="font-lemonLight text-xs text-zinc-500 tracking-widest uppercase">
              Cargando Vista Previa...
            </p>
          </div>
        )}

        {/* Iframe element */}
        <div
          className={`w-full ${getDeviceWidth()} ${getDeviceHeight()} transition-all duration-500 ease-in-out border border-white/5 rounded-lg shadow-2xl relative bg-white`}
        >
          <iframe
            key={iframeKey}
            ref={iframeRef}
            src={url}
            title={`Demo en vivo de ${title}`}
            className="w-full h-full border-0 rounded-lg"
            onLoad={() => setIsLoading(false)}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>

      {/* Security/Notice alert */}
      <div className="mt-3 flex items-start gap-2.5 text-zinc-500 text-xs px-2 leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
        <p>
          Nota: Algunas funciones externas o integraciones avanzadas de la demo interactiva pueden requerir abrir la demo en una nueva pestaña para su correcto funcionamiento.
        </p>
      </div>
    </div>
  );
}
