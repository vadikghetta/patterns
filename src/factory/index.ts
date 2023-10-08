// Пораждающее паттерны Factory

interface IInsurence {
    id: number
    status : string
    setVehicle(vehicle : any) : void
    submit : () => Promise<boolean>
}


class TFInsurence implements IInsurence {
    id: number;
    status: string;
    private vehicle : any
    setVehicle (vehicle: any) : void  {
        this.vehicle = vehicle
    }
    async submit (): Promise<boolean> {
        const res = await fetch("", {
            method : "POST",
            body : JSON.stringify("")
        })
        const data = await res.json();
        return data.isSucces
    }   
   
    
}
class ABInsurence implements IInsurence {
    id: number;
    status: string;
    private vehicle : any
    setVehicle (vehicle: any) : void  {
        this.vehicle = vehicle
    }
    async submit (): Promise<boolean> {
        const res = await fetch("ab", {
            method : "POST",
            body : JSON.stringify("")
        })
        const data = await res.json();
        return data.yes
    }   
   
    
}

abstract class InsurenceFactory {
    db: any
    abstract createInsurence () : IInsurence
    saveHistory (ins : IInsurence) {
        this.db.save(ins.id, ins.status)
    }
}

class TFInsurenceFactory extends InsurenceFactory {
    createInsurence(): TFInsurence {
       return new TFInsurence()
    }

}
class ABInsurencensurenceFactory extends InsurenceFactory {
    createInsurence(): ABInsurence {
       return new ABInsurence()
    }
}

const tfInsurence = new TFInsurenceFactory()
const inst = tfInsurence.createInsurence();
tfInsurence.saveHistory(inst)


const INSURENCE_TYPE = {
    tf : TFInsurence,
    ab : ABInsurence
}

type IT = typeof INSURENCE_TYPE

class InsurenceFactoryAlternative  {
    db: any
     createInsurence<T extends keyof IT> (type : T) : IT[T]  {
        return INSURENCE_TYPE[type]
     }
    saveHistory (ins : IInsurence) {
        this.db.save(ins.id, ins.status)
    }
}

const insurenceFactoryAlternative = new InsurenceFactoryAlternative()
const inst2 = new (insurenceFactoryAlternative.createInsurence("tf"))