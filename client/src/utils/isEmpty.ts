
export default function isEmpty(testVar: any):boolean{
    let isTestVarEmpty = false;
    if(testVar === '' || testVar === null || testVar === undefined){
        isTestVarEmpty = true;
    }
    return isTestVarEmpty;
}