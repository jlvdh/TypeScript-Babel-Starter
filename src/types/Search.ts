import { HeadersInit } from 'node-fetch'

interface Mapper {
    title: Array<keyof any>
    description: Array<string>
    url: Array<string>
}

export default interface Search {
    // query: string
    endpoint: string
    queryString: string
    headers: HeadersInit
    objectMapper: Mapper,
    resultMap: Array<number | string>
}
