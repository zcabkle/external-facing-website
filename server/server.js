import fetch from "node-fetch";
import cors from "cors";
import express from "express";
import getToken from "./auth.js"

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
    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$select=cr967_name,cr967_address,cr967_image,cr967_foodbankid,cr967_email,cr967_operatinghours,cr967_postcode,cr967_town,cr967_phonenumber';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "foodbanks": json_content });
})

/* app.get('/foodbanks/:id', async (req, res) => {
    console.log('hit new endpoint');

    var id = req.params.id;
    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$filter=cr967_foodbankid eq ${id}&$select=cr967_name,cr967_address,cr967_image`;

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)
    res.json({ "foodbank_info": json_content });

}) */

app.get("/items", async (req, res) => {
    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_items?$filter=cr967_shareitemwith eq 2&$select=cr967_name,cr967_image,cr967_description,cr967_itemid, cr967_quantity,cr967_stocklevel, cr967_shareitemwith,cr967_sharequantitywith, cr967_sharestocklevelwith,_cr967_foodbankkey_value,cr967_itemcategory';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content1 = await response.json();
    console.log(json_content1)

    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$select=cr967_name,cr967_foodbankid';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content2 = await response.json();
    console.log(json_content2)

    res.json({ "items": json_content1, 'foodbank_names':json_content2 });
})

app.get("/getFoodbanks", async (req, res) => {
    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$select=cr967_name,cr967_foodbankid';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content2 = await response.json();
    console.log(json_content2)

    res.json({ 'foodbank_names':json_content2 });
})

app.get('/items/:id', async (req, res) => {
    var id = req.params.id;
    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_items?$filter=_cr967_foodbankkey_value eq ${id} and cr967_shareitemwith eq 2&$select=cr967_name,cr967_image,cr967_description,cr967_itemid, cr967_quantity,cr967_stocklevel, cr967_shareitemwith,cr967_sharequantitywith, cr967_sharestocklevelwith,_cr967_foodbankkey_value,cr967_itemcategory`;

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content);

    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$select=cr967_name,cr967_foodbankid';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content2 = await response.json();
    console.log(json_content2)

    res.json({ "items": json_content, 'foodbank_names':json_content2 });
})

app.get('/parcels/:id', async (req, res) => {
    var id = req.params.id;
    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_parcels?$filter=_cr967_foodbankkey_value eq ${id} and cr967_shareparcelwith eq 2&$select=cr967_name,cr967_image,cr967_description,cr967_parcelpk`;

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();
    console.log(json_content)

    var url = 'https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks?$select=cr967_name,cr967_foodbankid';

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content2 = await response.json();
    console.log(json_content2)

    res.json({ "parcels": json_content, 'foodbank_names':json_content2 });
})

app.get('/stats', async (req, res) => {
    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_items/$count`

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content = await response.json();

    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_foodbanks/$count`

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content2 = await response.json();

    var url = `https://org6e7090ee.api.crm4.dynamics.com/api/data/v9.2/cr967_outgoingrecords/$count`

    var bearerToken = await getToken();

    var response = await makeRequest(bearerToken, url);
    var json_content3 = await response.json();

    res.json({ "items_count": json_content, "foodbanks_count": json_content2, 'visits_count':json_content3 });
})

app.listen(8080, async () => {
    console.log("app listening on port 8080")
})
