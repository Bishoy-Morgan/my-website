declare module 'clean-css' {
    export interface CleanCSSMinifiedOutput {
        styles: string;
        sourceMap?: string;
        errors: string[];
        warnings: string[];
    }

    export interface CleanCSSOptions {
        compatibility?: string;
        level?: number | object;
        inline?: boolean | string[];
        sourceMap?: boolean;
    }

    export default class CleanCSS {
        constructor(options?: CleanCSSOptions);
        minify(input: string): CleanCSSMinifiedOutput;
    }
}
