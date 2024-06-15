

// src/app/api/newsletter/route.js

import { NextResponse } from "next/server";
import { google } from "googleapis";


 export async function POST(req,res) {
    try{
            const { email} =  await req.json();
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
                spreadsheetId: '1wp5YIvUNdkFT2sV2YeiYZy2jVYlXihF8DN-BOMjkePc',
                range: 'Sheet1!A2:C',
                valueInputOption: 'USER_ENTERED',
                requestBody:{
                    values:[[ email]],
                },
            })
            
            return NextResponse.json({message: 'Email added Successfully !', response}, {status :200});

    } catch(error){
        return NextResponse.json({message: "Failed to Add email", status: 500})
 }
 }