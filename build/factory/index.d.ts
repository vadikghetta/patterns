interface IInsurence {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit: () => Promise<boolean>;
}
declare class TFInsurence implements IInsurence {
    id: number;
    status: string;
    private vehicle;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}
declare class ABInsurence implements IInsurence {
    id: number;
    status: string;
    private vehicle;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}
declare abstract class InsurenceFactory {
    db: any;
    abstract createInsurence(): IInsurence;
    saveHistory(ins: IInsurence): void;
}
declare class TFInsurenceFactory extends InsurenceFactory {
    createInsurence(): TFInsurence;
}
declare class ABInsurencensurenceFactory extends InsurenceFactory {
    createInsurence(): ABInsurence;
}
declare const tfInsurence: TFInsurenceFactory;
declare const inst: TFInsurence;
declare const INSURENCE_TYPE: {
    tf: typeof TFInsurence;
    ab: typeof ABInsurence;
};
type IT = typeof INSURENCE_TYPE;
declare class InsurenceFactoryAlternative {
    db: any;
    createInsurence<T extends keyof IT>(type: T): IT[T];
    saveHistory(ins: IInsurence): void;
}
declare const insurenceFactoryAlternative: InsurenceFactoryAlternative;
declare const inst2: TFInsurence;
