import NProgress from "nprogress"

export default (router) => {
    router.beforeEach((_, _2, next) => {
        NProgress.start();
        next();
    })
    router.afterEach(NProgress.done())
}