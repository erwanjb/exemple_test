export interface Obj {
    text: string
    old: string
    newExpression: string
}

export function remplaceTexte(obj: Obj): string {

    if (!obj.text || !obj.old || obj.newExpression === undefined) {
        throw new Error("l'object " + obj.toString() + "n'a pas de propriété(s) text et/ou old et/ou newExpession")
    }

    const regexp = new RegExp(obj.old, 'g')

    const newText = obj.text.replace(regexp, obj.newExpression)

    return newText
}