/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}