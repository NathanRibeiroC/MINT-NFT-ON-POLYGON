export default function useInputValidation(payload:string, id: string, validationInputsStateObj: Object[]):Object[] {
    if(id === "email"){
        if(payload.length > 200){
        }
    }
    return [{name:"",validated:true}]
}