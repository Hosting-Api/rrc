

// src/app/api/inquiry/route.js

import { NextResponse } from "next/server";
import { google } from "googleapis";


 export async function POST(req,res) {
    try{
            const {name, gender, email, phone, age, description} =  await req.json();
            // console.log(name, gender, email, phone, age, description);
            const auth = new google.auth.GoogleAuth({
                credentials:{
                    client_email: process.env.CLIENT_EMAIL,
                    client_id: process.env.CLIENT_ID,
                    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n') 
                },
                scopes:[
                    'https://www.googleapis.com/auth/drive',
                    'https://www.googleapis.com/auth/drive.file',
                    'https://www.googleapis.com/auth/spreadsheets',
    
                ]
            })
            const sheets = google.sheets({
                auth,
                version: 'v4'
            })
            const response = await sheets.spreadsheets.values.append({
                spreadsheetId: '1pNZXizhH5pUmlbsH5ZIpJwMS6lsn56OdyLnpjrtuqyw',
                range: 'Sheet1!A2:C',
                valueInputOption: 'USER_ENTERED',
                requestBody:{
                    values:[[name, gender, email, phone, age, description]],
                },
            })
            
            return NextResponse.json({message: 'Data Successfully Stored in Google Sheet', response}, {status :200});

    } catch(error){
        return NextResponse.json({message: "Cannot Sent Data", status: 500})
 }
 }