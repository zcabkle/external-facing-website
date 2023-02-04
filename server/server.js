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
    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$select=cr967_name,cr967_address,cr967_image,cr967_foodbankid';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "foodbanks": json_content });
})

app.get('/foodbanks/:id', async (req, res) => {
    console.log('hit new endpoint');

    var id = req.params.id;
    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$filter=cr967_foodbankid eq ${id}&$select=cr967_name,cr967_address,cr967_image`;

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "foodbank_info": json_content });

})

app.get("/items", async (req, res) => {
    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_items?$filter=cr967_shareitemwith eq 2&$select=cr967_name,cr967_image,cr967_description,cr967_itemid, cr967_quantity,cr967_stocklevel, cr967_shareitemwith,cr967_sharequantitywith, cr967_sharestocklevelwith,_cr967_foodbankkey_value,cr967_itemcategory';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "items": json_content });
})

app.get('/items/:id', async (req, res) => {
    console.log('hit new endpoint');

    var id = req.params.id;
    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_items?$filter=cr967_itemid eq ${id}&$select=cr967_name,cr967_image,cr967_description`;

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "item_info": json_content });

})

app.listen(8080, async () => {

    console.log("app listening on port 8080")

})
