// Melhore a tipagem da função "getHandler" para que limite o parametro somente para os tipos de handlers disponíveis
// e que o retorno do handler corresponda ao tipo que foi passado.
// Remova também o cast forçado que atualmente está evitando o erro de compilação

export const handlers = {
  click: (target: HTMLElement) => { },
  scroll: (distance: number) => { },
} as const;

export type Handlers = typeof handlers;

export type HandlerTypes = keyof Handlers;

function getHandler(handlerType: string): Function {
  return handlers[handlerType as keyof Handlers];
}

const badHandleA = getHandler('click')
const badHandleB = getHandler('scroll')
const badHandleC = getHandler('sdfasdfa')

////////////////////////////////////////////////////////////////////////////////


const betterGetHandler = <P extends HandlerTypes>(handlerType: P): Handlers[P] => {
  return handlers[handlerType];
}

const a = betterGetHandler('click')
const b = betterGetHandler('scroll')
// const c = betterGetHandler('sfasdfasf') - não funciona mais
