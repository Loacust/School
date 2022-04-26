import { AbstractControl} from "@angular/forms";

export function invalidWordVal(control: AbstractControl): {[key: string]: any} | null {
const inValid = /tourist/.test(control.value);
return inValid ? {'invalidWord': {value: control.value}} : null;
}
export function invalidWordVal2(control: AbstractControl): {[key: string]: any} | null {
    const inValid = /nothing/.test(control.value);
    return inValid ? {'invalidWord2': {value: control.value}} : null;
    }
    