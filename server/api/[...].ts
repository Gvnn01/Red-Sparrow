import * as UrlController from "../controller/url"

const router = createRouter()

router.post('/api/shorten', defineEventHandler(UrlController.shortUrl))


export default useBase('/api/v1', router.handler)