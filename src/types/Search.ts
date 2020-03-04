import { HeadersInit } from 'node-fetch'

export interface Map {
    [index: string]: string | number
}

export interface Mapper {
    [index: string]: Array<string | number>
    // title: Array<number | string>
    // description?: Array<number | string>
    // url: Array<number | string>
}

export interface Search {
    // query: string
    endpoint: string
    queryString: string
    headers?: HeadersInit
    objectMapper: Mapper
    resultMap: Array<number | string>
    baseUrl: string
}

export interface SearchResult {
    url: string
    title: string
}

export type SearchResults = Array<SearchResult>
