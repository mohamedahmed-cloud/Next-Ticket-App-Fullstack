import mongoose, {Schema} from 'mongoose'

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:3ZiwuXrWtYlfs49m@cluster0.ukvbxat.mongodb.net/TicketDB')
mongoose.Promise = global.Promise

const categorySchema = new Schema( 
    {
        title: String
    },
    {
        timestamps:true,
    }
)
const Category = mongoose.models.categories || mongoose.model("categories", categorySchema);
export default Category