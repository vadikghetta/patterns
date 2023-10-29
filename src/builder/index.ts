////Builder

enum ImgFormat {
    Png = "png",
    Jpg = "jpg"
}
interface IResolution {
    width : number
    height : number
}

interface IImageConversion extends IResolution {
    format : ImgFormat
}
class ImageBuilder {
    private formats : ImgFormat[] = [] 
    private resolutions : IResolution[] = [] 
    
    addPng () {
        if(this.formats.includes(ImgFormat.Png)) {
            return this
        }
        this.formats.push(ImgFormat.Png)
        return this
    }

    addJpg () {
        if(this.formats.includes(ImgFormat.Jpg)) {
            return this
        }
        this.formats.push(ImgFormat.Jpg)
        return this
    }
    addResolution(width : number, height : number) {
        this.resolutions.push({width, height})

        return this
    }

    build (): IImageConversion[] {
        const res : IImageConversion[] = []
        for(const r of this.resolutions) {
            for(const format of this.formats) {
                res.push({
                    format,
                    width : r.width,
                    height : r.height
                })
            }
        }
        return res
    }
}

const builderO = new ImageBuilder()
.addJpg()
.addPng()
.addResolution(100, 50)
.addResolution(200, 150)
.build()


console.log(builderO)