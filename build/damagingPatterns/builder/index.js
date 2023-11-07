"use strict";
////Builder
var ImgFormat;
(function (ImgFormat) {
    ImgFormat["Png"] = "png";
    ImgFormat["Jpg"] = "jpg";
})(ImgFormat || (ImgFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPng() {
        if (this.formats.includes(ImgFormat.Png)) {
            return this;
        }
        this.formats.push(ImgFormat.Png);
        return this;
    }
    addJpg() {
        if (this.formats.includes(ImgFormat.Jpg)) {
            return this;
        }
        this.formats.push(ImgFormat.Jpg);
        return this;
    }
    addResolution(width, height) {
        this.resolutions.push({ width, height });
        return this;
    }
    build() {
        const res = [];
        for (const r of this.resolutions) {
            for (const format of this.formats) {
                res.push({
                    format,
                    width: r.width,
                    height: r.height
                });
            }
        }
        return res;
    }
}
const builderO = new ImageBuilder()
    .addJpg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 150)
    .build();
console.log(builderO);
