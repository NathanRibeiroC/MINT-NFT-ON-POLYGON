
export default function useAnimationDelay(milliseconds:number){
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}