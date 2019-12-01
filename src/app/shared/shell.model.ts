export interface ElementConfig {
  loaded: boolean;
  src: string | string[];
  element: string;
  route: string;
  fileName: string;
}

export interface ElementConfigs {
  [name: string]: ElementConfig;
}

export interface ShellConfig {
  outletId?: string;
  initialRoute: string;
  preload: boolean;
  clients: ElementConfigs;
}
