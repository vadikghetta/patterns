declare enum ImgFormat {
    Png = "png",
    Jpg = "jpg"
}
interface IResolution {
    width: number;
    height: number;
}
interface IImageConversion extends IResolution {
    format: ImgFormat;
}
declare class ImageBuilder {
    private formats;
    private resolutions;
    addPng(): this;
    addJpg(): this;
    addResolution(width: number, height: number): this;
    build(): IImageConversion[];
}
declare const builderO: IImageConversion[];
