/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
    // Use the built-in Vite type to avoid the conflict
    readonly glob: ImportGlobFunction;
}