import Ticket from "../../(models)/Ticket"
import {NextResponse} from 'next/server'


export async function POST(req: { json: () => any; }) {
    try {
        const ticketData = await req.json();
        await Ticket.create(ticketData);
        return NextResponse.json(({status: 201}))
    } catch (error) {
        return NextResponse.json(({status: 500}))
    }
}

export async function GET() {
    try {
        const ticketData = await Ticket.find();
        return NextResponse.json({ticketData, status: 200})
    } catch (error) {
        return NextResponse.json(({status: 500}))
    }
}
