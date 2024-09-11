const config = {}

config.baseUrl = "VITE"
config.deviceId = "Sudhanshu"

config.getHeaders = () => {
    return {
        "x-access-token" : shsh
    }
}

export default config