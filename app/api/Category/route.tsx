import Category from "../../(models)/Category"
import {NextResponse} from 'next/server'

export async function POST(req: {json:() => any}) {
    try {
        const categoryData = await req.json()
        await Category.create(categoryData);
        return NextResponse.json({status: 200})
    } catch {
        return NextResponse.json({status: 500})
    }
}
export async function GET() {
    try {
        const category = await Category.find()
        return NextResponse.json({category, status: 200})
    } catch {
        return NextResponse.json({status: 500})
    }
}