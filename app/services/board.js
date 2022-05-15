import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'


export default function BoardService() {
    const Board = db.Board
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();

    return {
        write(req, res) {
           new Board(req.body).save(function (err){
               if(err){
                    res
                     .status(500)
                     .send({message: err});
                    console.log('게시판 등록 실패')
                    return;
               }else{
                   res
                    .status(200)
                    .json({ok: 'ok'})
               }
           })
        },
        list(_req, res){
            Board.find()
            .exec((err, boards)=>{
                if(err) {
                    res.status(400)
                    .send(err)
                return
            }else{
                res
                .status(200)
                .json({ success: true, boards})
            }
            })
        }
    }
}
