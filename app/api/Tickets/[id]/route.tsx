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