// Configuración global de ATH Bitcoin

// Direcciones de contratos para cada blockchain
export const CONTRACTS = {
  BSC: "0xaBcD1234567890aBcD1234567890aBcD12345678", // Dirección de contrato en BSC (activo)
  SOLANA: "", // Pendiente de implementación
  ETHEREUM: "", // Pendiente de implementación
};

// Enlaces a exploradores de blockchain
export const EXPLORER_LINKS = {
  BSC: `https://bscscan.com/token/${CONTRACTS.BSC}`,
  SOLANA: "https://solscan.io", // Se actualizará cuando esté disponible
  ETHEREUM: "https://etherscan.io", // Se actualizará cuando esté disponible
};

// Enlaces a exchanges descentralizados
export const DEX_LINKS = {
  PANCAKESWAP: "https://pancakeswap.finance/swap?outputCurrency=" + CONTRACTS.BSC,
  RAYDIUM: "https://raydium.io/swap/", // Se actualizará cuando esté disponible
  UNISWAP: "https://app.uniswap.org/#/swap", // Se actualizará cuando esté disponible
};

// Enlace a DexScreener para análisis de trading
export const DEXSCREENER_LINK = `https://dexscreener.com/bsc/${CONTRACTS.BSC}`;

// Enlaces a redes sociales
export const SOCIAL_LINKS = {
  TELEGRAM: "https://t.me/ATHBitcoinOfficial",
  TWITTER: "https://twitter.com/ATHBitcoinToken",
  DISCORD: "https://discord.gg/athbitcoin", // Ejemplo
};

// Estado de cada blockchain soportada
export const BLOCKCHAIN_STATUS = {
  BSC: "active", // activo
  SOLANA: "coming_soon", // próximamente
  ETHEREUM: "coming_soon", // próximamente
};

// Suministro total de tokens
export const TOTAL_SUPPLY = "1,000,000,000,000"; // 1 billón (en español)

// Distribución por categoría (porcentajes)
export const TOKEN_DISTRIBUTION = {
  LIQUIDITY: 40, // Liquidez
  MARKETING: 15, // Marketing
  DEVELOPMENT: 10, // Desarrollo
  COMMUNITY: 25, // Comunidad
  TEAM: 10, // Equipo
};

// Hitos de Bitcoin para distribución de tokens
export const BITCOIN_MILESTONES = [
  {
    price: 130000,
    distribution: 5,
    completed: false,
  },
  {
    price: 150000,
    distribution: 5,
    completed: false,
  },
  {
    price: 200000,
    distribution: 5,
    completed: false,
  },
];

// Fecha de lanzamiento del token
export const LAUNCH_DATE = "2025-05-28T15:00:00Z"; // 28 de mayo de 2025, 15:00 UTC

// Configuración de SEO
export const SEO_CONFIG = {
  title: {
    es: "ATH Bitcoin (ATHB) - Celebrando el máximo histórico de Bitcoin",
    en: "ATH Bitcoin (ATHB) - Celebrating Bitcoin's all-time high",
    zh: "ATH Bitcoin (ATHB) - 庆祝比特币创历史新高",
    pt: "ATH Bitcoin (ATHB) - Celebrando o recorde histórico do Bitcoin",
    fr: "ATH Bitcoin (ATHB) - Célébrer le record historique de Bitcoin",
  },
  description: {
    es: "ATH Bitcoin (ATHB) es un token multi-blockchain que celebra los nuevos máximos históricos de Bitcoin con una comunidad global.",
    en: "ATH Bitcoin (ATHB) is a multi-blockchain token celebrating Bitcoin's new all-time highs with a global community.",
    zh: "ATH Bitcoin (ATHB) 是一个多链代币，与全球社区一起庆祝比特币创下新的历史高点。",
    pt: "ATH Bitcoin (ATHB) é um token multi-blockchain que celebra os novos recordes históricos do Bitcoin com uma comunidade global.",
    fr: "ATH Bitcoin (ATHB) est un token multi-blockchain qui célèbre les nouveaux sommets historiques de Bitcoin avec une communauté mondiale.",
  },
};