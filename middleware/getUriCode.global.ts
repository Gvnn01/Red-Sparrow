import * as UrlController from "../server/controller/url"

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.fullPath != '/') {
        const url = await UrlController.getUrl(to.fullPath.replace('/', ''))
        if (url != null) {
            return navigateTo(url.longUrl, {external: true})
        } else {
            return navigateTo('/', {external: false})
        }
    }
})
