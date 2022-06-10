export interface IPhoto  {
    id: string
    created_at: string
    updated_at: string
    color: string
    description: string | null
    alt_description: string | null
    urls: IUrls
    user: IAuthor
}

type IUrls = {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
}

interface IAuthor {
    id: string
    name: string
    portfolio_url: string
    profile_image: any
}