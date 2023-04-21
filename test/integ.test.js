const axios = require("axios");

test( "Service returns 'Hello World!'", async() => {
    try {
        const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
        expect(response.data).toBe("Hello world")
    } catch (error) {
        console.error(console.error);
        throw console.error;
    }
    // 
})