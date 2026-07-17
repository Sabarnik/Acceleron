const fs = require('fs');

let indexContent = fs.readFileSync('src/routes/index.tsx', 'utf8');

const iconsStart = indexContent.indexOf('/* ─────────────────── REAL SVG ICONS ─────────────────── */');
const routeStart = indexContent.indexOf('export const Route = createFileRoute("/")(');
const sharedStart = indexContent.indexOf('/* ═══════════════════ SHARED PRIMITIVES ═══════════════════ */');
const heroStart = indexContent.indexOf('/* ═══════════════════ HERO ═══════════════════ */');
const footerStart = indexContent.indexOf('/* ═══════════════════ FOOTER ═══════════════════ */');
const homeStart = indexContent.indexOf('export default function Home()') !== -1 
  ? indexContent.indexOf('export default function Home()') 
  : indexContent.indexOf('function Home()', footerStart + 20);

console.log('Indices:', {iconsStart, routeStart, sharedStart, heroStart, footerStart, homeStart});

if ([iconsStart, routeStart, sharedStart, heroStart, footerStart, homeStart].includes(-1)) {
  console.error("Failed to find one or more markers!");
  process.exit(1);
}

const newImports = `import { LinkedInIcon, XTwitterIcon, GitHubIcon, InstagramIcon, SAPLogo, SalesforceLogo, ZohoLogo, AWSLogo, MicrosoftLogo, DockerLogo, KubernetesLogo, PythonLogo, NodejsLogo, ReactLogo, NextjsLogo, OpenAILogo, SnowflakeLogo, FlutterLogo, PowerBILogo, DatabricksLogo } from '../components/ui/Icons';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { useMouseParallax, Reveal, CharReveal, InitialLoader, MagneticButton, Counter, WaveDivider } from '../components/ui/Animations';
import { Nav, PRODUCTS } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
`;

let result = '';

// 1. Keep initial imports
result += indexContent.substring(0, iconsStart);

// 2. Add our new imports
result += newImports + '\n';

// 3. Keep Route definition
result += indexContent.substring(routeStart, sharedStart);

// 4. Skip Shared Primitives and Navigation, jump straight to Hero
result += indexContent.substring(heroStart, footerStart);

// 5. Skip Footer, jump straight to Home Assembly
result += indexContent.substring(homeStart);

fs.writeFileSync('src/routes/index.tsx', result);
