export type MediaMetadata = {
    name: string
    description: string
    category: string
    tag: string
    creator?: string | string[]
    createdAt?: Date
    updatedAt?: Date
    license?: string
    fileType?: string
    url?: string
    size?: number
    resolution?: string
    duration?: number
    language?: string
}
