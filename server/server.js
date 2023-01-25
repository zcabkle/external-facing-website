import fetch from "node-fetch";
import cors from "cors";
import express from "express";
import getToken from "./auth.js"
import { ContentCutOutlined } from "@mui/icons-material";

const app = express();
app.use(cors());

async function makeRequest(accessToken, url) {
    var obj = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset-utf-8',
            'OData-MaxVersion': '4.0',
            'OData-Version': '4.0',
            'If-None-Match': null
        }
    };
    try {
        var response = await fetch(url, obj);
        return response

    } catch (err) {
        console.log(err);
    }
}

app.get("/foodbanks", async (req, res) => {
    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$select=cr967_name,cr967_address';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "foodbanks": json_content });
})

app.get("/items", async (req, res) => {
    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_items?$select=cr967_name';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "items": json_content });
})

app.listen(3000, async () => {

    console.log("app listening on port 3000")

})
