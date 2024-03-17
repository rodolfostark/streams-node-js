import http from 'node:http'
import { Transform } from 'node:stream'

class NegativeNumberStream extends Transform {
    _transform(chunk, enconding, callback) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer((request, response) => {
    return request
        .pipe(new NegativeNumberStream())
        .pipe(response)
})

server.listen(3334)