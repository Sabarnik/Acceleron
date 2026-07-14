import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Cpu, Cloud, ShieldCheck, LineChart, Boxes,
  Blocks, Rocket, Compass, Layers, Code2, Wrench, HeartPulse, ShoppingBag, Truck,
  GraduationCap, Landmark, Banknote, HardHat, Factory, Flame, MapPin, Mail, Phone,
  ChevronDown, Menu, X, Play, Zap, Globe, Users, Award, Briefcase, Database, Palette,
  ArrowDown, Star, TrendingUp, Building2, Lightbulb, Target, Sun, Moon,
} from "lucide-react";

/* ─────────────────── REAL SVG ICONS ─────────────────── */

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function XTwitterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
    </svg>
  );
}

/* ─────────────────── REAL PARTNER / TECH BRAND LOGOS ─────────────────── */

function SAPLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z"/>
    </svg>
  );
}

function SalesforceLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.884-.06-1.305-.165a3.975 3.975 0 01-3.57 2.235 3.96 3.96 0 01-1.83-.45 4.665 4.665 0 01-4.29 2.865 4.65 4.65 0 01-4.29-2.865 3.885 3.885 0 01-1.83.45C.84 18.375 0 16.65 0 14.985c0-1.35.615-2.58 1.665-3.39A4.32 4.32 0 011.5 10.2c0-2.46 2.01-4.47 4.47-4.47 1.29 0 2.46.555 3.27 1.44l.766.245z"/>
    </svg>
  );
}

function ZohoLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.97 7.235h-5.86l-3.205 9.53h5.86zm-8.805 0H6.31L1.03 16.765h5.855zM22.98 4.5H1.02L0 7.235h24z"/>
    </svg>
  );
}

function AWSLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.374 6.18 6.18 0 01-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103a6.395 6.395 0 00-.862.279 2.298 2.298 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.588 4.588 0 011.015-.36 4.89 4.89 0 011.22-.152c.94 0 1.628.213 2.06.639.43.424.647 1.069.647 1.936v2.55zM4.1 11.36c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.34 .862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311l-1.876-6.17a1.34 1.34 0 01-.072-.383c0-.152.08-.24.24-.24h.79c.152 0 .255.024.311.08.064.048.112.16.16.311l1.342 5.284 1.245-5.284c.04-.16.088-.263.152-.311a.556.556 0 01.32-.08h.646c.152 0 .256.024.32.08.063.048.12.16.151.311l1.261 5.348 1.381-5.348c.048-.16.104-.263.16-.311a.516.516 0 01.311-.08h.75c.16 0 .248.08.248.24 0 .048-.008.096-.016.152a1.372 1.372 0 01-.064.24l-1.924 6.17c-.048.16-.104.263-.168.311a.498.498 0 01-.303.08h-.694c-.152 0-.255-.024-.32-.08-.063-.056-.12-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.168-.088.272-.152.328-.063.048-.175.072-.32.072zm10.14.216c-.415 0-.83-.048-1.229-.152-.399-.096-.71-.2-.919-.312-.128-.064-.215-.136-.247-.2a.498.498 0 01-.048-.2v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.27.12.567.215.878.279.319.064.63.096.95.096.503 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.152-.415-.288-.807-.408l-1.157-.36c-.583-.183-1.015-.455-1.277-.815a1.9 1.9 0 01-.391-1.141c0-.328.072-.62.215-.878.144-.26.335-.487.575-.663.24-.184.519-.32.838-.416a3.527 3.527 0 011.005-.143c.176 0 .36.008.543.032.191.024.367.056.543.096.168.048.328.096.48.152.15.056.27.112.35.168.12.064.207.128.255.2a.44.44 0 01.064.24v.375c0 .168-.064.256-.183.256a.831.831 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.072-1.062.223-.247.152-.375.383-.375.694 0 .224.08.416.247.576.168.16.479.32.927.448l1.133.36c.574.183.99.44 1.237.767.248.327.367.702.367 1.117 0 .335-.072.64-.207.903-.144.264-.335.495-.583.687-.248.2-.543.344-.886.44-.36.104-.735.152-1.142.152zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.224-.024-.527.272-.352 3.384 1.963 7.559 3.153 11.878 3.153 2.914 0 6.114-.607 9.06-1.852.44-.2.814.288.382.608zM22.792 14.96c-.336-.431-2.226-.207-3.08-.104-.255.032-.295-.192-.063-.36 1.508-1.06 3.982-.753 4.27-.399.287.36-.08 2.826-1.492 4.007-.215.183-.423.088-.327-.152.319-.79 1.03-2.562.692-2.992z"/>
    </svg>
  );
}

function MicrosoftLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623" />
    </svg>
  );
}

function DockerLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.72 3.13 1.132 5.332 1.132.904 0 1.82-.081 2.72-.247 1.266-.234 2.493-.68 3.63-1.318a11.277 11.277 0 002.685-2.177l.004-.003c.783-.926 1.262-1.867 1.633-2.732.015-.031.03-.063.05-.095H22a4.78 4.78 0 001.763-.286z"/>
    </svg>
  );
}

function KubernetesLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.004.005a.44.44 0 01.484.606zm3.59-1.087l.007-.01a.462.462 0 01.651.163l1.878 1.612a5.173 5.173 0 01-2.813 1.46l.276-3.225zm-1.164-1.898a.454.454 0 01.09-.702l2.154-1.47a5.177 5.177 0 01.863 3.119l-3.107-.947zM9.68 9.178l2.153 1.47a.454.454 0 01.09.702l-3.107.946a5.188 5.188 0 01.864-3.119zM12 2.002a9.998 9.998 0 100 19.996 9.998 9.998 0 000-19.996zm4.386 14.666a.462.462 0 01-.601.22l-.003-.003a.463.463 0 01-.238-.549l.587-1.42a6.177 6.177 0 01-3.5 2.038l-.294 1.508a.46.46 0 01-.901-.002l-.294-1.508a6.142 6.142 0 01-3.501-2.038l.587 1.42a.463.463 0 01-.241.552.461.461 0 01-.601-.22L5.88 13.36a.458.458 0 01.127-.6l.003-.002a.462.462 0 01.593.048l1.165 1.001A6.18 6.18 0 017.12 11.1l-1.408.35a.463.463 0 01-.548-.436.46.46 0 01.273-.467L8.28 9.54a.455.455 0 01.586.175l.001.001a.454.454 0 01-.037.587l-.947 1.038a6.155 6.155 0 012.236-1.864l-.65-1.262a.463.463 0 01.662-.597.46.46 0 01.206.282L11.15 9.4A6.101 6.101 0 0112 9.326c.29 0 .575.025.854.074l.813-1.5a.46.46 0 01.867.315l-.65 1.262a6.17 6.17 0 012.236 1.864l-.947-1.038a.454.454 0 01-.036-.587l.001-.001a.455.455 0 01.586-.175l2.844 1.007a.46.46 0 01.274.467.463.463 0 01-.548.435l-1.408-.35a6.2 6.2 0 01-.649 2.708l1.165-1.002a.462.462 0 01.593-.047l.003.002a.458.458 0 01.126.6l-1.505 3.307z"/>
    </svg>
  );
}

function PythonLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.35.12-.33.18-.3.25-.27.32-.23.37-.2.42-.15.46-.12.49-.07.52-.04.53-.01.54.02.55.06.55.1.55.14.54.17.52.21.5.24.47.28.43.3.39.33.35.35.3.37.26.37.21.38.17.37.12.36.07.35.03.32v.01L14.25.18zM9.67 5.17a.86.86 0 10-.862.86.862.862 0 00.862-.86z"/>
      <path d="M20.83 15.5l-.21.03-.28.07-.32.12-.35.18-.36.26-.36.36-.35.46-.32.59-.28.73-.21.88-.14 1.05-.05 1.23.06 1.22.16 1.04.24.87.32.71.36.57.4.44.42.33.42.24.4.16.36.1.32.05.24.01h.16l.06-.01h-8.16v.83h6.34l.01 2.75.02.37-.05.35-.12.33-.18.3-.25.27-.32.23-.37.2-.42.15-.46.12-.49.07-.52.04-.53.01-.54-.02-.55-.06-.55-.1-.55-.14-.54-.17-.52-.21-.5-.24-.47-.28-.43-.3-.39-.33-.35-.35-.3-.37-.26-.37-.21-.38-.17-.37-.12-.36-.07-.35-.03-.32v-.01l-.01-.24.01-.21.02-.2.04-.26.1-.3.16-.33.25-.34.34-.34.45-.32.59-.3.73-.26.9-.2 1.08-.13 1.26-.04 1.27.06 1.08.17zM14.33 18.83a.86.86 0 10.862-.86.862.862 0 00-.862.86z"/>
    </svg>
  );
}

function NodejsLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.28.28 0 00-.137-.242L11.998 1.6a.274.274 0 00-.27 0L2.933 6.68a.282.282 0 00-.14.243v10.15a.27.27 0 00.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675A1.857 1.857 0 011.357 17.07V6.921c0-.681.363-1.317.953-1.658L11.106.187a1.93 1.93 0 011.846 0l8.794 5.076c.585.34.952.977.952 1.658v10.15c0 .68-.367 1.316-.952 1.655l-8.794 5.076a1.905 1.905 0 01-.954.198z"/>
    </svg>
  );
}

function ReactLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.838.182l-.017.01C4.895 2.14 4.407 3.18 4.407 4.676c0 1.798.783 4.01 2.1 6.32C3.54 12.72 2.057 14.926 2.057 16.76c0 1.77.977 2.812 2.204 3.1l.046.011a3.94 3.94 0 00.65.053c1.348 0 3.11-.958 4.893-2.617 1.783 1.655 3.543 2.6 4.886 2.6.332 0 .635-.073.895-.208 1.345-.617 1.808-2.3 1.305-4.622 2.18-1.404 3.607-3.163 3.607-5.074 0-1.77-.978-2.812-2.205-3.1-.215-.063-.44-.096-.673-.096zm-.41 1.27c.602 0 1.08.242 1.314.701.337.654.247 1.65-.247 2.843-.503-.648-1.095-1.313-1.773-1.968a16.95 16.95 0 00-.753-.64c.484-.477.931-.827 1.297-.955a.65.65 0 01.163-.02l-.001.038zM12 15.947c-.837-.84-1.678-1.784-2.478-2.804a27.13 27.13 0 01-.87-1.244A27.037 27.037 0 0112 8.054c.87 1.177 1.707 2.377 2.478 3.608a28.455 28.455 0 01-.14.19c-.781.993-1.612 1.964-2.339 2.846l.001.248zM8.38 5.58a16.73 16.73 0 011.846-1.767 27.78 27.78 0 01.752.637c-.68.66-1.275 1.328-1.782 1.98-.498-1.197-.589-2.196-.25-2.85.109-.21.29-.362.52-.413a.654.654 0 01.13-.013c.34 0 .787.216 1.277.55-.462.303-.92.66-1.375 1.068a17.303 17.303 0 00-1.119.808zm-2.97 6.65c.538-.67 1.174-1.372 1.892-2.082-.36 1.068-.56 2.09-.56 3.023 0 .69.102 1.37.3 2.02a14.756 14.756 0 01-1.633-2.96zm.76 5.68c-.372 0-.68-.072-.923-.215-.339-.2-.57-.542-.666-1.013-.148-.715.032-1.648.508-2.714a17.1 17.1 0 001.73 2.16c.29.284.584.553.878.808-.522.41-.998.723-1.419.892a.657.657 0 01-.108.082zM12 18.93c-.455-.453-.912-.94-1.36-1.456a28.452 28.452 0 01-.492-.609c.618.058 1.233.09 1.852.09.617 0 1.232-.033 1.848-.09a23.28 23.28 0 01-.488.608c-.45.517-.908 1.004-1.36 1.457z"/>
    </svg>
  );
}

function NextjsLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.572 0c-.176.001-.349.004-.527.01C4.917.213.091 5.118.003 11.248c-.09 6.237 4.827 11.397 11.016 11.747l.005.001a10.06 10.06 0 001.06-.006c.19-.01.378-.025.566-.046 5.91-.633 10.426-5.625 10.346-11.66C22.916 5.062 17.838.04 11.572 0zm.034 1.983c5.37.056 9.716 4.463 9.716 9.898 0 5.166-3.904 9.433-8.923 9.945l-.012.001V13.67l6.26 8.157-.006-.004c-.198.12-.404.23-.617.328l-5.637-7.35v8.967c-.256.016-.516.022-.775.022a9.922 9.922 0 01-5.696-1.784l.014.01L12.527 13.8V3.57c-.173-.01-.347-.014-.523-.014-.084 0-.168.001-.251.004l-.012-.001V12.5L5.993 3.953a9.905 9.905 0 015.613-1.97z"/>
    </svg>
  );
}

function OpenAILogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.67.333a6.047 6.047 0 00-5.776 4.218 6.044 6.044 0 00-4.04 2.933 6.065 6.065 0 00.742 7.105 5.985 5.985 0 00.517 4.911 6.046 6.046 0 006.51 2.9A6.07 6.07 0 0013.207 24a6.047 6.047 0 005.776-4.218 6.044 6.044 0 004.04-2.933 6.065 6.065 0 00-.741-7.028zM13.207 22.92a4.486 4.486 0 01-2.882-1.049l.143-.082 4.79-2.767a.778.778 0 00.392-.68v-6.747l2.025 1.168a.072.072 0 01.04.055v5.588a4.516 4.516 0 01-4.508 4.514zm-9.696-4.14a4.488 4.488 0 01-.537-3.016l.143.085 4.79 2.767a.778.778 0 00.785 0l5.847-3.375v2.337a.071.071 0 01-.028.061l-4.842 2.796a4.509 4.509 0 01-6.158-1.655zm-1.263-10.48A4.5 4.5 0 014.604 5.97l-.003.16v5.534a.776.776 0 00.391.676l5.846 3.374-2.024 1.168a.072.072 0 01-.068.005l-4.842-2.795a4.513 4.513 0 01-1.655-6.162zm16.676 3.88L14.077 8.8l2.025-1.169a.072.072 0 01.068-.005l4.842 2.796a4.505 4.505 0 01-.695 8.13v-5.694a.778.778 0 00-.393-.68zm2.015-3.028l-.143-.085-4.79-2.768a.778.778 0 00-.785 0L9.373 9.673V7.336a.072.072 0 01.028-.06l4.842-2.797a4.508 4.508 0 016.696 4.674zm-12.67 4.168l-2.024-1.168a.072.072 0 01-.04-.055V6.508a4.507 4.507 0 017.392-3.466l-.143.082-4.79 2.767a.778.778 0 00-.392.68zm1.1-2.369l2.603-1.503 2.604 1.503v3.005l-2.604 1.503-2.603-1.503z"/>
    </svg>
  );
}

function SnowflakeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 3.459c0 .646-.418 1.18-1.141 1.18-.723 0-1.142-.534-1.142-1.18 0-.647.419-1.18 1.142-1.18.723 0 1.141.533 1.141 1.18zm-.228 0c0-.533-.38-.951-.913-.951s-.913.38-.913.95c0 .533.38.952.913.952.57 0 .913-.419.913-.951zm-1.37-.533h.495c.266 0 .456.152.456.38 0 .153-.076.229-.19.305l.19.266v.038h-.266l-.19-.266h-.229v.266h-.266zm.495.228h-.229v.267h.229c.114 0 .152-.038.152-.114.038-.077-.038-.153-.152-.153zM7.602 12.4c.038-.151.076-.304.076-.456 0-.114-.038-.228-.038-.342-.114-.343-.304-.647-.646-.838l-4.87-2.777c-.685-.38-1.56-.152-1.94.533-.381.685-.153 1.56.532 1.94l2.701 1.56-2.701 1.56c-.685.38-.913 1.256-.533 1.94.38.685 1.256.914 1.94.533l4.832-2.777c.343-.267.571-.533.647-.876zm1.332 2.626c-.266-.038-.57.038-.837.19l-4.832 2.777c-.685.38-.913 1.256-.532 1.94.38.686 1.255.914 1.94.533l2.701-1.56v3.12c0 .8.647 1.408 1.446 1.408.799 0 1.407-.647 1.407-1.408v-5.592c0-.761-.57-1.37-1.293-1.408zm4.946-6.088c.266.038.57-.038.837-.19l4.832-2.777c.685-.38.913-1.256.532-1.94-.38-.686-1.255-.914-1.94-.533l-2.701 1.56V1.975c0-.799-.647-1.408-1.446-1.408-.799 0-1.446.609-1.446 1.408V7.53c0 .76.609 1.37 1.332 1.407zM3.265 5.97l4.832 2.777c.266.152.533.19.837.19.723-.038 1.331-.684 1.331-1.407V1.975c0-.799-.646-1.408-1.407-1.408-.799 0-1.446.647-1.446 1.408v3.12l-2.701-1.56c-.685-.38-1.56-.152-1.94.533-.419.646-.19 1.521.494 1.902zm9.093 6.011a.412.412 0 00-.114-.266l-.57-.571a.346.346 0 00-.267-.114.412.412 0 00-.266.114l-.571.57a.411.411 0 00-.114.267c0 .076.038.19.114.267l.57.57a.345.345 0 00.267.114c.076 0 .19-.038.266-.114l.571-.57a.412.412 0 00.114-.267zm1.598.533L11.94 14.53c-.039.038-.153.114-.229.114h-.608a.411.411 0 01-.267-.114L8.82 12.514a.408.408 0 01-.076-.229v-.608c0-.076.038-.19.114-.267l2.016-2.016a.41.41 0 01.267-.114h.608a.41.41 0 01.267.114l2.016 2.016a.347.347 0 01.114.267v.608c-.076.077-.114.19-.19.229zm5.593 5.44l-4.832-2.777c-.266-.152-.57-.19-.837-.152-.723.038-1.332.684-1.332 1.408v5.554c0 .8.647 1.408 1.408 1.408.799 0 1.446-.647 1.446-1.408v-3.12l2.7 1.56c.686.38 1.561.152 1.941-.533.419-.646.19-1.521-.494-1.94zm2.549-7.533l-2.701 1.56 2.7 1.56c.686.38.914 1.256.533 1.94-.38.685-1.255.913-1.94.533l-4.832-2.778a1.644 1.644 0 01-.647-.798c-.037-.153-.076-.305-.076-.457 0-.114.039-.228.039-.342.114-.343.342-.647.646-.837l4.832-2.778c.685-.38 1.56-.152 1.94.533.457.609.19 1.484-.494 1.864"/>
    </svg>
  );
}

function FlutterLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.314 0L2.3 12 6.13 15.83 22.15 0H14.31zm0 11.16L7.97 17.5l6.345 6.345H22.15l-6.34-6.35 6.34-6.34z"/>
    </svg>
  );
}

function PowerBILogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9.3 2a1.2 1.2 0 00-1.2 1.2v17.6a1.2 1.2 0 002.4 0V3.2A1.2 1.2 0 009.3 2zm4.8 3.6a1.2 1.2 0 00-1.2 1.2v14a1.2 1.2 0 002.4 0V6.8a1.2 1.2 0 00-1.2-1.2zm-9.6 3.6a1.2 1.2 0 00-1.2 1.2v10.4a1.2 1.2 0 002.4 0V10.4a1.2 1.2 0 00-1.2-1.2zm14.4 3.6a1.2 1.2 0 00-1.2 1.2v6.8a1.2 1.2 0 002.4 0v-6.8a1.2 1.2 0 00-1.2-1.2z"/>
    </svg>
  );
}

function DatabricksLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-11.05-5.6v-2.878zm0-4.15L12 16.254l11.05-6.22v2.21L12 18.463.95 12.244v-2.21zm11.05-8.63L23.05 7.6 12 13.818.95 7.6 12 1.404z"/>
    </svg>
  );
}


/* ─────────────────── THEME TOGGLE ─────────────────── */

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-muted/10 text-foreground transition-all hover:bg-muted/20 hover:scale-105"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}


