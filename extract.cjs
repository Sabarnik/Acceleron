const fs = require('fs');

const content = fs.readFileSync('src/routes/index.tsx', 'utf8');

const iconsStart = content.indexOf('/* ─────────────────── REAL SVG ICONS ─────────────────── */');
const toggleStart = content.indexOf('/* ─────────────────── THEME TOGGLE ─────────────────── */');
const sharedStart = content.indexOf('/* ═══════════════════ SHARED PRIMITIVES ═══════════════════ */');
const navStart = content.indexOf('/* ═══════════════════ NAVIGATION ═══════════════════ */');
const heroStart = content.indexOf('/* ═══════════════════ HERO ═══════════════════ */');
const footerStart = content.indexOf('/* ═══════════════════ FOOTER ═══════════════════ */');
const homeAssemblyStart = content.indexOf('/* ─────────────────── HOME PAGE ASSEMBLY ─────────────────── */');

// 1. Extract Icons
const iconsContent = `import { motion } from "motion/react";\n` + content.substring(iconsStart, toggleStart);
fs.writeFileSync('src/components/ui/Icons.tsx', iconsContent.replace('/* ─────────────────── REAL SVG ICONS ─────────────────── */', ''));

// 2. Extract ThemeToggle
const toggleContent = `import { useState, useEffect } from "react";\nimport { Sun, Moon } from "lucide-react";\n` + content.substring(toggleStart, content.indexOf('export const Route = createFileRoute("/")('));
fs.writeFileSync('src/components/ui/ThemeToggle.tsx', toggleContent.replace('/* ─────────────────── THEME TOGGLE ─────────────────── */', ''));

// 3. Extract Animations
const animsContent = `import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";\nimport { useEffect, useRef, useState, type ReactNode } from "react";\n` + content.substring(sharedStart, navStart);
fs.writeFileSync('src/components/ui/Animations.tsx', animsContent.replace('/* ═══════════════════ SHARED PRIMITIVES ═══════════════════ */', ''));

// 4. Extract Nav
// Ensure PRODUCTS array is included. It is defined before Nav in the original file, somewhere inside or before the navStart. Wait, actually PRODUCTS was inside Navigation section in the original file, let me check. 
// Yes, `export const PRODUCTS` is in the Navigation section.
const navContent = `import { useState, useEffect } from "react";\nimport { motion, AnimatePresence } from "motion/react";\nimport { ChevronDown, ArrowUpRight, ArrowRight, Menu, X, ShoppingBag, Wrench, TrendingUp, Boxes, ShieldCheck, Layers } from "lucide-react";\nimport { ThemeToggle } from "../ui/ThemeToggle";\n\n` + content.substring(navStart, heroStart).replace('/* ═══════════════════ NAVIGATION ═══════════════════ */', '');
fs.writeFileSync('src/components/layout/Nav.tsx', navContent + `\nexport { Nav };\n`);

// 5. Extract Footer
const footerContent = `import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";\nimport { LinkedInIcon, XTwitterIcon, GitHubIcon, InstagramIcon } from "../ui/Icons";\nimport { motion } from "motion/react";\n\n` + content.substring(footerStart, homeAssemblyStart).replace('/* ═══════════════════ FOOTER ═══════════════════ */', '');
fs.writeFileSync('src/components/layout/Footer.tsx', footerContent + `\nexport { Footer };\n`);

console.log("Extraction successful.");
