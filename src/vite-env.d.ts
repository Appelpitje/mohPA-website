/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORTAL_URL?: string;
  readonly VITE_MASTERSERVER_HOST?: string;
  readonly VITE_MASTERSERVER_IP?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