export const Route = createFileRoute("/")(
{
  head: () => ({
    meta: [
      { title: "Acceleron Solutions — Engineering Digital Excellence" },
      { name: "description", content: "Enterprise transformation through SAP, Salesforce, AI, and intelligent digital platforms. Built for scale. Designed for humans." },
    ],
  }),
  component: Home,
});

/* ═══════════════════ SHARED PRIMITIVES ═══════════════════ */

function useMouseParallax(strength = 20) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * strength;
      const ny = (e.clientY / window.innerHeight - 0.5) * strength;
      x.set(nx); y.set(ny);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [strength, x, y]);
  return { x: sx, y: sy };
}

/* enhanced Reveal with direction variants */
function Reveal({ children, delay = 0, y = 30, x = 0, scale = 1, className = "" }: { children: ReactNode; delay?: number; y?: number; x?: number; scale?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CharReveal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((c, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: "0.6em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + (wi * 5 + i) * 0.025, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {c}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
  );
}

function InitialLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2200);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-muted"
    >
      <motion.div
        animate={{ scale: [0.95, 1, 0.95], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <img src="/logo.png" alt="Acceleron Solutions" className="h-16 md:h-24 object-contain drop-shadow-xl dark:brightness-0 dark:invert" />
      </motion.div>
    </motion.div>
  );
}

function MagneticButton({
  children, variant = "primary", href = "#", className = "",
}: { children: ReactNode; variant?: "primary" | "ghost"; href?: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const base = "group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-red-gradient text-[#FFFFFF] shadow-red-glow hover:shadow-[0_28px_100px_-18px_rgba(222,30,36,0.75)] hover:scale-[1.02]"
    : "border border-border text-foreground hover:bg-muted/10 backdrop-blur hover:border-border";

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`${base} ${styles} ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.a>
  );
}

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ─────── wave section divider ─────── */

function WaveDivider({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  const fromColor = from === "dark" ? "#212f60" : "#F5F7FB";
  const toColor = to === "dark" ? "#212f60" : to === "white" ? "#ffffff" : "#F5F7FB";
  return (
    <div className="relative h-20 -mt-px" style={{ background: fromColor, transform: flip ? "scaleY(-1)" : undefined }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill={toColor} />
      </svg>
    </div>
  );
}


/* ═══════════════════ NAVIGATION ═══════════════════ */

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products", dropdown: true },
  { label: "Industries", href: "#industries" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

type ProductItem = { name: string; desc: string; img?: string; icon: any; gradient: string };

const PRODUCTS: ProductItem[] = [
  { name: "Vanijya", desc: "Enterprise Ecommerce Platform", img: "/vanijya.png", icon: ShoppingBag, gradient: "from-blue-500 to-indigo-600" },
  { name: "FSM", desc: "Field Service Management", img: "/IFSM.png", icon: Wrench, gradient: "from-cyan-500 to-blue-600" },
  { name: "LMS", desc: "Lead Management System", img: "/LMS.png", icon: TrendingUp, gradient: "from-violet-500 to-purple-600" },
  { name: "WOMS", desc: "Work Order Management System", img: "/woms.png", icon: Boxes, gradient: "from-indigo-500 to-blue-600" },
  { name: "Suraksha", desc: "Field Safety Platform", img: "/suraksha.png", icon: ShieldCheck, gradient: "from-teal-500 to-cyan-600" },
  { name: "QMS", desc: "Workshop Management System", img: "/qms.png", icon: Layers, gradient: "from-fuchsia-500 to-violet-600" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <motion.header
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center text-foreground">
          <img src="/logo.png" alt="Acceleron Solutions" className="h-8 object-contain dark:brightness-0 dark:invert opacity-95 transition-opacity hover:opacity-100" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <div key={l.label}
              className="relative"
              onMouseEnter={() => l.dropdown && setShowProducts(true)}
              onMouseLeave={() => l.dropdown && setShowProducts(false)}
            >
              <a href={l.href} className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground hover:bg-muted/[0.06]">
                {l.label}
                {l.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
              <AnimatePresence>
                {l.dropdown && showProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-glow">
                      <div className="grid grid-cols-2 gap-2">
                        {PRODUCTS.map((p) => (
                          <a key={p.name} href="#products" className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/40 dark:hover:bg-muted/10">
                            <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${p.gradient} overflow-hidden p-1`}>
                              {p.img ? <img src={p.img} alt={p.name} className="h-full w-full object-contain drop-shadow-md" /> : <p.icon className="h-5 w-5 text-white" />}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                                {p.name}
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                              </div>
                              <div className="truncate text-xs text-foreground/60">{p.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-105 hover:shadow-soft">
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-dark border-t border-border mt-3"
          >
            <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5">
                  {l.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
                  Get in touch <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ═══════════════════ HERO ═══════════════════ */

type Slide = {
  eyebrow: string;
  title: string;
  accent: string;
  sub: string;
  gradient: string;
  Visual: () => ReactNode;
};

function SlideSAP() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,oklch(0.62_0.22_260/0.55),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,oklch(0.62_0.22_300/0.4),transparent_65%)]" />
      <motion.div
        animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-10%] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full border border-foreground/10"
      >
        <div className="absolute inset-14 rounded-full border border-foreground/10" />
        <div className="absolute inset-28 rounded-full border border-foreground/10" />
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_30px_var(--cyan-brand)]" />
        <div className="absolute bottom-8 right-8 h-2.5 w-2.5 rounded-full bg-electric shadow-[0_0_30px_var(--electric)]" />
      </motion.div>
    </div>
  );
}
function SlideSalesforce() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,oklch(0.82_0.14_210/0.4),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_80%_30%,oklch(0.62_0.22_260/0.35),transparent_65%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.82 0.14 210)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.82 0.14 210)" stopOpacity="0.9" />
            <stop offset="1" stopColor="oklch(0.82 0.14 210)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M 0 ${300 + i * 80} Q 400 ${200 + i * 60} 800 ${300 + i * 80} T 1600 ${300 + i * 80}`}
            fill="none" stroke="url(#wave)" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>
    </div>
  );
}
function SlideAI() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,oklch(0.62_0.22_300/0.5),transparent_70%)]" />
      <div className="absolute inset-0 grid-lines opacity-30" />
      {[...Array(24)].map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const r = 240 + (i % 3) * 60;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_var(--cyan-brand)]"
            style={{ x: Math.cos(angle) * r - 3, y: Math.sin(angle) * r - 3 }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, delay: i * 0.08, repeat: Infinity }}
          />
        );
      })}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient blur-2xl opacity-60"
      />
    </div>
  );
}
function SlideZoho() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_60%_60%,oklch(0.7_0.2_25/0.35),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_30%,oklch(0.62_0.22_260/0.35),transparent_65%)]" />
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 grid grid-cols-4 gap-3" style={{ perspective: 1000 }}>
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateY: -60 }} animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: i * 0.04, duration: 0.8 }}
            className="h-14 w-14 rounded-xl border border-border bg-muted/[0.03] backdrop-blur-sm"
            style={{
              background: i % 3 === 0 ? "linear-gradient(135deg,oklch(0.62 0.22 260/0.5),transparent)"
                : i % 3 === 1 ? "linear-gradient(135deg,oklch(0.82 0.14 210/0.5),transparent)"
                : "linear-gradient(135deg,oklch(0.7 0.2 25/0.45),transparent)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const SLIDES: Slide[] = [
  {
    eyebrow: "Chapter 01 · Enterprise Core",
    title: "Engineering",
    accent: "Digital Excellence.",
    sub: "SAP S/4HANA, BTP and RISE — the intelligent enterprise, delivered.",
    gradient: "from-[oklch(0.14_0.06_265)] to-[oklch(0.2_0.09_265)]",
    Visual: SlideSAP,
  },
  {
    eyebrow: "Chapter 02 · Customer 360",
    title: "Salesforce, ",
    accent: "reimagined.",
    sub: "Sales, Service, Marketing and Data Cloud — CRM engineered around your customer.",
    gradient: "from-[oklch(0.16_0.07_250)] to-[oklch(0.22_0.09_255)]",
    Visual: SlideSalesforce,
  },
  {
    eyebrow: "Chapter 03 · Applied AI",
    title: "Intelligence, ",
    accent: "operationalized.",
    sub: "Generative agents, predictive systems and RAG pipelines — in production.",
    gradient: "from-[oklch(0.14_0.07_275)] to-[oklch(0.2_0.09_280)]",
    Visual: SlideAI,
  },
  {
    eyebrow: "Chapter 04 · Zoho Premium Partner",
    title: "Business apps, ",
    accent: "in weeks.",
    sub: "Zoho One, CRM, Creator and Analytics — deployed and adopted, end to end.",
    gradient: "from-[oklch(0.16_0.07_20)] to-[oklch(0.2_0.09_265)]",
    Visual: SlideZoho,
  },
];

type ConsoleData = {
  brand: string;
  app: string;
  nav: string[];
  region: string;
  metrics: { label: string; v: string; d: string }[];
  chartLabel: string;
  slaLabel: string;
  slaRows: { label: string; value: number }[];
  eventsLabel: string;
  events: string[];
  floater: { label: string; value: string };
  badge: { icon: typeof Sparkles; kicker: string; text: string };
};

const CONSOLES: ConsoleData[] = [
  {
    brand: "SAP S/4HANA",
    app: "acceleron · s/4 cockpit",
    nav: ["Finance", "Supply Chain", "Manufacturing", "BTP Apps", "RISE"],
    region: "eu-central-1",
    metrics: [
      { label: "S/4HANA modules live", v: "42", d: "+6 this quarter" },
      { label: "Automation coverage", v: "87%", d: "of finance workflows" },
      { label: "Data latency", v: "180ms", d: "P95, cross-region" },
    ],
    chartLabel: "Order-to-cash · 24h",
    slaLabel: "Module health",
    slaRows: [
      { label: "FI", value: 96 },
      { label: "CO", value: 88 },
      { label: "MM", value: 82 },
      { label: "SD", value: 74 },
    ],
    eventsLabel: "Fiori events",
    events: ["Close · month-end run OK", "IDoc · vendor sync 4,208", "BTP · CAP service deployed"],
    floater: { label: "Uptime", value: "99.98%" },
    badge: { icon: Cpu, kicker: "SAP Gold Partner", text: "Certified since 2016" },
  },
  {
    brand: "Salesforce",
    app: "acceleron · crm ops",
    nav: ["Sales Cloud", "Service Cloud", "Marketing", "Data Cloud", "Einstein"],
    region: "us-east-1",
    metrics: [
      { label: "Pipeline generated", v: "$48M", d: "trailing 90 days" },
      { label: "Case resolution", v: "3.2×", d: "faster with Einstein" },
      { label: "Unified profiles", v: "12.4M", d: "in Data Cloud" },
    ],
    chartLabel: "Opportunities · 24h",
    slaLabel: "Case SLA by queue",
    slaRows: [
      { label: "Tier 1", value: 94 },
      { label: "Tier 2", value: 81 },
      { label: "Field", value: 76 },
      { label: "VIP", value: 98 },
    ],
    eventsLabel: "Flow events",
    events: ["Einstein · lead scored ×214", "Flow · opp stage → Closed Won", "Data Cloud · segment refreshed"],
    floater: { label: "NPS", value: "72" },
    badge: { icon: Cloud, kicker: "Salesforce Consulting", text: "Summit Partner" },
  },
  {
    brand: "Applied AI",
    app: "acceleron · ai agents",
    nav: ["Agents", "RAG", "Evals", "Guardrails", "Cost"],
    region: "multi-region",
    metrics: [
      { label: "Agent invocations", v: "2.1M", d: "per day, in prod" },
      { label: "RAG accuracy", v: "94.7%", d: "on eval golden set" },
      { label: "Cost / 1k queries", v: "$0.08", d: "after routing" },
    ],
    chartLabel: "Tokens · 24h",
    slaLabel: "Model routing mix",
    slaRows: [
      { label: "Fast", value: 62 },
      { label: "Balanced", value: 24 },
      { label: "Deep", value: 14 },
      { label: "Local", value: 8 },
    ],
    eventsLabel: "Agent events",
    events: ["Agent · ticket triage resolved", "Retrieval · index rebuilt", "Guardrail · PII block ×3"],
    floater: { label: "Latency P95", value: "620ms" },
    badge: { icon: Sparkles, kicker: "AI Copilot", text: "3 suggestions" },
  },
  {
    brand: "Zoho One",
    app: "acceleron · zoho workspace",
    nav: ["CRM", "Creator", "Analytics", "Books", "Desk"],
    region: "in-south-1",
    metrics: [
      { label: "Zoho apps deployed", v: "23", d: "across 5 BUs" },
      { label: "Time to value", v: "6 wks", d: "average go-live" },
      { label: "User adoption", v: "96%", d: "MAU / licensed" },
    ],
    chartLabel: "App usage · 24h",
    slaLabel: "Adoption by app",
    slaRows: [
      { label: "CRM", value: 98 },
      { label: "Desk", value: 87 },
      { label: "Creator", value: 74 },
      { label: "Books", value: 91 },
    ],
    eventsLabel: "Workspace events",
    events: ["Creator · app published v1.4", "CRM · 128 new leads scored", "Desk · SLA breach avoided"],
    floater: { label: "Zoho apps", value: "45+" },
    badge: { icon: Award, kicker: "Zoho Premium Partner", text: "Advanced tier · 2025" },
  },
];

function HeroDashboard({ slideIndex, tone }: { slideIndex: number; tone: string }) {
  const c = CONSOLES[slideIndex];
  const BadgeIcon = c.badge.icon;
  return (
    <div className="relative h-[520px] w-full" style={{ perspective: 1600 }}>
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{ background: `radial-gradient(ellipse 70% 70% at 60% 40%, ${tone}66, transparent 65%)` }} />
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, y: 32, rotateY: 14, rotateX: -6 }}
          animate={{ opacity: 1, y: 0, rotateY: -6, rotateX: -2 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rounded-3xl border border-border bg-muted/[0.04] backdrop-blur-2xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="absolute inset-0 opacity-40"
              style={{ background: `radial-gradient(ellipse at 20% 0%, ${tone}55, transparent 55%)` }} />
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/55">{c.app}</div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: tone }} />
                <span className="text-[9px] uppercase tracking-widest text-foreground/45">live</span>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-0 h-[calc(100%-49px)]">
              <div className="col-span-1 border-r border-border p-3 space-y-1.5">
                <div className="mb-2 flex items-center gap-1.5 rounded-md px-2 py-1.5"
                  style={{ background: `${tone}22`, border: `1px solid ${tone}55` }}>
                  <span className="grid h-4 w-4 place-items-center rounded text-[9px] font-bold text-foreground" style={{ background: tone }}>
                    {c.brand.charAt(0)}
                  </span>
                  <span className="truncate text-[10px] font-semibold text-foreground">{c.brand}</span>
                </div>
                {c.nav.map((n, i) => (
                  <div key={n}
                    className={`rounded-lg px-2.5 py-1.5 text-[11px] ${i === 0 ? "bg-muted/10 text-foreground" : "text-foreground/50"}`}
                  >{n}</div>
                ))}
                <div className="mt-6 h-px bg-muted/10" />
                <div className="mt-4 rounded-lg border border-border p-2">
                  <div className="text-[9px] uppercase tracking-widest text-foreground/40">Region</div>
                  <div className="mt-1 text-[11px] text-foreground/80">{c.region}</div>
                </div>
              </div>
              <div className="col-span-4 p-5 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {c.metrics.map((m, k) => (
                    <motion.div
                      key={`${slideIndex}-${k}`}
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + k * 0.08, duration: 0.5 }}
                      className="rounded-xl border border-border bg-muted/[0.04] p-3"
                    >
                      <div className="text-[9px] uppercase tracking-widest text-foreground/45">{m.label}</div>
                      <div className="mt-1.5 text-xl font-semibold text-foreground">{m.v}</div>
                      <div className="mt-0.5 text-[10px] text-foreground/50">{m.d}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="rounded-xl border border-border bg-muted/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-widest text-foreground/50">{c.chartLabel}</div>
                    <div className="text-[10px] text-foreground/60">live</div>
                  </div>
                  <svg viewBox="0 0 400 90" className="mt-2 h-24 w-full">
                    <defs>
                      <linearGradient id={`spark-${slideIndex}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor={tone} stopOpacity="0.55" />
                        <stop offset="1" stopColor={tone} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      key={`p-${slideIndex}`}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                      d="M0,60 C40,50 60,20 100,25 C140,30 160,70 200,55 C240,42 260,10 300,18 C340,26 360,50 400,32"
                      fill="none" stroke={tone} strokeWidth="2" />
                    <path d="M0,60 C40,50 60,20 100,25 C140,30 160,70 200,55 C240,42 260,10 300,18 C340,26 360,50 400,32 L400,90 L0,90 Z"
                      fill={`url(#spark-${slideIndex})`} />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-muted/[0.03] p-3.5">
                    <div className="text-[10px] uppercase tracking-widest text-foreground/50">{c.slaLabel}</div>
                    <div className="mt-2.5 space-y-1.5">
                      {c.slaRows.map((r, k) => (
                        <div key={k} className="flex items-center gap-2">
                          <span className="w-12 text-[9px] uppercase tracking-widest text-foreground/50">{r.label}</span>
                          <div className="h-1.5 flex-1 rounded-full bg-muted/8 overflow-hidden">
                            <motion.div key={`${slideIndex}-${k}`}
                              initial={{ width: 0 }} animate={{ width: `${r.value}%` }}
                              transition={{ delay: 0.4 + k * 0.1, duration: 0.9 }}
                              className="h-full rounded-full"
                              style={{ background: tone }} />
                          </div>
                          <span className="w-8 text-right text-[9px] text-foreground/45">{r.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/[0.03] p-3.5">
                    <div className="text-[10px] uppercase tracking-widest text-foreground/50">{c.eventsLabel}</div>
                    <div className="mt-2.5 space-y-1.5 text-[10px] text-foreground/70">
                      {c.events.map((e) => (
                        <div key={e} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: tone }} />
                          <span className="truncate">{e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-10 rounded-2xl border border-border bg-muted/[0.07] backdrop-blur-xl px-4 py-3 shadow-2xl"
            style={{ transform: "translateZ(80px)" }}
          >
            <div className="text-[9px] uppercase tracking-widest text-foreground/50">{c.floater.label}</div>
            <div className="text-lg font-semibold text-foreground">{c.floater.value}</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 bottom-8 rounded-2xl border border-border bg-muted/[0.07] backdrop-blur-xl px-4 py-3 shadow-2xl"
            style={{ transform: "translateZ(100px)" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: `${tone}33`, border: `1px solid ${tone}66` }}>
                <BadgeIcon className="h-4 w-4" style={{ color: tone }} />
              </span>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-foreground/60">{c.badge.kicker}</div>
                <div className="text-xs font-semibold text-foreground">{c.badge.text}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const { x: mx, y: my } = useMouseParallax(10);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const s = SLIDES[index];
  const TONES = ["#4c5a8a", "#3a497f", "#de1e24", "#4c5a8a"];
  const tone = TONES[index];

  /* partner logos with real SVGs */
  const PARTNERS = [
    { name: "SAP", Logo: SAPLogo },
    { name: "Salesforce", Logo: SalesforceLogo },
    { name: "Zoho", Logo: ZohoLogo },
    { name: "AWS", Logo: AWSLogo },
    { name: "Microsoft", Logo: MicrosoftLogo },
  ];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-hero" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0 }} animate={{ opacity: 0.55 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 60% 60% at 80% 40%, ${tone}44, transparent 60%)` }}
        />
      </AnimatePresence>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-28 pb-16 md:grid-cols-2 md:gap-10"
      >
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: tone, borderColor: `${tone}66`, background: `${tone}14` }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full" style={{ background: tone }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: tone }} />
                </span>
                {s.eyebrow}
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                <span className="block">{s.title.trim()}</span>
                <span className="block bg-gradient-to-r from-foreground via-foreground/90 to-[color:var(--tone,#4c5a8a)] bg-clip-text text-transparent"
                  style={{ ["--tone" as string]: tone } as React.CSSProperties }>
                  {s.accent}
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-relaxed text-foreground/85 md:text-xl">
                {s.sub}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              Start your journey <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <a href="#services"
              className="group inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-4 text-sm font-medium text-foreground transition-all hover:border-border hover:bg-muted/5">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-border transition-transform group-hover:scale-110">
                <Play className="h-2.5 w-2.5 fill-foreground" />
              </span>
              Watch the story
            </a>
          </motion.div>

          <motion.a
            href="#story"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-foreground"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-8 w-8 place-items-center rounded-full border border-border"
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.span>
            Scroll the story
          </motion.a>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="group relative h-1 w-10 overflow-hidden rounded-full bg-muted/15"
                  aria-label={`Slide ${i + 1}`}
                >
                  {i === index && (
                    <motion.span
                      key={`bar-${index}`}
                      initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 6, ease: "linear" }}
                      className="absolute inset-y-0 left-0" style={{ background: tone }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        <motion.div style={{ x: mx, y: my }} className="relative mt-8 flex justify-center md:mt-0 md:block max-w-full -mb-32 md:-mb-0">
          <div className="origin-top scale-[0.55] sm:scale-[0.7] md:scale-100 md:origin-left">
            <HeroDashboard slideIndex={index} tone={tone} />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

/* ═══════════════════ SCROLL STORYTELLING ═══════════════════ */

const STORY_CHAPTERS = [
  {
    n: "01",
    kicker: "The invitation",
    title: "Move fast without breaking what works.",
    body: "The enterprises we love are trying to become AI-native, without abandoning the systems that built them. That's the tension we resolve.",
    tone: "oklch(0.62 0.22 260)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  },
  {
    n: "02",
    kicker: "The method",
    title: "One partner. Whole stack. Accountable outcomes.",
    body: "SAP core. Salesforce edge. Zoho velocity. AI on top. We orchestrate the layers so your people don't have to.",
    tone: "oklch(0.82 0.14 210)",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
  },
  {
    n: "03",
    kicker: "The result",
    title: "Systems that feel less like software.",
    body: "Interfaces employees actually open. Data leaders trust. Automations that don't need babysitting. Enterprise-grade, human-shaped.",
    tone: "oklch(0.62 0.22 300)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
  },
];

function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const step = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);
  const [active, setActive] = useState(0);
  useEffect(() => step.on("change", (v) => setActive(Math.max(0, Math.min(2, Math.round(v))))), [step]);

  return (
    <section ref={ref} id="story" className="relative bg-background h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center text-foreground">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <motion.div
          animate={{ background: `radial-gradient(ellipse 70% 50% at 70% 40%, ${STORY_CHAPTERS[active].tone}55, transparent 60%)` }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Our Story</div>
            {/* scroll progress indicator */}
            <div className="mt-6 flex gap-2">
              {STORY_CHAPTERS.map((_, i) => (
                <div key={i} className="h-0.5 flex-1 rounded-full overflow-hidden bg-muted/10">
                  <motion.div
                    animate={{ width: active >= i ? "100%" : "0%" }}
                    transition={{ duration: 0.6 }}
                    className="h-full rounded-full bg-brand-red"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-10 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span className="text-brand-red font-semibold">{STORY_CHAPTERS[active].n}</span>
                    <span>{STORY_CHAPTERS[active].kicker}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                    {STORY_CHAPTERS[active].title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/60">
                    {STORY_CHAPTERS[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative hidden h-[520px] lg:block overflow-hidden rounded-3xl shadow-glow border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-background"
              >
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at center, ${STORY_CHAPTERS[active].tone}66, transparent 60%)`, zIndex: 10 }} />
                <img src={STORY_CHAPTERS[active].image} alt={STORY_CHAPTERS[active].title} className="absolute inset-0 h-full w-full object-cover opacity-70" style={{ zIndex: 0 }} />
                <div className="absolute inset-0 grid-lines opacity-30 z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CHALLENGE ═══════════════════ */

function Challenge() {
  return (
    <section className="relative overflow-hidden bg-background py-32 text-foreground">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute -top-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-electric/20 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red">The Challenge</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Enterprises today face a paradox: <span className="text-foreground/75">move faster, without breaking what works.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { icon: Layers, t: "Fragmented systems", d: "Legacy stacks stitched together with tape. Data trapped in silos. Teams flying blind." },
            { icon: TrendingUp, t: "Compressed timelines", d: "Boards want AI-native results next quarter. Engineering needs stability. Someone has to bridge both." },
            { icon: Target, t: "Rising expectations", d: "Customers want Apple-grade experiences from B2B systems that were built in 2008." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full rounded-2xl border border-border bg-muted/[0.04] p-8 transition-all hover:border-foreground/30 hover:bg-muted/[0.07]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ ABOUT ═══════════════════ */

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-muted py-32">
      {/* diagonal stripes pattern — unique to About */}
      <div className="absolute inset-0 diagonal-stripes" />
      <div className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-electric">The Acceleron Approach</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                We don't sell software. <span className="text-gradient">We ship outcomes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                For 15 years we've partnered with enterprises across four continents to modernize
                what matters — from core ERP to customer intelligence — while keeping the people
                who use these systems at the center of every decision.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: Lightbulb, t: "Vision", d: "Every enterprise, intelligent by default." },
                  { icon: Compass, t: "Mission", d: "Turn transformation from risk into runway." },
                  { icon: HeartPulse, t: "Human-first", d: "Technology in service of people." },
                  { icon: Award, t: "Excellence", d: "Enterprise-grade, always." },
                ].map((v) => (
                  <motion.div key={v.t} whileHover={{ y: -4 }} className="rounded-xl border border-border bg-muted p-5 shadow-card transition-shadow hover:shadow-soft">
                    <v.icon className="h-5 w-5 text-electric" />
                    <div className="mt-3 text-sm font-semibold">{v.t}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.d}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl bg-background p-6 sm:p-10 text-foreground shadow-glow overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-20" />
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan/70">Milestones</div>
                  <div className="mt-8 space-y-6">
                    {[
                      { y: "2010", t: "Founded in Bangalore", d: "3 engineers, one workshop." },
                      { y: "2014", t: "First SAP S/4HANA delivery", d: "Enterprise-grade from day one." },
                      { y: "2018", t: "Salesforce Platinum Partner", d: "CRM at scale." },
                      { y: "2022", t: "AI practice launched", d: "Generative + predictive, in production." },
                      { y: "2025", t: "200+ enterprises. 28 countries.", d: "And we're just getting started." },
                    ].map((m, i) => (
                      <motion.div
                        key={m.y}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="relative flex gap-6 border-l border-white/15 pl-6"
                      >
                        <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_20px_var(--cyan-brand)]" />
                        <div className="w-14 shrink-0 text-sm font-semibold text-brand-red">{m.y}</div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium">{m.t}</div>
                          <div className="text-xs text-foreground/50">{m.d}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ SERVICES ═══════════════════ */

const SERVICES = [
  { icon: Database, t: "SAP", d: "S/4HANA, BTP, RISE — end-to-end SAP transformation for the intelligent enterprise." },
  { icon: Cloud, t: "Salesforce", d: "Sales, Service, Marketing, Data Cloud — CRM engineered around your customer." },
  { icon: LineChart, t: "Analytics & AI", d: "From dashboards to generative agents. Turn data into direction." },
  { icon: Blocks, t: "Zoho Suite", d: "Rapid business apps across finance, ops, CX — deployed in weeks, not quarters." },
  { icon: Code2, t: "Software Development", d: "Custom platforms in React, Node, Flutter — enterprise-grade code, product-grade craft." },
  { icon: Cpu, t: "IT Infrastructure", d: "Cloud, hybrid, on-prem. AWS, Azure, Kubernetes — resilient by design." },
  { icon: Briefcase, t: "CXO Advisory", d: "Board-level guidance on tech strategy, M&A, and digital operating models." },
  { icon: ShieldCheck, t: "Cyber Security", d: "Zero-trust architectures, SOC modernization, and compliance you can prove." },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-muted py-32">
      {/* radial spotlight — unique to Services */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgb(58_73_127/0.06),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Services</div>
        </Reveal>
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              A full-stack partner for the <span className="text-gradient">intelligent enterprise.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">Eight practices. One team. One accountable partner from strategy through steady-state.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-muted p-7 shadow-card transition-all hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
                <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, transparent, oklch(0.62 0.22 260 / 0.3), transparent) border-box", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", padding: "1px" }} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-electric opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ TECH STACK — CIRCULAR ROULETTE CAROUSEL ═══════════════════ */

const TECH_ITEMS = [
  { n: "SAP", Logo: SAPLogo, color: "#0FAAFF", projects: "42", desc: "Core ERP implementations for global manufacturing and retail clients." },
  { n: "Salesforce", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg", Logo: SalesforceLogo, color: "#00A1E0", projects: "58", desc: "Enterprise CRM, Data Cloud, and Einstein AI deployments." },
  { n: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", Logo: AWSLogo, color: "#FF9900", projects: "120+", desc: "Cloud architecture, serverless, and resilient data lakes." },
  { n: "Azure", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", Logo: MicrosoftLogo, color: "#0089D6", projects: "84", desc: "Hybrid cloud solutions and enterprise AI integrations." },
  { n: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", Logo: DockerLogo, color: "#2496ED", projects: "150+", desc: "Containerized microservices running at global scale." },
  { n: "Kubernetes", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", Logo: KubernetesLogo, color: "#326CE5", projects: "65", desc: "Orchestrating high-availability clusters for critical workloads." },
  { n: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", Logo: PythonLogo, color: "#3776AB", projects: "210+", desc: "Backend services, ML pipelines, and custom AI agents." },
  { n: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", Logo: NodejsLogo, color: "#8CC84B", projects: "185", desc: "High-performance APIs and real-time enterprise event buses." },
  { n: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", Logo: ReactLogo, color: "#61DAFB", projects: "140+", desc: "Complex frontends and mission-critical enterprise dashboards." },
  { n: "Next.js", Logo: NextjsLogo, color: "#ffffff", projects: "72", desc: "High-conversion commerce and headless CMS architectures." },
  { n: "Flutter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", Logo: FlutterLogo, color: "#02569B", projects: "48", desc: "Cross-platform mobile apps for field service and B2B workflows." },
  { n: "OpenAI", Logo: OpenAILogo, color: "#ffffff", projects: "35", desc: "Generative AI, RAG, and copilot integrations in production." },
  { n: "Power BI", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", Logo: PowerBILogo, color: "#F2C811", projects: "94", desc: "Business intelligence and board-level reporting dashboards." },
  { n: "Snowflake", Logo: SnowflakeLogo, color: "#29B5E8", projects: "28", desc: "Enterprise data warehousing and unified analytics." },
  { n: "Databricks", Logo: DatabricksLogo, color: "#FF3621", projects: "19", desc: "Unified analytics platforms for massive-scale data processing." },
];

function TechStack() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number | null>(null);
  const isPaused = useRef(false);
  const RADIUS = 280; /* radius of the circular orbit in px */
  const COUNT = TECH_ITEMS.length;

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.008; /* slightly slower for half-carousel */
    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      if (!isPaused.current) {
        // Decreasing rotation so items pass the right edge in array order (0, 1, 2...)
        setRotation((r) => (r - speed * dt) % 360);
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  // Dynamically calculate which item is closest to the right edge (angle = 0)
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const activeIdx = Math.round((360 - normalizedRotation) / (360 / COUNT)) % COUNT;
  
  const displayIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;
  const activeTech = displayIdx !== null ? TECH_ITEMS[displayIdx] : null;

  return (
    <section className="relative overflow-hidden bg-background py-24 text-foreground">
      {/* starfield pattern — unique to Tech Stack */}
      <div className="absolute inset-0 starfield" />
      <div className="absolute inset-0 grid-lines opacity-[0.06]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Half Circular Roulette Carousel */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center overflow-hidden lg:overflow-visible order-last lg:order-first">
            {/* Center the circle on the left edge */}
            <div className="absolute left-[-120px] sm:left-[-180px] lg:left-[-280px] top-1/2 -translate-y-1/2 h-[680px] w-[680px] scale-[0.6] sm:scale-[0.75] lg:scale-100 origin-center"
              onMouseEnter={() => { isPaused.current = true; }}
              onMouseLeave={() => { isPaused.current = false; setHoveredIdx(null); }}
            >
              {/* orbit ring visual */}
              <div className="absolute inset-8 rounded-full border border-white/[0.08]" />
              <div className="absolute inset-[100px] rounded-full border border-dashed border-white/[0.04]" />
              
              {/* center glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-brand-gradient blur-[100px] opacity-40" />
              
              {/* orbiting tech icons */}
              {TECH_ITEMS.map((tech, i) => {
                const angle = (360 / COUNT) * i + rotation;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * RADIUS;
                const y = Math.sin(rad) * RADIUS;
                const isHovered = hoveredIdx === i;

                return (
                  <motion.div
                    key={tech.n}
                    className="absolute left-1/2 top-1/2 z-10 cursor-pointer"
                    style={{ x: x - 35, y: y - 35 }}
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      zIndex: isHovered ? 30 : 10,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className={`grid h-[70px] w-[70px] place-items-center rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                      isHovered
                        ? "border-border bg-muted/[0.18] shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]"
                        : "border-border bg-muted/[0.06]"
                    }`} style={isHovered ? { borderColor: `${tech.color}88`, boxShadow: `0 0 40px -8px ${tech.color}55` } : {}}>
                      {tech.iconUrl ? (
                        <img src={tech.iconUrl} alt={tech.n} className="h-8 w-8 object-contain" style={{ filter: `drop-shadow(0 0 8px ${tech.color}44)` }} />
                      ) : (
                        <tech.Logo className="h-8 w-8" style={{ color: tech.color, filter: `drop-shadow(0 0 8px ${tech.color}44)` }} />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Detail Card */}
          <div className="relative z-20 lg:pl-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Technology</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                The stack behind <span className="text-gradient-light">every intelligent enterprise.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-12 h-[220px]">
                <AnimatePresence mode="wait">
                  {activeTech ? (
                    <motion.div
                      key={activeTech.n}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border border-white/20 bg-muted/[0.05] p-8 shadow-glow backdrop-blur-xl"
                      style={{ borderLeftColor: activeTech.color, borderLeftWidth: 4 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: `${activeTech.color}22`, border: `1px solid ${activeTech.color}44` }}>
                          {activeTech.iconUrl ? (
                            <img src={activeTech.iconUrl} alt={activeTech.n} className="h-8 w-8 object-contain" style={{ filter: `drop-shadow(0 0 8px ${activeTech.color}44)` }} />
                          ) : (
                            <activeTech.Logo className="h-8 w-8" style={{ color: activeTech.color, filter: `drop-shadow(0 0 8px ${activeTech.color}44)` }} />
                          )}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{activeTech.n}</div>
                          <div className="text-[10px] uppercase tracking-widest text-foreground/50 mt-1">Ecosystem Partner</div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center gap-8 border-t border-border pt-5">
                        <div>
                          <div className="text-3xl font-semibold text-foreground">{activeTech.projects}</div>
                          <div className="text-[10px] uppercase tracking-widest text-foreground/50 mt-1">Deployments</div>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/70 flex-1">
                          {activeTech.desc}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-3xl border border-border bg-muted/[0.02] p-8 h-full flex flex-col justify-center items-center text-center backdrop-blur-md border-dashed"
                    >
                      <Layers className="h-8 w-8 text-foreground/20 mb-4" />
                      <div className="text-lg font-medium text-foreground/60">Hover over any technology</div>
                      <div className="text-sm text-foreground/40 mt-2">to see our enterprise footprint.</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
            
            {/* bottom info text */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex items-center gap-6 text-sm text-foreground/60 border-l border-border pl-6">
                <div><span className="text-foreground font-medium">Cloud-native</span> architecture</div>
                <div className="h-1 w-1 rounded-full bg-muted/20" />
                <div><span className="text-foreground font-medium">AI-first</span> integrations</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ PRODUCTS ═══════════════════ */

const PRODUCT_DETAILS: Record<string, {
  tagline: string;
  body: string;
  stats: { label: string; value: string }[];
  features: string[];
  mock: () => ReactNode;
}> = {
  Vanijya: {
    tagline: "Composable commerce for enterprise scale.",
    body: "Headless storefronts, unified catalog and AI-driven merchandising across web, mobile and in-store — deployed for retailers serving 40M+ customers.",
    stats: [{ label: "SKUs", value: "2.4M" }, { label: "Peak QPS", value: "38k" }, { label: "TTFB", value: "180ms" }],
    features: ["Headless PWA storefront", "Real-time inventory graph", "AI product recommendations", "Multi-tenant marketplaces"],
    mock: () => (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest text-foreground/60">Live orders</div>
          <div className="text-lg font-semibold text-foreground">1,284/min</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[0,1,2,3,4,5,6,7].map((i) => (
            <div key={i} className="aspect-square rounded-lg border border-border bg-muted/[0.05] p-2">
              <div className="h-full rounded-md bg-gradient-to-br from-white/20 to-white/5" />
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="text-[10px] uppercase tracking-widest text-foreground/50">Conversion · today</div>
          <div className="mt-1 text-2xl font-semibold text-foreground">4.87%</div>
          <div className="mt-1.5 h-1 rounded-full bg-muted/10"><div className="h-full w-3/4 rounded-full bg-muted/80" /></div>
        </div>
      </div>
    ),
  },
  FSM: {
    tagline: "Dispatch, execute, invoice — one platform.",
    body: "AI-optimized routing, offline-first mobile execution and IoT-integrated diagnostics for enterprise field service organizations.",
    stats: [{ label: "Technicians", value: "12k+" }, { label: "First-time fix", value: "91%" }, { label: "Avg ETA", value: "-38%" }],
    features: ["Route optimization", "Offline-first mobile app", "IoT diagnostics", "SLA-aware scheduling"],
    mock: () => (
      <div className="space-y-3">
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="text-[10px] uppercase tracking-widest text-foreground/50">Today's routes</div>
          <div className="mt-2 h-24 rounded bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)] relative overflow-hidden">
            <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full">
              <path d="M10,60 Q60,10 100,40 T190,20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeDasharray="3 3" />
              {[[10,60],[60,25],[100,40],[145,30],[190,20]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="3" fill="white" />
              ))}
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[["Open","124"],["In transit","38"],["Completed","412"],["SLA at risk","3"]].map(([l,v])=>(
            <div key={l} className="rounded-lg border border-border bg-muted/[0.05] p-2.5">
              <div className="text-[9px] uppercase tracking-widest text-foreground/50">{l}</div>
              <div className="text-lg font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  LMS: {
    tagline: "Every lead, scored and routed in seconds.",
    body: "Multi-touch attribution, AI lead scoring and auto-nurture flows that plug into Salesforce and HubSpot — built for high-velocity sales orgs.",
    stats: [{ label: "Lead volume", value: "84k/mo" }, { label: "SQL rate", value: "+52%" }, { label: "Time to route", value: "8s" }],
    features: ["AI lead scoring", "Round-robin routing", "Multi-touch attribution", "Native CRM sync"],
    mock: () => (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[["Hot","342","#de1e24"],["Warm","1,024","#4c5a8a"],["Cold","2,158","#3a497f"]].map(([l,v,c])=>(
            <div key={l} className="rounded-lg border border-border bg-muted/[0.05] p-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{background:c as string}}/>
                <span className="text-[9px] uppercase tracking-widest text-foreground/60">{l}</span>
              </div>
              <div className="mt-1 text-base font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3 space-y-2">
          {[["Acme Corp","96"],["Globex","88"],["Initech","71"]].map(([n,s])=>(
            <div key={n} className="flex items-center justify-between text-xs">
              <span className="text-foreground/85">{n}</span>
              <span className="rounded-full bg-muted/10 px-2 py-0.5 text-foreground">{s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  WOMS: {
    tagline: "Work orders, from request to reconciliation.",
    body: "Approval graphs, cost centers, and vendor SLAs unified across facilities, procurement and finance.",
    stats: [{ label: "WOs / month", value: "48k" }, { label: "Cycle time", value: "-42%" }, { label: "Compliance", value: "99.2%" }],
    features: ["Approval workflows", "Vendor SLA tracking", "Cost center allocation", "Audit trail"],
    mock: () => (
      <div className="space-y-2">
        {[["WO-4821","Approved","#4c5a8a"],["WO-4822","Pending","#de1e24"],["WO-4823","In progress","#3a497f"],["WO-4824","Completed","#4c5a8a"]].map(([id,st,c])=>(
          <div key={id} className="flex items-center justify-between rounded-lg border border-border bg-muted/[0.05] px-3 py-2 text-xs">
            <span className="text-foreground/85 font-medium">{id}</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{background:c as string}}/><span className="text-foreground/70">{st}</span></span>
          </div>
        ))}
      </div>
    ),
  },
  Suraksha: {
    tagline: "Zero-incident field operations.",
    body: "Real-time PPE detection, geofenced compliance and incident workflows for 12,000+ field workers.",
    stats: [{ label: "Workers", value: "12k+" }, { label: "Incidents", value: "-68%" }, { label: "Response", value: "<2 min" }],
    features: ["AI PPE detection", "Geofence alerts", "Incident triage", "Regulatory reporting"],
    mock: () => (
      <div className="space-y-3">
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="text-[10px] uppercase tracking-widest text-foreground/50">Compliance today</div>
          <div className="mt-2 flex items-end gap-2">
            <div className="text-3xl font-semibold text-foreground">98.6%</div>
            <div className="pb-1 text-[10px] text-foreground/60">+2.1 vs. week</div>
          </div>
          <div className="mt-2 flex gap-1">
            {[80,90,72,95,88,92,98].map((h,i)=>(
              <div key={i} className="flex-1 rounded-t bg-muted/70" style={{height:`${h*0.3}px`}}/>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-border bg-muted/[0.05] p-2.5"><div className="text-[9px] uppercase tracking-widest text-foreground/50">PPE checks</div><div className="text-foreground font-semibold">14,208</div></div>
          <div className="rounded-lg border border-border bg-muted/[0.05] p-2.5"><div className="text-[9px] uppercase tracking-widest text-foreground/50">Open incidents</div><div className="text-foreground font-semibold">2</div></div>
        </div>
      </div>
    ),
  },
  QMS: {
    tagline: "Workshops that hit takt time, every time.",
    body: "Job cards, tool tracking, capacity planning and quality gates for automotive & industrial workshops.",
    stats: [{ label: "Job cards", value: "18k/mo" }, { label: "First-pass yield", value: "94%" }, { label: "OEE", value: "+22%" }],
    features: ["Job card lifecycle", "Tool & bay allocation", "Quality gates", "Warranty tracking"],
    mock: () => (
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[1,2,3,4,5,6,7,8].map(i=>(
            <div key={i} className={`aspect-square rounded-lg border ${i%3===0?"border-border bg-muted/15":"border-border bg-muted/[0.05]"}`}>
              <div className="grid h-full place-items-center text-[10px] text-foreground/70">B{i}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-foreground/60">Takt time</span>
            <span className="font-semibold text-foreground">42s / 45s</span>
          </div>
          <div className="mt-1.5 h-1 rounded-full bg-muted/10"><div className="h-full w-[93%] rounded-full bg-muted/80"/></div>
        </div>
      </div>
    ),
  },
};

function ProductCard({ prod, index }: { prod: typeof PRODUCTS[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const d = PRODUCT_DETAILS[prod.name];

  return (
    <Reveal delay={index * 0.08}>
      <div
        className="group relative h-[420px] cursor-pointer"
        style={{ perspective: 1200 }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ─── FRONT ─── */}
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl border border-border bg-muted shadow-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* gradient header area */}
            <div className={`relative h-44 bg-gradient-to-br ${prod.gradient} overflow-hidden`}>
              <div className="absolute inset-0 grid-lines opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute left-5 top-5 rounded-lg bg-muted/15 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90">
                0{index + 1}
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted/20 backdrop-blur-md overflow-hidden p-1.5">
                  {prod.img ? <img src={prod.img} alt={prod.name} className="h-full w-full object-contain drop-shadow-md" /> : <prod.icon className="h-6 w-6 text-foreground" />}
                </div>
              </div>
            </div>
            {/* content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground">{prod.name}</h3>
              <p className="mt-1 text-sm text-electric">{d.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{d.body}</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {d.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-lg font-semibold text-foreground">{s.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* hover hint */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50 transition-opacity group-hover:opacity-100 opacity-60">
              Hover to explore
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>

          {/* ─── BACK ─── */}
          <div
            className={`absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br ${prod.gradient} shadow-glow`}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="absolute inset-0 grid-lines opacity-15" />
            <div className="relative flex h-full flex-col p-6 text-foreground">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-muted/15 backdrop-blur-md overflow-hidden p-1.5">
                  {prod.img ? <img src={prod.img} alt={prod.name} className="h-full w-full object-contain drop-shadow-md" /> : <prod.icon className="h-5 w-5 text-foreground" />}
                </div>
                <div>
                  <div className="text-lg font-semibold">{prod.name}</div>
                  <div className="text-xs text-foreground/70">{prod.desc}</div>
                </div>
              </div>

              <div className="mt-5 flex-1 overflow-hidden rounded-xl border border-border bg-muted/[0.06] backdrop-blur-md p-4">
                {d.mock()}
              </div>

              <div className="mt-4 space-y-1.5">
                {d.features.slice(0, 3).map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-muted/60" />
                    {f}
                  </div>
                ))}
              </div>

              <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all">
                See it in action <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-muted py-32">
      {/* soft wave SVG bg — unique to Products */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]" preserveAspectRatio="none">
        <defs>
          <pattern id="wave-bg" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0,100 Q50,80 100,100 T200,100" fill="none" stroke="#212f60" strokeWidth="0.5"/>
            <path d="M0,140 Q50,120 100,140 T200,140" fill="none" stroke="#212f60" strokeWidth="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave-bg)"/>
      </svg>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Products</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Six platforms. <span className="text-gradient">One promise.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">Hover over any card to explore — every product ships a distinct enterprise experience.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((prod, i) => (
            <ProductCard key={prod.name} prod={prod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CASES ═══════════════════ */

function Cases() {
  const cases = [
    { client: "Global Manufacturing Leader", metric: "42%", label: "OEE improvement", desc: "SAP S/4HANA + IoT platform across 14 plants in 9 countries.", gradient: "from-blue-600 to-indigo-700" },
    { client: "Fortune 500 Retailer", metric: "3.2×", label: "Conversion lift", desc: "Salesforce Data Cloud + Vanijya storefront serving 40M customers.", gradient: "from-violet-600 to-fuchsia-700" },
    { client: "National Logistics Provider", metric: "68%", label: "Fewer safety incidents", desc: "Suraksha rollout to 12,000 field workers with real-time compliance.", gradient: "from-cyan-600 to-blue-700" },
  ];
  return (
    <section className="relative overflow-hidden bg-muted py-32">
      {/* spotlight — unique to Cases */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgb(58_73_127/0.04),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Success Stories</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Outcomes that <span className="text-gradient">show up on the P&L.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.12}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-muted p-8 shadow-card transition-shadow hover:shadow-glow"
              >
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
                {/* watermark number */}
                <div className="pointer-events-none absolute -right-4 -bottom-6 text-[120px] font-bold leading-none text-foreground/[0.03] select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{c.client}</div>
                  <div className="mt-6">
                    <div className="text-6xl font-semibold tracking-tight text-gradient">{c.metric}</div>
                    <div className="mt-1 text-sm font-medium">{c.label}</div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Read case study <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ INDUSTRIES ═══════════════════ */

const INDUSTRIES = [
  { t: "Manufacturing", icon: Factory },
  { t: "Healthcare", icon: HeartPulse },
  { t: "Retail", icon: ShoppingBag },
  { t: "Logistics", icon: Truck },
  { t: "Education", icon: GraduationCap },
  { t: "Government", icon: Landmark },
  { t: "Finance", icon: Banknote },
  { t: "Construction", icon: HardHat },
  { t: "Oil & Gas", icon: Flame },
];

function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-background py-32 text-foreground">
      <div className="absolute inset-0 grid-lines opacity-10" />
      {/* dotted world-map-like pattern — unique to Industries */}
      <div className="absolute inset-0 starfield opacity-40" />
      <div className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-violet/20 blur-[140px]" />
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-brand-red/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Industries</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Deep expertise across <span className="text-gradient-light">nine verticals.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {INDUSTRIES.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <motion.div whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-muted/[0.02] p-8 transition-all hover:border-electric/40 hover:bg-muted/[0.05]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric/0 blur-2xl transition-all group-hover:bg-electric/30" />
                <div className="relative flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-muted/[0.06] transition-colors group-hover:bg-brand-gradient">
                    <it.icon className="h-6 w-6 text-cyan transition-colors group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg font-semibold">{it.t}</div>
                    <div className="text-xs text-foreground/50">Industry practice</div>
                  </div>
                  <ArrowUpRight className="ml-auto h-5 w-5 text-foreground/30 transition-all group-hover:text-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ PROCESS ═══════════════════ */

function Process() {
  const steps = [
    { s: "Discover", d: "Immersion & audit" },
    { s: "Consult", d: "Roadmap & ROI" },
    { s: "Design", d: "UX + architecture" },
    { s: "Develop", d: "Ship in sprints" },
    { s: "Deploy", d: "Rollout & training" },
    { s: "Support", d: "24/7 steady-state" },
  ];
  return (
    <section className="relative overflow-hidden bg-muted py-32">
      {/* blueprint grid — unique to Process */}
      <div className="absolute inset-0 blueprint-grid" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Process</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Six steps from <span className="text-gradient">idea to impact.</span>
          </h2>
        </Reveal>

        <div className="relative mt-24">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden md:block">
            <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="h-5 w-full">
              <defs>
                <linearGradient id="proc-line" x1="0" x2="1">
                  <stop offset="0" stopColor="#252F61" stopOpacity="0.1" />
                  <stop offset="0.5" stopColor="#3a497f" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#de1e24" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.line
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                x1="60" y1="10" x2="1140" y2="10" stroke="url(#proc-line)" strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
          <div className="relative grid gap-10 md:grid-cols-6 md:gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.s} delay={i * 0.1}>
                <motion.div
                  whileHover="hover"
                  className="group relative flex flex-col items-center"
                >
                  <motion.div
                    variants={{ hover: { scale: 1.12, y: -4 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-muted shadow-card"
                  >
                    <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-90" />
                    <motion.div
                      variants={{ hover: { scale: 1.4, opacity: 0 } }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 rounded-full bg-brand-gradient opacity-30"
                    />
                    <span className="relative text-lg font-bold text-white tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  </motion.div>
                  <div className="mt-5 text-center">
                    <div className="text-base font-semibold text-foreground">{step.s}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{step.d}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CAREERS ═══════════════════ */

function Careers() {
  const jobs = [
    { r: "Senior SAP Consultant", loc: "Bangalore · Hybrid", d: "S/4HANA" },
    { r: "Salesforce Solution Architect", loc: "Remote · Global", d: "Sales Cloud" },
    { r: "AI Engineer", loc: "London · Hybrid", d: "GenAI / RAG" },
    { r: "Product Designer", loc: "Bangalore · Onsite", d: "Design Systems" },
  ];
  return (
    <section id="careers" className="relative overflow-hidden bg-background py-32 text-foreground">
      <div className="absolute inset-0 grid-lines opacity-15" />
      {/* aurora effect — unique to Careers */}
      <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-electric/25 blur-[140px]" />
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-brand-red/15 blur-[120px]" />
      <div className="absolute bottom-40 right-[15%] h-48 w-48 rounded-full bg-cyan/20 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Careers</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Our greatest technology is <span className="text-gradient-light">our people.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
                Join a team where craft meets scale — where the code you ship touches millions
                and the culture keeps you human.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { t: "Learning budget", d: "$3K / year" },
                  { t: "Global mobility", d: "6 offices" },
                  { t: "Flex work", d: "Hybrid + remote" },
                  { t: "Equity", d: "For everyone" },
                ].map((b) => (
                  <motion.div key={b.t} whileHover={{ y: -3 }} className="rounded-xl border border-border bg-muted/[0.03] p-4 transition-all hover:bg-muted/[0.06]">
                    <div className="text-sm font-semibold">{b.t}</div>
                    <div className="text-xs text-foreground/60">{b.d}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.2}>
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/50">Open positions</div>
              <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-border bg-muted/[0.02]">
                {jobs.map((j) => (
                  <motion.a key={j.r} href="#contact" whileHover={{ x: 4 }}
                    className="group flex items-center justify-between p-6 transition-colors hover:bg-muted/[0.04]"
                  >
                    <div className="min-w-0">
                      <div className="text-base font-medium">{j.r}</div>
                      <div className="mt-1 text-xs text-foreground/60">{j.loc} · {j.d}</div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-cyan" />
                  </motion.a>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm text-cyan hover:gap-3 transition-all">
                See all openings <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CONTACT ═══════════════════ */

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-muted py-32">
      {/* animated gradient mesh blob — unique to Contact */}
      <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-20 right-1/3 h-64 w-64 rounded-full bg-brand-red/8 blur-[120px] animate-float-med" />
      <div className="absolute inset-0 diagonal-stripes opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-electric">Contact</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Let's build the <span className="text-gradient">next chapter.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Tell us where you're headed. We'll bring the team, the technology, and the accountability.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 space-y-4">
                {[
                  { icon: MapPin, l: "Bangalore · London · Dubai · Singapore" },
                  { icon: Mail, l: "hello@acceleron.solutions" },
                  { icon: Phone, l: "+91 80 4567 8900" },
                ].map((c) => (
                  <div key={c.l} className="flex items-center gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-muted shadow-card">
                      <c.icon className="h-4 w-4 text-electric" />
                    </div>
                    <div className="text-sm">{c.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {["Bangalore", "London", "Dubai", "Singapore"].map((city) => (
                  <motion.div key={city} whileHover={{ y: -3 }} className="rounded-xl border border-border bg-muted p-4 shadow-card transition-shadow hover:shadow-soft">
                    <Globe className="h-4 w-4 text-electric" />
                    <div className="mt-3 text-sm font-semibold">{city}</div>
                    <div className="text-xs text-muted-foreground">HQ region</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form onSubmit={(e) => e.preventDefault()} className="relative rounded-3xl border border-border bg-muted p-8 shadow-soft md:p-10">
              <div className="absolute -inset-px rounded-3xl bg-brand-gradient opacity-20 blur-xl -z-10" />
              <div className="space-y-5">
                {[
                  { l: "Full name", t: "text", p: "Ada Lovelace" },
                  { l: "Work email", t: "email", p: "ada@company.com" },
                  { l: "Company", t: "text", p: "Company Ltd." },
                ].map((f) => (
                  <div key={f.l}>
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{f.l}</label>
                    <input type={f.t} placeholder={f.p}
                      className="mt-2 w-full rounded-xl border border-transparent bg-muted/70 backdrop-blur px-4 py-3.5 text-sm outline-none shadow-[inset_0_0_0_1px_rgb(37_47_97_/_0.08),0_2px_8px_-2px_rgb(37_47_97_/_0.08)] transition-all placeholder:text-navy/35 hover:shadow-[inset_0_0_0_1px_rgb(37_47_97_/_0.16),0_4px_14px_-4px_rgb(37_47_97_/_0.12)] focus:bg-muted focus:shadow-[inset_0_0_0_1.5px_rgb(58_73_127_/_0.6),0_0_0_5px_rgb(58_73_127_/_0.12)]" />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">How can we help?</label>
                  <textarea rows={4} placeholder="Tell us about your project…"
                    className="mt-2 w-full rounded-xl border border-transparent bg-muted/70 backdrop-blur px-4 py-3.5 text-sm outline-none shadow-[inset_0_0_0_1px_rgb(37_47_97_/_0.08),0_2px_8px_-2px_rgb(37_47_97_/_0.08)] transition-all placeholder:text-navy/35 hover:shadow-[inset_0_0_0_1px_rgb(37_47_97_/_0.16),0_4px_14px_-4px_rgb(37_47_97_/_0.12)] focus:bg-muted focus:shadow-[inset_0_0_0_1.5px_rgb(58_73_127_/_0.6),0_0_0_5px_rgb(58_73_127_/_0.12)]" />
                </div>
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-medium text-[#FFFFFF] shadow-glow transition-all hover:scale-[1.02] hover:shadow-[0_28px_80px_-18px_rgb(37_47_97/0.7)]">
                  Send message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ FOOTER ═══════════════════ */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background pt-24 pb-10 text-foreground">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <svg className="absolute inset-x-0 top-0 h-16 w-full" preserveAspectRatio="none" viewBox="0 0 1440 60">
        <motion.path
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
          d="M0,30 Q360,60 720,30 T1440,30" fill="none" stroke="url(#g)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.82 0.14 210)" />
            <stop offset="0.5" stopColor="oklch(0.62 0.22 260)" />
            <stop offset="1" stopColor="oklch(0.62 0.22 300)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img src="/logo.png" alt="Acceleron Solutions" className="h-10 object-contain dark:brightness-0 dark:invert opacity-90" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/60">
              Engineering digital excellence for the enterprises shaping tomorrow.
            </p>
            {/* Real social icons */}
            <div className="mt-6 flex gap-2.5">
              {[
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: XTwitterIcon, label: "X / Twitter" },
                { Icon: GitHubIcon, label: "GitHub" },
                { Icon: InstagramIcon, label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition-all hover:border-cyan hover:text-cyan hover:scale-110">
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { t: "Company", l: ["About", "Careers", "Newsroom", "Contact"] },
            { t: "Services", l: ["SAP", "Salesforce", "AI & Analytics", "Cyber Security"] },
            { t: "Products", l: ["Vanijya", "FSM", "Suraksha", "QMS"] },
          ].map((c) => (
            <div key={c.t}>
              <div className="text-xs font-semibold uppercase tracking-widest text-foreground/50">{c.t}</div>
              <div className="mt-5 space-y-3">
                {c.l.map((li) => (
                  <a key={li} href="#" className="block text-sm text-foreground/70 transition-colors hover:text-foreground">{li}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted/[0.03] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-lg font-semibold">Get the Acceleron dispatch</div>
              <div className="text-sm text-foreground/60">One email a month. Enterprise transformation, decoded.</div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <input type="email" placeholder="you@company.com" className="w-full sm:w-auto min-w-0 flex-1 rounded-full border border-border bg-muted/5 px-5 py-3 text-sm outline-none placeholder:text-foreground/40 focus:border-cyan md:w-72" />
              <button className="w-full sm:w-auto rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-[#FFFFFF] shadow-glow transition-all hover:scale-105">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="text-xs text-foreground/50">© {new Date().getFullYear()} Acceleron Solutions. All rights reserved.</div>
          <div className="flex gap-6 text-xs text-foreground/50">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════ HOME PAGE ASSEMBLY ═══════════════════ */

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <InitialLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Nav />
      <main>
        <Hero />
        <ScrollStory />
        <WaveDivider from="dark" to="light" />
        <About />
        <WaveDivider from="light" to="white" flip />
        <Services />
        <WaveDivider from="white" to="dark" />
        <TechStack />
        <WaveDivider from="dark" to="light" />
        <Products />
        <WaveDivider from="light" to="white" flip />
        <Cases />
        <WaveDivider from="white" to="dark" />
        <Industries />
        <WaveDivider from="dark" to="white" />
        <Process />
        <WaveDivider from="white" to="dark" />
        <Careers />
        <WaveDivider from="dark" to="light" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
