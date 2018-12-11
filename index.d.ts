declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "react-sizes";

declare module "odometer" {
  interface OdometerProps {
    animation?: boolean,
    auto?: boolean,
    duration?: number,
    format?: string,
    selector?: string,
    theme?: string,
    value: number,
    el: React.ReactNode,
  }
  export default class Odometer {
    constructor(props: OdometerProps);

    public update(value: number): void;
  }
}

declare module "pica" {
  interface PicaOptions {
    quality: number;
    alpha: boolean;
    unsharpAmount: number;
    unsharpRadius: number;
    unsharpThreshold: number;
    cancelToken: Promise<any>;
  }

  interface PicaConfig {
    tile: number;
    features: string[];
    idle: number;
    concurrency: number;
  }
  
  export default class Pica {
    constructor(config?: PicaConfig);
    public resize(from: HTMLCanvasElement | HTMLImageElement, to: HTMLCanvasElement, options?: Partial<PicaOptions>): Promise<HTMLCanvasElement>;
    public toBlob(from: HTMLCanvasElement, mimeType: string, quality: number): Blob;
  }
}

declare module "gaugeJS" {
  interface GaugeOpts {

  }

  export class Donut {
    constructor(target: HTMLCanvasElement);
    public setOptions(opts: GaugeOpts): Donut;
    public setMinValue(val: number): void;
    public set(val: number): void;

    maxValue: number;
    animationSpeed: number;
  }
}

declare module "react-hotjar";
