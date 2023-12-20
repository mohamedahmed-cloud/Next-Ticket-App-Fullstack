import Ticket from "../../../(models)/Ticket"
import {NextResponse} from 'next/server'
import { NextApiRequest } from 'next';

export async function DELETE(req: NextApiRequest, {params}: any) {
    const {id} = params
    try {
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({ok: "Delete Ticket Completed", status: 201})
    }catch (error){
        return NextResponse.json({error: "error During Deleting Ticker", status: 500});
    }
}
export async function GET(req: NextApiRequest, {params}: any) {
    const {id} = params
    try {
        const oldTicket =  await Ticket.findById(id);
        return NextResponse.json({oldTicket, status: 201})
    } catch(error) {
        return NextResponse.json({error, status: 500})
    }
}

export async function PUT(req: {json: ()=> any;}, {params}: any) {
    const {id} = params
    console.log(id)

    try {
        const body = await req.json()
        await Ticket.findByIdAndUpdate(id, body); 
    return NextResponse.json({ok: "Ticket Updated Sucessfully", status: 500})

    } catch (error) {
        return NextResponse.json({error, status: 500})
    }
}
