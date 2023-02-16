const BaseURL ='owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    base:cars,
    byId:(id:number):string=>`${cars}/${id}`

}

export {
    urls,
    BaseURL
}