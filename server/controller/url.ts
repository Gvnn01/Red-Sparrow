import { PrismaClient } from "@prisma/client"
import {H3Event} from "h3"
import * as generate from "../../utils/generate"
import * as isUri from "../../utils/isUri"
import { RouteParams } from "vue-router"

const prisma = new PrismaClient()

export async function getUrl(UriCode: string): Promise<any> {
    const url = await prisma.url.findFirst({
        where: {
            urlCode: UriCode
        }
    })
    return url
}

export async function shortUrl(event: H3Event): Promise<any> {
    const baseUrl = process.env.BASEURL || ''
    
    let request = await readBody(event)
    if(!isUri.check(baseUrl)) {
        throw createError({
            statusCode: 401,
            name: "Error",
            statusMessage: 'Invalid base url'
        })
        // return res.status(401).json('Invalid base url')
    }
    const urlCode: string = generate.code();
    if(isUri.check(request.longUrl)) {
        const shortUrl = baseUrl + '/' + urlCode;
        const url = await prisma.url.create({
            data: {
                longUrl: request.longUrl,
                shortUrl: shortUrl,
                urlCode: urlCode,
                date: new Date()
            }
        });
        return url;
    
    } else {
        throw createError({
            statusCode: 401,
            name: "Error",
            statusMessage: 'Invalid long url'
        })
    }

    
}